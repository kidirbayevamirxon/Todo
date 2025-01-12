import classes from "./section.module.css";
import { Button } from "../button/button.jsx";
import strelka from "../../assets/arrow-right-solid.svg";
export function Section() {

  return (
    <>
      <section className={classes.section}>
        <div className={classes.sectionDiv}>
          <input
            type="text"
            className={classes.sectionInput}
            placeholder="Try typing Buy milk"
          />
          <Button>
            <img src={strelka} alt="" className={classes.btnImg} />
          </Button>
        </div>
        <div className={classes.textDiv}>
          <p className={classes.text}></p>
        </div>
      </section>
    </>
  );
}
