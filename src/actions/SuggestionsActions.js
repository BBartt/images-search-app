import { suggestionsApi } from "../api/SuggestionsApi";
import * as types from "./SuggestionsConstants";

export const fetchSuggestionsStart = () => ({
  type: types.FETCH_SUGGESTIONS_START,
});

export const saveSuggestionsSuccess = (data) => ({
  type: types.FETCH_SUGGESTIONS_SUCCESS,
  payload: data,
});

export const fetchSuggestionsFailure = (errorMessage) => ({
  type: types.FETCH_SUGGESTIONS_FAILURE,
  payload: errorMessage,
});

export const getSuggestions = (query) => (dispatch) => {
  dispatch(fetchSuggestionsStart());
  suggestionsApi
    .getSuggestions(query)
    .then((res) => {
      dispatch(saveSuggestionsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchSuggestionsFailure(err));
    });
};
