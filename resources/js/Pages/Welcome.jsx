import Banner from "@/Components/Home/Banner";
import Navbar from "@/Components/shared/Navbar";
import { Head } from "@inertiajs/react";
import Products from "./Products/Index";
import Widget from "@/Components/Home/Widget";
import Footer from "@/Components/shared/Footer";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    products,
}) {
    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} />
            <Banner />
            <Products products={products} />
            <Widget />
            <Footer />
        </>
    );
}
