import * as actions from "../actions/PhotosConstants";

const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PHOTOS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actions.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default photosReducer;
