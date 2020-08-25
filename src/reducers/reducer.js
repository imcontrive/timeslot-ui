import { _timeSlotList } from "../utils/constant";

const initState = {
  slots: _timeSlotList
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "SAVE_TIME_SLOT": {
      const localData = state.slots.map((data, index) => {
        if (data._id === action.payload._slotId) {
          let newData = {
            ...data,
            isBooked: true,
            hasData: true,
            info: action.payload
          };
          return newData;
        } else {
          return data;
        }
      });
      window.localStorage.clear();

      // set data into local Storage
      localStorage.setItem("timeSlotList", JSON.stringify(localData));

      return {
        ...state,
        slots: localData
      };
    }

    case "GET_FROM_LOCAL_STORAGE": {
      return {
        ...state,
        slots: action.payload
      };
    }

    default:
      return state;
  }
}
