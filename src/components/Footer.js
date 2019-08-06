import React from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__social">
                <ul>
                    <li>
                        <a href="mailto:rohanm789@gmail.com?subject=Hey, Rohan!">E-mail</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rohanmahajancodes">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/knowingrohan">GitHub</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/rohan_mahajan_">Twitter</a>
                    </li>
                </ul>
            </div>
            <div className="footer__copytext">
                &copy; 2019 Rohan Mahajan
            </div>
        </footer>
    )
};

export default Footer;