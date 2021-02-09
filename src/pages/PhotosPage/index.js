import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory, Link } from "react-router-dom";

import { getPhotos } from "../../actions/PhotosActions";

import Autocomplete from "../../components/Autocomplete";
import PhotoContainer from "../../components/PhotoContainer";
import Icon from "../../components/Icon";

import routes from "../../routes";

function PhotosPage() {
  const { photoName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const photos = useSelector((state) => state.photos);

  useEffect(() => dispatch(getPhotos(photoName)), [photoName, dispatch]);

  const onSearch = useCallback(
    (photo) => {
      history.push({ pathname: `${routes.photos}/${photo}` });
    },
    [history]
  );

  return (
    <div className="photos-page">
      <header className="header">
        <div>
          <Link to={routes.home}>
            <Icon name="home" />
            <div>GO HOME</div>
          </Link>

          <Autocomplete
            defaultValue={photoName}
            getSuggestion={(suggestion) => onSearch(suggestion)}
            leftIconName="magnifying_glass"
            rightIconName="close"
          />
        </div>
        <div>
          <h1 className="h1">{photoName}</h1>
        </div>
      </header>
      <div className="content">
        {photos.data.length > 0 ? (
          photos.data.map((photo) => (
            <PhotoContainer
              key={photo.id}
              photoUrls={photo?.urls}
              photoAlt={photo?.alt_description}
              author={photo?.user}
            />
          ))
        ) : (
          <div>No photos :(</div>
        )}

        {photos.loading && <div>Loading...</div>}
      </div>
    </div>
  );
}

export default PhotosPage;
