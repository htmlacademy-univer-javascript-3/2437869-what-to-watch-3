import {useEffect, useRef, useState} from 'react';

export type PlayerProps = {
  videoSrc: string;
  imgSrc: string;
  isHovered: boolean;
};

export function VideoPlayer({ videoSrc, imgSrc, isHovered }: PlayerProps) {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    const interval = setInterval(() => {
      setIsPlaying(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      setIsPlaying(false);
    };
  }, [isHovered]);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current?.play();
      } else {
        playerRef.current?.load();
      }
    }
  }, [isPlaying]);
  return (
    <video
      ref={playerRef}
      width="280"
      height="175"
      src={videoSrc}
      poster={imgSrc}
      muted
    />
  );
}
