import API from "./ApiConfig";

export const photosApi = {
  getPhotos,
  getPhoto,
};

function getPhotos(photoName, pageItems) {
  return API.get("/search/photos", {
    params: { query: photoName, per_page: pageItems },
  });
}

function getPhoto(id) {
  return API.get(`/photos/${id}`);
}
