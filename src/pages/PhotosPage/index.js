import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import Autocomplete from "../../components/Autocomplete";

import { getPhotos } from "../../actions/PhotosActions";

function PhotosPage() {
  const dispatch = useDispatch();
  const { photoName } = useParams();

  const photos = useSelector((state) => state.photos);
  console.log("photos: ", photos);

  useEffect(() => {
    dispatch(getPhotos(photoName));
  }, [photoName]);

  return (
    <div className="photos-page">
      <Autocomplete
        defaultValue={photoName}
        leftIconName="magnifying_glass"
        rightIconName="close"
      />
      <h1>{photoName}</h1>
    </div>
  );
}

export default PhotosPage;
