import { FaShareAlt } from "react-icons/fa"; 
import "./VideoModal.scss";

const VideoModal = ({ isOpen, onClose }) => {
  
  // Detect if running locally or in production
  const isLocalhost = window.location.hostname === "localhost";

  // Use correct video URL based on environment
  const videoUrl = isLocalhost
    ? "/video/barcamp_surrey_promo_video.mp4"
    : "https://www.barcampsurrey.org/video/barcamp_surrey_promo.mp4";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Watch the BarCamp Surrey Promo Video!",
          text: "Check out this event promo video for BarCamp Surrey.",
          url: videoUrl,  
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(videoUrl);
      alert("Video link copied! Share it anywhere.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal__overlay" onClick={onClose}>
      <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className="video-modal__close" onClick={onClose}>X</button>

        {/* Share Button */}
        <button className="video-modal__share-button" onClick={handleShare}>
          <FaShareAlt className="video-modal__share-icon" />
        </button>

        {/* Video */}
        <video className="video-modal__video" width="80%" height="auto" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
    </div>
  );
};

export default VideoModal;