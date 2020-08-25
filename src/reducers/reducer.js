const _timeslotList = [
  {
    slot: "9:00am-10:00am",
    isBooked: false,
    hasData: false,
    _id: "01"
  },
  {
    slot: "10:00am-11:00am",
    isBooked: false,
    hasData: false,
    _id: "02"
  },
  {
    slot: "11:00am-12:00am",
    isBooked: false,
    hasData: false,
    _id: "03"
  },
  {
    slot: "12:00am-01:00pm",
    isBooked: false,
    hasData: false,
    _id: "04"
  },
  {
    slot: "01:00pm-02:00pm",
    isBooked: false,
    hasData: false,
    _id: "05"
  },
  {
    slot: "02:00pm-03:00pm",
    isBooked: false,
    hasData: false,
    _id: "06"
  },
  {
    slot: "03:00pm-04:00pm",
    isBooked: false,
    hasData: false,
    _id: "07"
  },
  {
    slot: "04:00pm-05:00pm",
    isBooked: false,
    hasData: false,
    _id: "08"
  }
];

const initState = {
  slots: _timeslotList
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "SAVE_SLOT": {
      // console.log(action.type, "payload =>", action.payload);
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
      console.log(localData, "local");
      // saved into localStorage
      //step1: clear localStorage if anything exist
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
