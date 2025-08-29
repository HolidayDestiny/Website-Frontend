// src/components/LazyImage.js

import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load images slightly before they appear
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={inView ? src : ''}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.target.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2070&q=80";
      }}
    />
  );
};

export default LazyImage;