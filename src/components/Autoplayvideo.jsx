import React, { useRef, useEffect } from "react";
import YouTube from "react-youtube";

const AutoPlayVideo = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.internalPlayer.playVideo();
          } else {
            videoRef.current.internalPlayer.pauseVideo();
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    // Ensure that the iframe element is ready before observing it
    const observeIframe = () => {
      videoRef.current.internalPlayer.getIframe().then((iframe) => {
        if (iframe instanceof Element) {
          observer.observe(iframe);
        }
      });
    };

    if (videoRef.current && videoRef.current.internalPlayer) {
      observeIframe();
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <YouTube
      ref={videoRef}
      videoId={videoId}
      opts={{
        playerVars: {
          autoplay: 0, // Prevents autoplay on load, autoplay controlled by observer
          mute: 1, // Optional: Starts the video muted
        },
      }}
    />
  );
};

export default AutoPlayVideo;
