
import Home from "@/components/home/Home";
import HomeLayout from "@/components/layout/HomeLayout";



export default async function HomePage() {

  return (
     <HomeLayout>
        <Home/>
     </HomeLayout>
  );
}
