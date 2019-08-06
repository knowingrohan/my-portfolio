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

            {/* <header>
                <h1>Rohan Mahajan</h1>
            </header> */}



            {/* <p className="read-more">You may ususally find him experimenting his love for food as a hobbychef or exploring new places that serve some mouth relishing culinary delights.</p> */}

            {/* <section>
                <h2>Links</h2>
                <ul>
                    <li>
                        <a href="mailto:rohanm789@gmail.com?subject=Hey, Rohan!">E-mail</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/knowingrohan/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/knowingrohan">GitHub</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/knowingrohan">Twitter</a>
                    </li>
                </ul>
            </section> */}
            <Footer />
        </>
    );

}

export default App;