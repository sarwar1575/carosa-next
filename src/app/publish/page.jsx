import MainLayout from "@/components/layout/MainLayout";
import Publish from "@/components/registrationCar/registrationForm/publishCar/Publish";

export const metadata = {
  title: "Publish Your Car - CAROSA",
  description: "Publish your car listing on CAROSA platform",
};

export default function PublishPage() {
  return (
    <MainLayout>
      <Publish />
    </MainLayout>
  );
}
