// import Footer from "@/components/navigation/Footer";
// import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainLayout from "@/components/layout/MainLayout";

export default function App({ Component, pageProps }) {
  return(
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
  );
}
