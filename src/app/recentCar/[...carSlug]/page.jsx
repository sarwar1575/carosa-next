// app/recentCar/[...carSlug]/page.jsx
import MainLayout from "@/components/layout/MainLayout";
import CarViewClient from "@/components/viewCarsRecent/view/CarViewClient";
import recentcars from "../../../data/RecentlyViewedCars.json";

export async function generateStaticParams() {
  return recentcars.map((c, i) => {
    const slug =
      `${(c.brand || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}-${(c.modal || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`.replace(/(^-|-$)+/g, "");
    return { carSlug: [String(i), slug || "car"] };
  });
}

export const metadata = {
  title: "Car Details",
  description: "Recently viewed car details",
};

export default function CarViewPage({ params }) {
  const [idPart] = Array.isArray(params.carSlug) ? params.carSlug : [];
  const idStr = (idPart || "").split("-")[0];
  const idx = Number(idStr);

  const valid = Number.isInteger(idx) && idx >= 0 && idx < recentcars.length;
  const car = valid ? recentcars[idx] : null;

  if (!car) {
    return (
      <MainLayout>
        <div className="container py-5">
          <h2 className="text-white">Car not found</h2>
          <p className="text-white-50">
            Please go back and select another vehicle.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* PASS THE DATA AS PROPS */}
      <CarViewClient car={car} carIndex={idx} />
    </MainLayout>
  );
}
