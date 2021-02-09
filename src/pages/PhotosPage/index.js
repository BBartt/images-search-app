import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory, Link } from "react-router-dom";

import Masonry from "react-masonry-css";
import Modal from "react-modal";

import {
  getPhotos,
  getPhoto,
  savePhotosSuccess,
  savePhotoSuccess,
} from "../../actions/PhotosActions";
import { getSuggestions } from "../../actions/SuggestionsActions";

import { getQuery } from "../../utils";

import Autocomplete from "../../components/Autocomplete";
import PhotoContainer from "../../components/PhotoContainer";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import Author from "../../components/Author";

import routes from "../../routes";

function PhotosPage() {
  const [showModal, setShowModal] = useState(false);

  const { photoName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const photos = useSelector((state) => state.photos);
  const suggestions = useSelector((state) => state.suggestions);

  useEffect(() => {
    dispatch(getPhotos(photoName, 100));
    return () => dispatch(savePhotosSuccess([]));
  }, [photoName, dispatch]);

  const onSearch = useCallback(
    (photo) => {
      history.push({ pathname: `${routes.photos}/${photo}` });
    },
    [history]
  );

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const handleClick = (photoId) => {
    dispatch(getPhoto(photoId));
    setShowModal(true);
  };

  const handleHideModal = () => {
    dispatch(savePhotoSuccess({}));
    setShowModal(false);
  };

  return (
    <>
      <div className="photos-page">
        <header className="header">
          <div>
            <Link to={routes.home}>
              <Icon name="home" />
              <div>GO HOME</div>
            </Link>
            <Autocomplete
              defaultValue={photoName}
              suggestions={
                suggestions.data?.autocomplete?.length > 0
                  ? getQuery(suggestions.data.autocomplete)
                  : []
              }
              getSuggestion={(suggestion) => onSearch(suggestion)}
              getLetters={(letters) =>
                letters.length >= 3 && dispatch(getSuggestions(letters))
              }
              leftIconName="magnifying_glass"
              rightIconName="close"
            />
          </div>
          <div>
            <h1 className="h1">{photoName}</h1>
          </div>
        </header>
        <div className="content">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos.data.length > 0 &&
              photos.data.map((photo) => (
                <PhotoContainer
                  key={photo.id}
                  photoId={photo.id}
                  photoUrls={photo?.urls}
                  photoAlt={photo?.alt_description}
                  author={photo?.user}
                  showModal={() => handleClick(photo.id)}
                />
              ))}
          </Masonry>

          {photos.data.length === 0 && !photos.loading && (
            <div>No photos :(</div>
          )}

          {photos.loading && <div>Loading...</div>}
        </div>
      </div>

      {showModal && photos.photo?.id && (
        <Modal
          isOpen={true}
          className="modal user-image"
          overlayClassName="modal-overlay"
          ariaHideApp={false}
          onRequestClose={handleHideModal}
        >
          <div className="modal-head">
            <Button onClick={handleHideModal} className="icon" icon="close" />

            <Author
              imgSrc={photos.photo?.user?.profile_image?.medium}
              imgAlt={photos.photo?.user?.name}
              linkHref={photos.photo?.user?.links?.html}
              linkName={photos.photo?.user?.name}
              instaUserName={photos.photo?.user?.instagram_username}
            />
          </div>

          <div className="modal-content">
            <figure>
              <img
                className="img"
                src={photos.photo.urls?.regular || photos.photo.urls?.raw}
                alt={photos.photo?.alt_description}
              />
              <figcaption>
                Description: {photos.photo?.alt_description || "No description"}
              </figcaption>
            </figure>
          </div>

          <div className="modal-foot">
            <div className="location">
              <div className="location-name">
                Location:{" "}
                {photos.photo.location.name || "No data about location"}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default PhotosPage;
