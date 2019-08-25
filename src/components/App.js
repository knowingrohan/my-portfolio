import React from 'react';
import TypewriterText from './TypewriterText';
import Header from './Header';
import Footer from './Footer';
import Window from './Window';
const App = () => {

    return (
        <>
            <Header />
            <main>
                <Window>
                    <TypewriterText value="Hello World. I'm a frontend developer having a strong sense for a minimal UI and an awesome UX design. Explore links and hotspots here to know more about me" />
                </Window>
            </main>
            
            {/* <AnimatedText/> */}
            
            <Footer />
        </>
    );

}

export default App;