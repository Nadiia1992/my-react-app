import { Component } from "react";
import styles from "./MyComponentClass.module.css";

export default class MyComponentClass extends Component {
  render() {
    return (
      <div className={styles.card}>
        <p className={styles.text}>
         Легендарний торт "Київський" можна легко приготувати вдома. 
         Хрумкі білкові коржі, ніжний крем та горіхи чудово гармонують у десерті, 
         створюючи незрівнянний горіховий смак. 
        </p>
      </div>
    );
  }
}