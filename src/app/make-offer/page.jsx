"use client";

import MainLayout from "@/components/layout/MainLayout";
import dynamic from "next/dynamic";

// Safer client-only import:
const MakeBestOffer = dynamic(
  () => import("@/components/viewCarsRecent/view/details/makeBestOffer/MakeBestOffer.jsx"),
  { ssr: false }
);

export default function MakeOfferPage() {
  return (
    <MainLayout>
      <MakeBestOffer />
    </MainLayout>
  );
}
