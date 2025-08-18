import HomeBanner from "@/components/home/HomeBanner";
import MainLayout from "@/components/layout/MainLayout";
import SellBanner from "@/components/sell/SellBanner";
import SellCarsPages from "@/components/sell/SellCarsPages";

// app/sell/page.jsx
export const metadata = { title: "Sell Your Car | CAROSA" };

export default function SellPage() {
  return (
    <>
      <MainLayout>
        <SellCarsPages />
      </MainLayout>
    </>
  );
}
