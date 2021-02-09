import React from "react";

function Author({ imgSrc, imgAlt, linkHref, linkName, instaUserName }) {
  return (
    <figcaption className="author">
      <img className="author-img" src={imgSrc} alt={imgAlt} />
      <a
        target="_blank"
        rel="noreferrer"
        className="author-name"
        href={linkHref}
      >
        <span>{linkName}</span>
        {instaUserName && <span>@{instaUserName}</span>}
      </a>
    </figcaption>
  );
}

export default Author;
