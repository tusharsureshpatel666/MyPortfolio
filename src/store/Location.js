import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants/index.js";
const DEFAULT_LOCATION = locations.work;
const userLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (loactions = null) =>
      set((state) => {
        state.activeLocation = loactions;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);
export default userLocationStore;
