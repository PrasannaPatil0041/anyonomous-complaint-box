
import { useState } from "react";
import styles from "../CSS/LoginCard.module.css";

function LoginCard(props){

    const[username,setUsername]=useState("");
    const[mail,setMail]=useState("");

    const handleLogin =async()=>{
      try {
      const response = await axios.post("http://localhost:8080/api/login", {
        mail: username,
        password: password
      });
     
      console.log("Login success:", response.data);
      // You can redirect or show user info here
    } catch (error) {
      console.error("Login failed:", error);
    }
    }

    return(
        <div className={styles.modalOverlay}>
                  <div className={styles.modal}>
                    <h2>{props.loginCategory} Login</h2>
                    <input type="text" placeholder="Username" className={styles.input} value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" className={styles.input} value={mail} onChange={(e)=>setMail(e.target.value)} />
                    <div className={styles.modalButtons}>
                      <button onClick={handleLogin} className={styles.button}>Login</button>
                      <button className={styles.closeButton} onClick={props.closeCard}>Close</button>
                    </div>
                  </div>
        </div>
    );
}

export default LoginCard;