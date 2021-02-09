import React from "react";

function PhotoContainer({ photoUrls, photoAlt, author }) {
  return (
    <figure className="photo-container">
      <img
        className="img"
        src={photoUrls.regular || photoUrls.raw}
        alt={photoAlt}
      />
      <div className="overlay">
        <figcaption className="author">
          <img
            className="author-img"
            src={author?.profile_image?.small || author?.profile_image?.medium}
            alt={author?.name}
          />
          <a
            target="_blank"
            rel="noreferrer"
            className="author-name"
            href={author?.links?.html}
          >
            {author?.name}
          </a>
        </figcaption>
      </div>
    </figure>
  );
}

export default PhotoContainer;
