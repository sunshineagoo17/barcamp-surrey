import { useState, useRef, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Share.scss';
import logoDark from '../../assets/logos/barcamp_logo-gradient_social.webp';
import logoLight from '../../assets/logos/barcamp_logo-main.webp';

function Share() {
  const [role, setRole] = useState('attendee');
  const [name, setName] = useState('');
  const [includeName, setIncludeName] = useState(false);
  const [title, setTitle] = useState('');
  const [includeTitle, setIncludeTitle] = useState(false);
  const [theme, setTheme] = useState('theme-black');
  const [format, setFormat] = useState('instagram');
  const [includeImage, setIncludeImage] = useState(false);
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const drawBadge = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Dimensions for each format
    const dimensions = {
      instagram: { width: 600, height: 600 },
      twitter: { width: 1200, height: 675 },
      linkedin: { width: 1200, height: 627 },
    };

    // Default to Instagram size if format is invalid
    const { width, height } = dimensions[format] || dimensions.instagram;

    canvas.width = width;
    canvas.height = height;

    // Glassmorphic Gradient Background
    const bgColors = {
      'theme-black': ['rgba(30, 30, 30, 1)', 'rgba(60, 60, 60, 1)'],
      'theme-green': ['rgba(30, 77, 38, 1)', 'rgba(102, 187, 106, 1)'],
      'theme-white': ['#FFFFFF', '#F7F7F7'],
    };

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    bgColors[theme].forEach((color, index) => {
      gradient.addColorStop(index / (bgColors[theme].length - 1), color);
    });
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add Subtle Shapes for White Theme
    if (theme === 'theme-white') {
      const addCircle = (x, y, radius, color) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      };

      addCircle(width * 0.25, height * 0.3, 20, 'rgba(95, 255, 143, 0.1)');
      addCircle(width * 0.75, height * 0.8, 40, 'rgba(68, 255, 0, 0.05)');
      addCircle(width * 0.5, height * 0.5, 50, 'rgb(0, 255, 98, .1)');
    }

    // Add Rounded Border
    if (theme === 'theme-white') {
      ctx.save();
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(40, 40, width - 80, height - 80, 25);
      ctx.stroke();
      ctx.restore();
    }

    // Add Blurred Blobs for Depth
    const createBlob = (x, y, size, color) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 80;
      ctx.fill();
      ctx.restore();
    };
    createBlob(width * 0.27, height * 0.39, 20, 'rgba(255, 255, 255, 0.1)');
    createBlob(width * 0.8, height * 0.8, 40, 'rgba(255, 255, 255, 0.1)');

    // Add Glassmorphic Rounded Rectangle
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 3;
    const padding = 50;
    const radius = 25;
    ctx.roundRect(
      padding,
      padding,
      width - padding * 2,
      height - padding * 2,
      radius
    );
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Dynamically Select Logo Based on Theme
    const logoImg = new Image();
    const isLogoDark = theme === 'theme-white';
    logoImg.src = isLogoDark ? logoDark : logoLight;

    logoImg.onload = () => {
      const baseLogoHeight = 100;
      const adjustedLogoHeight = isLogoDark
        ? baseLogoHeight * 1.35
        : baseLogoHeight;
      const aspectRatio = logoImg.width / logoImg.height;
      const logoWidth = adjustedLogoHeight * aspectRatio;

      const logoX = isLogoDark ? 30 : 60;
      const logoY = 55;

      ctx.drawImage(logoImg, logoX, logoY, logoWidth, adjustedLogoHeight);

      // Headline
      ctx.font =
        format === 'instagram' ? 'bold 26px Fieldwork' : 'bold 36px Fieldwork';
      ctx.fillStyle = theme === 'theme-white' ? '#000' : '#FFF';
      ctx.textAlign = 'center';
      ctx.fillText('Proud Participant of BarCamp Surrey', width / 2, 205);

      // Event Details
      ctx.font = format === 'instagram' ? '20px Fieldwork' : '24px Fieldwork';
      ctx.fillText('www.barcampsurrey.org', width / 2, 250);
      ctx.fillText('August 2, 2025 | 9:00 AM - 5:30 PM', width / 2, 290);
      ctx.fillText('Godalming College, UK', width / 2, 330);

      // Add User Image
      if (includeImage && image) {
        const userImage = new Image();
        userImage.src = image;
        userImage.onload = () => {
          const imgSize = 90;
          const imgY = 405;
          ctx.save();
          ctx.beginPath();
          ctx.arc(width / 2, imgY, imgSize / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(
            userImage,
            width / 2 - imgSize / 2,
            imgY - imgSize / 2,
            imgSize,
            imgSize
          );
          ctx.restore();
        };
      }

      // Participant Name, Title, and Role
      const textBase = 475;
      if (includeName && name) {
        ctx.font = 'bold 24px Fieldwork';
        ctx.fillText(name, width / 2, textBase);
      }
      if (includeTitle && title) {
        ctx.font = 'italic 20px Fieldwork';
        ctx.fillText(title, width / 2, textBase + 30);
      }
      if (role !== 'none') {
        ctx.font = 'bold 20px Fieldwork';
        ctx.fillText(role.toUpperCase(), width / 2, textBase + 60);
      }
    };
  }, [
    role,
    name,
    title,
    theme,
    format,
    includeImage,
    image,
    includeName,
    includeTitle,
  ]);

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
    <div className='share'>
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='share__header'>
        <h1>Create & Share Your Event Badge</h1>
        <p>Personalise your badge for #BarCampSurrey and share it!</p>
      </div>

      {/* Participant Details */}
      <div className='share__section'>
        <h2>Participant Details</h2>

        {/* Include Name Toggle */}
        <label>
          <input
            type='checkbox'
            checked={includeName}
            onChange={(e) => setIncludeName(e.target.checked)}
          />
          Include Name
        </label>
        {includeName && (
          <input
            type='text'
            value={name}
            placeholder='Enter Your Name'
            onChange={(e) => setName(e.target.value)}
            className='share__input'
          />
        )}

        {/* Include Title Toggle */}
        <label>
          <input
            type='checkbox'
            checked={includeTitle}
            onChange={(e) => setIncludeTitle(e.target.checked)}
          />
          Include Title
        </label>
        {includeTitle && (
          <input
            type='text'
            value={title}
            placeholder='Enter Your Title'
            onChange={(e) => setTitle(e.target.value)}
            className='share__input'
          />
        )}
      </div>

      {/* Role Selection */}
      <div className='share__section'>
        <h2>Select Your Role</h2>
        {['organiser', 'speaker', 'attendee', 'volunteer', 'none'].map(
          (option) => (
            <label key={option}>
              <input
                type='radio'
                name='role'
                value={option}
                checked={role === option}
                onChange={() => setRole(option)}
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          )
        )}
      </div>

      {/* Theme Selection */}
      <div className='share__section'>
        <h2>Select a Theme</h2>
        {['theme-black', 'theme-green', 'theme-white'].map((option) => (
          <label key={option}>
            <input
              type='radio'
              name='theme'
              value={option}
              checked={theme === option}
              onChange={() => setTheme(option)}
            />
            {option.replace('theme-', '').charAt(0).toUpperCase() +
              option.slice(1)}
          </label>
        ))}
      </div>

      {/* Format Selection */}
      <div className='share__section'>
        <h2>Choose Format</h2>
        {['instagram', 'twitter', 'linkedin'].map((option) => (
          <label key={option}>
            <input
              type='radio'
              name='format'
              value={option}
              checked={format === option}
              onChange={(e) => setFormat(e.target.value)}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </div>

      {/* Include Photo */}
      <div className='share__section'>
        <h2>Add Your Photo</h2>
        <label>
          <input
            type='checkbox'
            checked={includeImage}
            onChange={() => setIncludeImage(!includeImage)}
          />
          Include Photo
        </label>
        {includeImage && (
          <div className='share__custom-file'>
            <label className='share__custom-file-label'>
              Choose File
              <input
                type='file'
                accept='image/*'
                onChange={handleImageCapture}
              />
            </label>
          </div>
        )}
        {includeImage && (
          <p className='share__fine-print'>
            *Please note: We do not store images. Once downloaded, they are
            immediately deleted, and nothing is kept on our servers.*
          </p>
        )}
      </div>

      {/* Preview */}
      <div className='share__section share__section--preview'>
        <h2>Preview</h2>
        <canvas ref={canvasRef} className='share__canvas'></canvas>
      </div>

      {/* Actions */}
      <div className='share__section'>
        <button className='share__button' onClick={handleDownload}>
          Download Badge
        </button>
        <button
          className='share__button share__button--reset'
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Share;