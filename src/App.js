import './App.css';
import {Header} from "./components/header/Header";
import {BestServices} from "./components/main/best-services/BestServices";
import {Blog} from "./components/main/blog/Blog";
import {Contact} from "./components/main/contact/Contact";
import {Hero} from "./components/main/hero/HeroSection";
import {BestRecipes} from "./components/main/best-recipes/BestRecipes";
import {Footer} from "./components/footer/Footer";

function App() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
    return (
        <>
            <Header/>

            <Hero/>
            <BestRecipes />
            <BestServices/>
            <Blog/>
            <Contact/>
            <Footer />
        </>
    );
}

export default App;
