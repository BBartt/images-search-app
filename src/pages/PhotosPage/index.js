import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory, Link } from "react-router-dom";

import Masonry from "react-masonry-css";

import { getPhotos, savePhotosSuccess } from "../../actions/PhotosActions";
import { getSuggestions } from "../../actions/SuggestionsActions";

import { getQuery } from "../../utils";

import Autocomplete from "../../components/Autocomplete";
import PhotoContainer from "../../components/PhotoContainer";
import Icon from "../../components/Icon";

import routes from "../../routes";

function PhotosPage() {
  const { photoName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const photos = useSelector((state) => state.photos);
  const suggestions = useSelector((state) => state.suggestions);

  useEffect(() => {
    dispatch(getPhotos(photoName, 50));
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
                photoUrls={photo?.urls}
                photoAlt={photo?.alt_description}
                author={photo?.user}
              />
            ))}
        </Masonry>

        {photos.data.length === 0 && !photos.loading && <div>No photos :(</div>}

        {photos.loading && <div>Loading...</div>}
      </div>
    </div>
  );
}

export default PhotosPage;
