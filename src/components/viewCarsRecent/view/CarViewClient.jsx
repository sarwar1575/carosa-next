"use client";

import RecentCarDetails from "./details/RecentCarDetails";

// props lo aur aage pass karo
export default function CarViewClient({ car, carIndex }) {
  return <RecentCarDetails car={car} carIndex={carIndex} />;
}
