import {
  SET_USER,
  LOGOUT_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  SET_FETCH_STATE,
  VERIFY_USER,
} from "../actions/clientActions";

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  fetchState: "NOT_FETCHED",
  isAuthenticated: false,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, isAuthenticated: true };

    case VERIFY_USER:
      return { ...state, user: action.payload, isAuthenticated: true };

    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        roles: [],
        addressList: [],
        creditCards: [],
        isAuthenticated: false,
      };

    case SET_ROLES:
      return { ...state, roles: action.payload };

    case SET_THEME:
      return { ...state, theme: action.payload };

    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};

export default clientReducer;
