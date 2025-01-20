import { useState, useRef, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Share.scss';
import logo from '../../assets/logos/barcamp_logo-main.webp';

function Share() {
  const [role, setRole] = useState('attendee');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
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

    const bgColors = {
      'theme-black': ['#2B2B2B', '#1E1E1E'],
      'theme-green': ['#375B2A', '#A5CB48'],
      'theme-white': ['#FFFFFF', '#EAEAEA'],
    };

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    bgColors[theme].forEach((color, index) => {
      gradient.addColorStop(index / (bgColors[theme].length - 1), color);
    });
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const logoImg = new Image();
    logoImg.src = logo;
    logoImg.onload = () => {
      const logoSize = 100;
      ctx.drawImage(logoImg, 20, 20, logoSize, logoSize);

      ctx.font = 'bold 28px Fieldwork';
      ctx.fillStyle = theme === 'theme-white' ? '#000' : '#FFF';
      ctx.textAlign = 'center';
      ctx.fillText('#BarCampSurrey', width / 2, 120);

      ctx.font = '20px Fieldwork';
      ctx.fillText('August 2, 2025', width / 2, 160);
      ctx.fillText('9:00 AM - 5:30 PM', width / 2, 200);
      ctx.fillText('Godalming College, UK', width / 2, 240);

      if (includeImage && image) {
        const userImage = new Image();
        userImage.src = image;
        userImage.onload = () => {
          const imgSize = 100;
          ctx.save();
          ctx.beginPath();
          ctx.arc(width / 2, height / 2 - 60, imgSize / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(
            userImage,
            width / 2 - imgSize / 2,
            height / 2 - 60 - imgSize / 2,
            imgSize,
            imgSize
          );
          ctx.restore();
        };
      }

      ctx.font = 'bold 36px Fieldwork';
      ctx.fillText(name || 'Your Name', width / 2, height / 2 + 20);

      if (title) {
        ctx.font = 'italic 24px Fieldwork';
        ctx.fillText(title, width / 2, height / 2 + 70);
      }

      if (role !== 'none') {
        ctx.font = 'bold 24px Fieldwork';
        ctx.fillText(role.toUpperCase(), width / 2, height / 2 + 110);
      }
    };
  }, [role, name, title, theme, format, includeImage, image]);

  useEffect(() => {
    drawBadge();
  }, [drawBadge]);

  const handleReset = () => {
    setRole('attendee');
    setName('');
    setTitle('');
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
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="custom-toast" 
      />
      <div className="share__header">
        <h1>Create & Share Your Badge</h1>
        <p>Personalize your badge for #BarCampSurrey and share it!</p>
      </div>

      {/* Role Selection */}
      <div className="share__section">
        <h2>Select Your Role</h2>
        {['attendee', 'organizer', 'speaker', 'volunteer', 'none'].map((option) => (
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
        {['instagram', 'twitter', 'linkedin'].map((option) => (
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
          <p className="fine-print">
            We do not save images. Once downloaded, the image is deleted. We don't keep anything on
            our servers.
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