export const checkInputValue = (value: number): boolean => {
    if (value.toString() === "0" || value.toString() === "" || value.toString().startsWith("0")) {
        return true;
    }
    return false;
}