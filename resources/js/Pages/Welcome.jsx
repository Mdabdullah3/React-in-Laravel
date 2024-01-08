import Banner from "@/Components/Home/Banner";
import Navbar from "@/Components/shared/Navbar";
import { Head } from "@inertiajs/react";
import Products from "./Products/Products";
import Widget from "@/Components/Home/Widget";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth} />
            <Banner />
            <Products />
            <Widget />
        </>
    );
}
