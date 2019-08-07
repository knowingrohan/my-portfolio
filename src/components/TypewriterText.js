import React from 'react';


const TypewriterText = (props) => {


    let txt = props.value;
    let i = 0;
    let string = props.value;
    let speed = 40;
    let textRef = React.createRef();


    function typeWriter() {

        if (i < txt.length ) {
            textRef.innerHTML += string.charAt(i);
            if(string.charAt(i) === '.') {
                textRef.innerHTML += "<br/><br/>$"    
            }
            i++;
            setTimeout(typeWriter, speed);
        } else {
            textRef.innerHTML += `<span>_</span>`;
        }

    }

    const triggerTyperiter = () => {
        setTimeout(typeWriter, 0);
    }

    return (
        <p className="typewriter-text" ref={p => textRef = p} >
            $ {triggerTyperiter()}
        </p>
    );
}

export default TypewriterText;


