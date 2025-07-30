
import { useState } from "react";
import styles from "../CSS/LoginCard.module.css";
//import axios from 'axios';
function LoginCard(props){

    const[password,setPassword]=useState("");
    const[mail,setMail]=useState("");
    const[list,setList]=useState([]);

    const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: mail,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed with status: " + response.status);
    }

    const data = await response.json();
    setList(data);
    console.log("Login success:", data);
    // You can redirect or show user info here
  } catch (error) {
    console.error("Login failed:", error);
  }
};
    return(
        <div className={styles.modalOverlay}>
                  <div className={styles.modal}>
                    <h2>{props.loginCategory} Login</h2>
                    <input type="text" placeholder="Username" className={styles.input} value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <div className={styles.modalButtons}>
                      <button onClick={handleLogin} className={styles.button}>Login</button>
                      <button className={styles.closeButton} onClick={props.closeCard}>Close</button>
                    </div>
                  </div>
        </div>
    );
}

export default LoginCard;