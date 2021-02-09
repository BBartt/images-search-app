import React from "react";

import { useDispatch } from "react-redux";

import { getPhoto } from "../../actions/PhotosActions";

import Author from "../Author";

function PhotoContainer({ photoUrls, photoAlt, author, photoId, showModal }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPhoto(photoId));
    showModal();
  };

  return (
    <figure className="photo-container" onClick={handleClick}>
      <img
        className="img"
        src={photoUrls.regular || photoUrls.raw}
        alt={photoAlt}
      />
      <div className="overlay">
        <Author
          imgSrc={author?.profile_image?.small}
          imgAlt={author?.name}
          linkHref={author?.links?.html}
          linkName={author?.name}
        />
      </div>
    </figure>
  );
}

export default PhotoContainer;
