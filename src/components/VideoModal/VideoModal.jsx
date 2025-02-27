import { FaShareAlt } from "react-icons/fa"; 
import "./VideoModal.scss";

const VideoModal = ({ isOpen, onClose, videoSrc }) => { 
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "BarCamp Surrey Promo",
          text: "Check out this event video for BarCamp Surrey and join us!",
          url: videoSrc,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(videoSrc);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal__overlay" onClick={onClose}>
      <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className="video-modal__close" aria-label="Close video modal" onClick={onClose}>X</button>

        {/* Share Button */}
        <button className="video-modal__share-button" aria-label="Share BarCamp Surrey's video" onClick={handleShare}>
          <FaShareAlt className="video-modal__share-icon" />
        </button>

        {/* Video */}
        <video className="video-modal__video" width="80%" height="auto" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
    </div>
  );
};

export default VideoModal;