import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './sections/Hero';
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <div>
                <NavBar />
                <Hero />
                <FirstVideo />
                <Jason />
                <SecondVideo />
                <Lucia />
            </div>
        </main>
    )
}
export default App
