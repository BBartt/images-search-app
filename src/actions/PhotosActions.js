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

export const getPhotos = (photoName) => (dispatch) => {
  dispatch(fetchPhotosStart());
  photosApi
    .getPhotos(photoName)
    .then((res) => {
      dispatch(savePhotosSuccess(res.data.results));
    })
    .catch((err) => {
      dispatch(fetchPhotosFailure(err));
    });
};
