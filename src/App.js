import logo from './logo.svg';
//we import css in the name of styles. we have to name the class like styles.classnmae
import styles from './CSS/App.module.css';
import { useState } from 'react';
import LoginCard from './Cards/LoginCard';
//we have to use the state



function App() {

  const[showCard,setShowCard]=useState(false);
  const[loginCategory,setloginCategory]=useState("");

  const showTheLoginCard=(Category)=>{
   setShowCard(true);
   setloginCategory(Category);
}

  const closeCard=()=>{
    setShowCard(false);
    setloginCategory("");
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>Anonymous Complaint Box</header>
      <h1 className={styles.title}>Welcome to the Anonymous Complaint Box</h1>
      <p className={styles.text}>Please Login to use the app</p>
      {showCard && <LoginCard loginCategory={loginCategory} closeCard={closeCard}/>}
      <div>
        <button className={styles.button} onClick={()=>showTheLoginCard("Admin")}>Admin</button>
        <button className={styles.button} onClick={()=>showTheLoginCard("User")}>User</button>
      </div>
    </div>
  );
}

export default App;
