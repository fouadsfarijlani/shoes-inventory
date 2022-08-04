import React from "react";
import Segment from "../Segment";
import styles from "./index.module.css"
import { ISegmentsProps } from "./types";


const Segments: React.FC<ISegmentsProps> = ({data}) => {
    return (
        <div className={styles["segments__container"]}>
            {data?.length > 0 ? 
            (data.map((element, key) => (
                <Segment
                    date={element.date}
                    quantity={element.quantity} 
                    index={data.indexOf(element)}
                    key={key}
                />
            ))) :
            (<h2 className={styles["segments__text--novalue"]}>Please enter desired quantity</h2>)
        }
        </div>
    );
}

export default Segments;