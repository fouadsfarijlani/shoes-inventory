import React, { useState } from "react";
import styles from "./index.module.css";
import { getDisplayDate } from "../../utils/getDisplayDate";
import { ISegmentProps, styelMap } from "./types";




const Segment: React.FC<ISegmentProps> = ({date, quantity, index}): JSX.Element => {
    const displayDate = index === 0 ? "Now" : getDisplayDate(date);
    const displayQuantity: number | string = quantity > 0 ? quantity : "Invald value";

    const [mouseEntered, setMouseEntered] = useState(false);

    const mouseEnterHandler = (event: React.MouseEvent) => {
        setMouseEntered(true);
    }
    const mouseLeaveHandler = (event: React.MouseEvent) => {
        setMouseEntered(false);
    }

    const styleIndex = index !== 0 ? (index - 1) % 4 : 0;
    const backGroundStyleMap: styelMap = {
        0: "segment--future-1",
        1: "segment--future-2",
        2: "segment--future-3",
        3: "segment--future-4"
    }

    return (
        <div className={`${styles["segment__container"]}
            ${index === 0 ? styles["segment--now"] : styles[backGroundStyleMap[styleIndex]]}`}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            {(mouseEntered || index === 0) && quantity > 0 && (
                <div className={styles["date__container"]}> 
                    <p className={styles["date__text"]}>{displayDate}</p>
                </div>
            )}
            <p className={quantity > 0 ? styles["quantity--valid"] : styles["quantity--invalid"]}>{displayQuantity}</p>
        </div>
    )
};

export default Segment;