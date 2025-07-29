
import styles from "../CSS/LoginCard.module.css";

function LoginCard(props){
    return(
        <div className={styles.modalOverlay}>
                  <div className={styles.modal}>
                    <h2>{props.loginCategory} Login</h2>
                    <input type="text" placeholder="Username" className={styles.input} />
                    <input type="password" placeholder="Password" className={styles.input} />
                    <div className={styles.modalButtons}>
                      <button className={styles.button}>Login</button>
                      <button className={styles.closeButton} onClick={props.closeCard}>Close</button>
                    </div>
                  </div>
                </div>
    );
}

export default LoginCard;