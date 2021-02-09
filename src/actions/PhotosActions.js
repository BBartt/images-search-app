import { photosApi } from "../api/PhotosApi";
import * as types from "./PhotosConstants";

export const fetchPhotosStart = () => ({
  type: types.FETCH_PHOTOS_START,
});

export const savePhotosSuccess = (data) => ({
  type: types.FETCH_PHOTOS_SUCCESS,
  payload: data,
});

export const fetchPhotosFailure = (errorMessage) => ({
  type: types.FETCH_PHOTOS_FAILURE,
  payload: errorMessage,
});

export const getPhotos = (photoName, pageItems) => (dispatch) => {
  dispatch(fetchPhotosStart());
  photosApi
    .getPhotos(photoName, pageItems)
    .then((res) => {
      dispatch(savePhotosSuccess(res.data.results));
    })
    .catch((err) => {
      dispatch(fetchPhotosFailure(err));
    });
};

export const fetchPhotoStart = () => ({
  type: types.FETCH_PHOTO_START,
});

export const savePhotoSuccess = (data) => ({
  type: types.FETCH_PHOTO_SUCCESS,
  payload: data,
});

export const fetchPhotoFailure = (errorMessage) => ({
  type: types.FETCH_PHOTO_FAILURE,
  payload: errorMessage,
});

export const getPhoto = (id) => (dispatch) => {
  dispatch(fetchPhotoStart());
  photosApi
    .getPhoto(id)
    .then((res) => {
      dispatch(savePhotoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchPhotoFailure(err));
    });
};
