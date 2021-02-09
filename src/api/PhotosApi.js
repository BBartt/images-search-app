import API from "./ApiConfig";

export const photosApi = {
  getPhotos,
};

function getPhotos(photoName, pageItems) {
  return API.get("/search/photos", {
    params: { query: photoName, per_page: pageItems },
  });
}
