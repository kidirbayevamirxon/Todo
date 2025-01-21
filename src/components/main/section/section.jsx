import React, { useState, useRef } from 'react';
import classes from './section.module.css';
import strelka from '../../../assets/arrow-right-solid.svg';

export function Section() {
    const [count, setCount] = useState("");
    const textRef = useRef(null);
    const inputRef = useRef(null);
    const textDiv=useRef(null)
    const onClick = () => {
            setCount(inputRef.current.value);
            textRef.current.innerHTML = inputRef.current.value;
            textDiv.current.style.display='block'
            inputRef.current.value=""
    };
    return (
        <>
            <section className={classes.section}>
               <div className={classes.sectionDiv}>
                <input type="text" ref={inputRef} className={classes.sectionInput} placeholder='Try typing Buy milk'/>
                <button type="button" onClick={onClick}><img src={strelka} alt="" className={classes.btnImg} /></button>
               </div>
               <div ref={textDiv} className={classes.textDiv}>
                <p ref={textRef} className={classes.text}></p>
               </div>
            </section>
        </>
    );
}