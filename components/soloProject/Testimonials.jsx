import React from 'react';
import classNames from 'classnames';


export default function Testimonials ({
    withImage = true,
    position = "horizontal",
    quote,
    author,
    title,
    avatar = "/profile-image.jpg",
    companyLogo = "/burnout.png",
    className
})
{
    return (
    <div
      className={classNames(
        "testimonial",
        `testimonial--${position}`,
        { "testimonial--withPic": withImage, "testimonial--noPic": !withImage },
        className
      )}
    >
      {withImage && (
        <div className="testimonial__avatarWrap">
          <img src={avatar} alt={author} className="testimonial__avatar" />
        </div>
      )}

      <div className="testimonial__content">
        <p className="testimonial__quote">“{quote}”</p>
        <div className="testimonial__meta">
          <div className="testimonial__author">
            <strong>{author}</strong>
            <span className="testimonial__title">{title}</span>
          </div>
          <img src={companyLogo} alt="company" className="testimonial__logo" />
        </div>
      </div>
    </div>
  );
}