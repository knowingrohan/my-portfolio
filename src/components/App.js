import React from 'react';
import '../styles/main.scss';
import TypewriterText from './TypewriterText';
// import Device from './Device';
import Header from './Header';
import Footer from './Footer';
import Window from './Window';
const App = () => {

    return (
        <>
            <Header />
            <Window>
                <TypewriterText value="A seasoned front-end developer with a keen eye for aesthetics and UI/UX. You may ususally find him experimenting his love for food as a hobbychef or exploring new places that serve some mouth relishing culinary delights" />
            </Window>
            {/* <p className="read-more">You may ususally find him experimenting his love for food as a hobbychef or exploring new places that serve some mouth relishing culinary delights.</p> */}
            <Footer />
        </>
    );

}

export default App;