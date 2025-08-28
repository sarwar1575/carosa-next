import MainLayout from "@/components/layout/MainLayout";
import CarListCard from "@/components/viewCarsRecent/CarListCard";
import CarListing from "@/components/viewCarsRecent/carsListing/CarListing";


export default function(){
    return(
        <MainLayout>
            <CarListing />
        </MainLayout>
    )
}