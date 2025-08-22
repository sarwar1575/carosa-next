"use client";

import { create } from "zustand";

export const useSelectedCar = create((set) => ({
  car: null,
  setCar: (car) => set({ car }),
  clearCar: () => set({ car: null }),
}));
