import "./VideoModal.scss";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal__overlay" onClick={onClose}>
      <div
        className="video-modal__content"
        onClick={(e) => e.stopPropagation()}>
        <button className="video-modal__close" onClick={onClose}>
          X
        </button>
        <video
          className="video-modal__video"
          width="80%"
          height="auto"
          controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;