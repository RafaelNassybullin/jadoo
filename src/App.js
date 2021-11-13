import {GlobalStyle} from "./assets/globalStyles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Category";
import TopSelling from "./components/TopSelling";
import Easy from "./components/Easy";
import Sponsors from "./components/Sponsors";
import Subscribe from "./components/Subscribe";
import FooterComponent from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Hero/>
            <Categories/>
            <TopSelling/>
            <Easy/>
            <Testimonials/>
            <Sponsors/>
            <Subscribe/>
            <FooterComponent/>
        </>
    );
}

export default App;
