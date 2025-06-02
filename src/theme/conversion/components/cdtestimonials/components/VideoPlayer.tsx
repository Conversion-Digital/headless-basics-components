"use client";

import React from 'react';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  const getEmbedUrl = (url: string) => {
    if (!url) return ''; // Return empty string if url is null/undefined

    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }

    return url;
  };

  // Don't render if no URL provided
  if (!url) {
    return <div className="text-gray-500">No video URL provided</div>;
  }

  return (
    <div className="video-container relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={getEmbedUrl(url)}
        title={title || "Video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}; 