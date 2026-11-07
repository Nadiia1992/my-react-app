import { Component } from "react";
import styles from "./MyComponentClass.module.css";
import cake from '../assets/cake.jpg';

export default class MyComponentFoto extends Component {
  render() {
    return (
      <div className={styles.card}>
        <img
          src={cake} alt="Київський торт" className={styles.image} />
      </div>
    );
  }
}