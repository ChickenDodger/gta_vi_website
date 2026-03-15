import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './sections/Hero';
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <div>
                <NavBar />
                <Hero />
                <FirstVideo />
            </div>
        </main>
    )
}
export default App
