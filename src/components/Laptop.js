import React from 'react';
import LaptopImg from '../assets/mac1.png';
// import { ReactComponent as LaptopImg } from './mac-3.svg';

// const Laptop = () => {
//     return (
//         <div>
//             <LaptopImg />
//         </div>
//     );
// }

const Laptop = () => {
    return (
        <div className="laptop__container">
            <img src={LaptopImg} alt="laptop container for descriptive text" />
        </div>
    );
}

export default Laptop;