import Navbar from "./components/Navbar";
import {GlobalStyle} from "./assets/globalStyles";
import Hero from "./components/Hero";
import Categories from "./components/Category";
// import TopSelingCards from "./components/TopSellingCard";
import TopSelling from "./components/TopSelling";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Hero/>
            <Categories/>

<TopSelling></TopSelling>

        </>
    );
}

export default App;
