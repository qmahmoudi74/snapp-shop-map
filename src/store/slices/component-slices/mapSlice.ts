import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { useAppDispatch, useAppSelector } from "hooks/useAppRedux";

interface State {
  location: {
    lat: number;
    lng: number;
  };
}

const initialState: State = {
  location: { lat: 35.771624, lng: 51.374313 }
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<State["location"]>) => {
      state.location = action.payload;
    }
  }
});

const { setLocation } = mapSlice.actions;

export const useDispatchMapLocation = () => {
  const dispatch = useAppDispatch();
  return (location: State["location"]) => dispatch(setLocation(location));
};

export const useMapLocation = () =>
  useAppSelector((state) => state.map.location);

export default mapSlice.reducer;
