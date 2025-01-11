import classes from "./header.module.css";
import icon from "../../assets/icon.png";
export function Header() {
    return(
        <>
            <header className={classes.header}>
                <img src={icon} alt="" className={classes.headerLogo} />
                <h1 className={classes.headerH1}>My Tasks</h1>
            </header>
        </>
    )
}