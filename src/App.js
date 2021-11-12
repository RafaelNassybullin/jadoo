import Navbar from "./components/Navbar";
import {GlobalStyle} from "./assets/globalStyles";
import Hero from "./components/Hero";
import Categories from "./components/Category";
import TopSelling from "./components/TopSelling";
import Easy from "./components/Easy";
import Sponsors from "./components/Sponsors";
import Subscribe from "./components/Subscribe";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Hero/>
            <Categories/>
            <TopSelling/>
            <Easy/>
            <Sponsors/>



            <Subscribe></Subscribe>
        </>
    );
}

export default App;
