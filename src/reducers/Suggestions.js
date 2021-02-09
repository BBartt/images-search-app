import * as actions from "../actions/SuggestionsConstants";

const initialState = {
  data: {},
  loading: false,
  errorMessage: "",
};

const suggestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_SUGGESTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actions.FETCH_SUGGESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default suggestionsReducer;
