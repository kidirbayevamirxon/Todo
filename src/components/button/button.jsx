import { Children } from "react";
import cllas from "./button.module.css";
export function Button({children}) {
    return (
        <>
            <button type="submit" className={cllas.button}>{children}</button>
        </>
    )
}