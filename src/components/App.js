import React from 'react';
import '../styles/main.scss';
import TypewriterText from './TypewriterText';


const App = () => {

    return (
        <main>
            <header>
                <h1>Rohan Mahajan</h1>
            </header>

            <TypewriterText value="Hello Friend !! Here's me wishing you a sparkling and joyous friendship :) Cheers" />

            <section>
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
            </section>

        </main>
    );

}

export default App;