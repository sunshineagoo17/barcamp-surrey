import { FaShareAlt } from "react-icons/fa"; 
import "./VideoModal.scss";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const handleShare = async () => {
    const videoUrl = window.location.origin + videoSrc;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out BarCamp Surrey!",
          text: "Watch this awesome video to learn more about this event.",
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
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
    </div>
  );
};

export default VideoModal;