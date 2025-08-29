import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  color = 'primary',
  size = 'large',
  showDivider = true 
}) => {
  const titleClasses = [
    'section-title',
    `align-${align}`,
    `color-${color}`,
    `size-${size}`
  ].join(' ');

  const subtitleClasses = [
    'section-subtitle',
    `align-${align}`,
    `color-${color}`,
    `size-${size}`
  ].join(' ');

  return (
    <div className="section-title-container">
      <h2 className={titleClasses}>
        {title}
        {showDivider && <span className="title-divider"></span>}
      </h2>
      {subtitle && (
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 