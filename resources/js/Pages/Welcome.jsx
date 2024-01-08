import Banner from "@/Components/Home/Banner";
import Navbar from "@/Components/shared/Navbar";
import { Head } from "@inertiajs/react";
import Products from "./Products/Products";
import Widget from "@/Components/Home/Widget";
import Footer from "@/Components/shared/Footer";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <Banner />
            <Products />
            <Widget />
            <Footer />
        </>
    );
}
