import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './sections/Hero';
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard.jsx";
import Final from "./sections/Final.jsx";
import Outro from "./sections/Outro.jsx";

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
                <PostCard />
                <Final />
                <Outro />
            </div>
        </main>
    )
}
export default App
