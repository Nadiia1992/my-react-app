import { Component } from "react";
import styles from "./MyComponentClass.module.css";

export default class MyComponentInfo extends Component {
  render() {
    return (
      <div className={styles.ingredients}>
        <ul>Інгредієнти</ul>
        <li>Яйця – 14 шт.</li>
        <li>Цукор – 360 г</li>
        <li>Смажений фундук – 200 г.</li>
        <li>Кукурудзяний крохмаль – 2,5 ст. л.</li>
        <li>Пшеничне борошно – 2,5 ст. л.</li>
        <li>Цукор-пісок – 150 г</li>
        <li>Вершкове масло – 300 г</li>
        <li>Молоко 2,5% – 1 склянка</li>
        <li>Какао – 2-3 ст. л.</li>
        <li>Ванілін – 1 пакетик</li>
        <li>Згущене молоко – 200 г</li>
      </div>
    );
  }
}