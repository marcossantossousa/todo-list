import React from "react";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Taskform from "./components/Tasform";
import Tasklist from "./components/Tasklist";

//css
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Taskform btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <Tasklist />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
