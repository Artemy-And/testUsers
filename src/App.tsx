import './App.module.css';
import React from "react";
import styles from './App.module.css'
import {TableListOfUsers} from "./Components/Table/TableListOfUsers";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.newContainer}>
           <TableListOfUsers/>
      </div>

    </div>
  );
}

export default App;
