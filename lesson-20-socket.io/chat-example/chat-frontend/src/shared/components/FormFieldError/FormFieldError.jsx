import styles from "./FormFieldError.module.css";

const FormFieldError = ({children})=> {
    return <span className={styles.error}>{children}</span>
}

export default FormFieldError;