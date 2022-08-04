import React from "react";
import styles from "./index.module.css";

const Title = (): JSX.Element => {
    return (
        <div className={styles["title__wrapper"]}>
            <h1 className={styles["title__text"]}>Shoes Inventory</h1>
        </div>
    )
};

export default Title;