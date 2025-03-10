import  { useRef, useState, useEffect } from 'react';
import advertising from '../assets/images2/advertising.mp4';

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => {
        console.log('Video oynatılıyor');
        setIsPlaying(true);
      };
      const handlePause = () => {
        console.log('Video duraklatıldı');
        setIsPlaying(false);
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const handlePlayPause = () => {
    console.log('Butona tıklandı, videoRef:', videoRef.current);
    if (videoRef.current) {
      if (isPlaying) {
        console.log('Duraklatılıyor...');
        videoRef.current.pause();
      } else {
        console.log('Oynatılıyor...');
        videoRef.current
          .play()
          .catch((error) => {
            console.error('Oynatma hatası:', error);
          });
      }
    } else {
      console.error('videoRef.current mevcut değil');
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
        {/* Video Tag */}
        <video
          ref={videoRef}
          className="w-full h-48 md:h-64 lg:h-72 bg-cover bg-center"
          loop
          muted
          style={{ objectFit: 'cover' }}
        >
          <source src={advertising} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Reflective Water Effect */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gray-800 opacity-70 transform scaleY(-1) origin-bottom"></div>

        {/* Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={handlePlayPause}
            className="bg-blue-500 text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:bg-blue-600 transition duration-300"
          >
            {isPlaying ? (
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Optional Border or Shadow for Card Effect */}
        <div className="absolute inset-0 border-2 border-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default VideoComponent;