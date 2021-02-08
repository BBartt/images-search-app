import React from "react";

import { useParams } from "react-router-dom";

import Autocomplete from "../../components/Autocomplete";

function PhotosPage() {
  const { photoName } = useParams();

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
