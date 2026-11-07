import { Component } from "react";
import styles from "./MyComponentClass.module.css";

export default class MyComponentCreme extends Component {
  render() {
    return (
        <div className={styles.card}>

      <div className={styles.ing}>
        <ul>Інгредієнти</ul>
        <li>Яєчні жовтки – 6 шт.;</li>
        <li>Цукровий пісок – 150 грамів;</li>
        <li>Вершкове масло – 200 грамів;</li>
        <li>Молоко – 1 склянка;</li>
        <li>Какао – 2-3 ст. ложки;</li>
        <li>Ванілін</li>
      </div>
      </div>
    );
  }
}
