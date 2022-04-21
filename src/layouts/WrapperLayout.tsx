import type {FC} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const WrapperLayout: FC = () => {
    return (
        <div className="min-h-full">
            <Header/>
            <main className="mt-4">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default WrapperLayout;
