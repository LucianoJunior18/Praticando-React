/* eslint-disable react/prop-types */
import style from "./style.module.css";

export default function Title(props) {
    return <h2 className={style.name}>
        {props.children}
    </h2>;
}
