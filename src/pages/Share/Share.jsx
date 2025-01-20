import { useState, useRef, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Share.scss';
import logo from '../../assets/logos/barcamp_logo-main.webp';

function Share() {
  const [role, setRole] = useState('attendee');
  const [name, setName] = useState('');
  const [includeName, setIncludeName] = useState(false); // Toggle for Name
  const [title, setTitle] = useState('');
  const [includeTitle, setIncludeTitle] = useState(false); // Toggle for Title
  const [theme, setTheme] = useState('theme-black');
  const [format, setFormat] = useState('instagram');
  const [includeImage, setIncludeImage] = useState(false);
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  // Memoize the drawBadge function
  const drawBadge = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const dimensions = {
      instagram: { width: 600, height: 600 },
      twitter: { width: 1200, height: 675 },
      linkedin: { width: 1200, height: 627 },
    };
    const { width, height } = dimensions[format];
    canvas.width = width;
    canvas.height = height;

    // Glassmorphic Background Gradient
    const bgColors = {
      'theme-black': ['rgba(43,43,43,0.8)', 'rgba(30,30,30,0.9)'],
      'theme-green': ['rgba(55,91,42,0.8)', 'rgba(165,203,72,0.9)'],
      'theme-white': ['rgba(255,255,255,0.7)', 'rgba(234,234,234,0.8)'],
    };
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    bgColors[theme].forEach((color, index) => {
      gradient.addColorStop(index / (bgColors[theme].length - 1), color);
    });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, width, height);

    // Logo
    const logoImg = new Image();
    logoImg.src = logo;
    logoImg.onload = () => {
      const logoSize = 120;
      ctx.drawImage(logoImg, 40, 40, logoSize, logoSize);

      // Event Details
      ctx.font = 'bold 32px Fieldwork';
      ctx.fillStyle = theme === 'theme-white' ? '#000' : '#FFF';
      ctx.textAlign = 'center';
      ctx.fillText('BarCamp Surrey', width / 2, 100);
      ctx.font = '20px Fieldwork';
      ctx.fillText('www.barcampsurrey.org', width / 2, 140);
      ctx.fillText('August 2, 2025', width / 2, 180);
      ctx.fillText('9:00 AM - 5:30 PM', width / 2, 220);
      ctx.fillText('Godalming College, UK', width / 2, 260);

      // Dynamic Image (if added)
      if (includeImage && image) {
        const userImage = new Image();
        userImage.src = image;
        userImage.onload = () => {
          const imgSize = 150;
          ctx.save();
          ctx.beginPath();
          ctx.arc(width / 2, 360, imgSize / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(
            userImage,
            width / 2 - imgSize / 2,
            360 - imgSize / 2,
            imgSize,
            imgSize
          );
          ctx.restore();
        };
      }

      // Participant Name, Title and Role
      if (includeName && name) {
        ctx.font = 'bold 36px Fieldwork';
        ctx.fillText(name, width / 2, 480);
      }

      if (includeTitle && title) {
        ctx.font = 'italic 24px Fieldwork';
        ctx.fillText(title, width / 2, 520);
      }

      if (role !== 'none') {
        ctx.font = 'bold 24px Fieldwork';
        ctx.fillText(role.toUpperCase(), width / 2, 560);
      }
    };
  }, [role, name, title, theme, format, includeImage, image, includeName, includeTitle]);

  useEffect(() => {
    drawBadge();
  }, [drawBadge]);

  const handleReset = () => {
    setRole('attendee');
    setName('');
    setIncludeName(false);
    setTitle('');
    setIncludeTitle(false);
    setTheme('theme-black');
    setFormat('instagram');
    setIncludeImage(false);
    setImage(null);
    toast.success('Badge reset successfully!');
  };

  const handleImageCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `barcamp-badge-${format}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    toast.success('Badge downloaded successfully!');
  };

  return (
    <div className="share">
      <ToastContainer position="bottom-center" autoClose={4000} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="share__header">
        <h1>Create & Share Your Event Badge</h1>
        <p>Personalise your badge for #BarCampSurrey and share it!</p>
      </div>

      {/* Participant Details */}
      <div className="share__section">
        <h2>Participant Details</h2>

        {/* Include Name Toggle */}
        <label>
          <input
            type="checkbox"
            checked={includeName}
            onChange={(e) => setIncludeName(e.target.checked)}
          />
          Include Name
        </label>
        {includeName && (
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            className="share__input"
          />
        )}

        {/* Include Title Toggle */}
        <label>
          <input
            type="checkbox"
            checked={includeTitle}
            onChange={(e) => setIncludeTitle(e.target.checked)}
          />
          Include Title
        </label>
        {includeTitle && (
          <input
            type="text"
            value={title}
            placeholder="Enter Your Title"
            onChange={(e) => setTitle(e.target.value)}
            className="share__input"
          />
        )}
      </div>

      {/* Role Selection */}
      <div className="share__section">
        <h2>Select Your Role</h2>
        {['organiser', 'speaker', 'attendee', 'volunteer', 'none'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="role"
              value={option}
              checked={role === option}
              onChange={() => setRole(option)}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </div>

      {/* Theme Selection */}
      <div className="share__section">
        <h2>Select a Theme</h2>
        {['theme-black', 'theme-green', 'theme-white'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="theme"
              value={option}
              checked={theme === option}
              onChange={() => setTheme(option)}
            />
            {option.replace('theme-', '').charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </div>

      {/* Format Selection */}
      <div className="share__section">
        <h2>Choose Format</h2>
        {['Instagram', 'Twitter', 'Linkedin'].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="format"
              value={option}
              checked={format === option}
              onChange={() => setFormat(option)}
            />
            {option}
          </label>
        ))}
      </div>

      {/* Include Photo */}
      <div className="share__section">
        <h2>Add Your Photo</h2>
        <label>
          <input
            type="checkbox"
            checked={includeImage}
            onChange={() => setIncludeImage(!includeImage)}
          />
          Include Photo
        </label>
        {includeImage && (
          <div className="share__custom-file">
            <label className="share__custom-file-label">
              Choose File
              <input type="file" accept="image/*" onChange={handleImageCapture} />
            </label>
          </div>
        )}
        {includeImage && (
          <p className="share__fine-print">
            *Please note: We do not store images. Once downloaded, they are immediately deleted, and nothing is kept on our servers.*
          </p>
        )}
      </div>

      {/* Preview */}
      <div className="share__section share__section--preview">
        <h2>Preview</h2>
        <canvas ref={canvasRef} className="share__canvas"></canvas>
      </div>

      {/* Actions */}
      <div className="share__section">
        <button className="share__button" onClick={handleDownload}>
          Download Badge
        </button>
        <button className="share__button share__button--reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Share;