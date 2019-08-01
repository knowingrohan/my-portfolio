import React from 'react';


const TypewriterText = (props) => {

    let txt = props.value;
    var i = 0;
    var string = props.value;
    let speed = 70;
    let textRef = React.createRef();

    function typeWriter() {
        
        if (i < txt.length) {
            textRef.innerHTML += string.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        
    }

    const triggerTyperiter = () => {
        setTimeout(typeWriter, 0);
    }

    return (
        <div>
            <p ref={ p => textRef = p} >{ triggerTyperiter() }</p>
        </div>
    );
}

export default TypewriterText;


