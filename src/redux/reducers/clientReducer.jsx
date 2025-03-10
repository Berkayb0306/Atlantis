const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  fetchState: "NOT_FETCHED", // ✅ FETCH STATE EKLENDİ
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_ROLES":
      return { ...state, roles: action.payload };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    case "SET_FETCH_STATE": // ✅ FETCH DURUMU YÖNETİMİ EKLENDİ
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};

export default clientReducer;
