import classes from './section.module.css';
import { Button } from '../button/button.jsx';
import strelka from '../../assets/arrow-right-solid.svg';
export function Section() {
        const input=document.querySelector('.sectionInput');
        const text=document.querySelector('.text');
        const btn=document.querySelector('.btnImg');
        // btn.addEventListener('click',()=>{
        //     text.textContent=input.value;
        // })

    return (
        <>
            <section className={classes.section}>
               <div className={classes.sectionDiv}>
                <input type="text" className={classes.sectionInput} placeholder='Try typing Buy milk'/>
                <Button ><img src={strelka} alt="" className={classes.btnImg} /></Button>
               </div>
               <div className={classes.textDiv}>
                <p className={classes.text}></p>
               </div>
            </section>
        </>
    )
}
