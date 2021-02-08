import API from "./ApiConfig";

export const photosApi = {
  getPhotos,
};

function getPhotos(photoName) {
  return API.get("/search/photos", { params: { query: photoName } });
}
