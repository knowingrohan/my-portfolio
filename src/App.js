import React from 'react';
import './style.css';

const App = () => {

    return (
        <main>
            <h1>Rohan Mahajan</h1>
            <p className="lead">A seasoned front-end developer with a strong sense for aesthetics and user interaction.
            <br/>
            You may ususally find him experimenting his love for food as a hobbychef or exploring new places that serve some mouth relishing culinary delights.
            </p>
           
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