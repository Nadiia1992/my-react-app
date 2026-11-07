import "./App.css";
import MyComponentClass from "./components/MyComponentClass";
import MyComponentFoto from "./components/MyComponentFoto";
import MyComponentInfo from "./components/MyComponentInfo";
import MyComponentRecipe from "./components/MyComponentRecipe";
import MyComponentCreme from "./components/MyComponentCreme";
import MyComponentCremeR from "./components/MyComponentCremeR";
import MyComponentDisign from "./components/MyComponentDisign";


export default function App() {
  return (
    <main className="container">
      <h1 className="main-title">Київський торт</h1>
      <MyComponentClass />
      <div className="div-container">
        <MyComponentFoto />
        <MyComponentInfo />

      </div>
      <MyComponentRecipe />
      <h2>Як зробити заварний крем "Шарлотт" на "Київський" торт</h2>
      <div className="div-con">
    
        <MyComponentCreme />
        <MyComponentCremeR />
    
      </div>
      <h2>Як прикрасити торт "Київський" в домашніх умовах</h2>
      <MyComponentDisign />
    </main>

  );
}