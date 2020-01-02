import { data } from "./stub";
import { SET_MARKER, SEARCH_PLACE } from "./actions";

export const setMarkerReducer = (state = data[0], action) => {
  switch (action.type) {
    case SET_MARKER:
      return action.payload;
    default:
      return state;
  }
};

export const searchPlaceReducer = (state = data, action) => {
  switch (action.type) {
    case SEARCH_PLACE:
      return data.filter(i =>
        i.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    default:
      return state;
  }
};
