import React from "react";
import styles from "./index.module.css";
import { ISearchForm } from "./types";


const SearchForm: React.FC<ISearchForm> = ({handleInputValue}) => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        handleInputValue(event.target.value as unknown as number);
    }
    
    return (
        <form onSubmit={submitHandler} className={styles["form__container"]}>
            <div className={styles["form__content"]}>
                <label className={styles["form__label"]}>Quantity:</label>
                <input 
                    type={"number"}
                    className={styles["form__input"]}
                    onChange={inputHandler}
                />
            </div>
        </form>
    );
};

export default SearchForm;