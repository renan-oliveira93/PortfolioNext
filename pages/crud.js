import NavBar from "../src/components/navbar/navbar";
import Head from "next/head";
import Footer from "../src/components/footer/footer";
import MenuMobile from "../src/components/menu_mobile/menu_mobile";
import CrudUsuarios from "../src/components/crud/crud";
import FeedbackField from "../src/components/feedback/feedback";


export default function Crud() {
    return (
        <div>
            <Head>
                <title>Portfólio | Crud</title>
            </Head>
            <MenuMobile />
            <NavBar />
            <CrudUsuarios />
            <FeedbackField />
            <Footer />
        </div>
    )
};