import React from "react";
import HomeHero from "../components/HomeHero";
import HomeExtra from "../components/HomeExtra";
import HomeExtras from "../components/HomeExtras";
import HomeExtras2 from "../components/HomeExtras2";
import Support from "../components/Support";
import Freetrial from "../components/Freetrial";
import Footer from "../components/Footer";

const HomePage = () => {
    return(
        <div className="flex flex-col">
            <HomeHero/>
            <HomeExtra/>
            <HomeExtras/>
            <HomeExtras2/>
            <Support/>
            <Freetrial/>
            <Footer/>
        </div>
    );
}

export default HomePage;