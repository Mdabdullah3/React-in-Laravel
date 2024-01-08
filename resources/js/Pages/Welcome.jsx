import Banner from "@/Components/Home/Banner";
import Navbar from "@/Components/shared/Navbar";
import { Link, Head } from "@inertiajs/react";
import Products from "./Products/Products";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth} />
            <Banner />
            <Products />
        </>
    );
}
