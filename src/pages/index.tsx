import { Countdown } from "../components/Countdown";
import { CreateTodoItem } from "../components/CreateTodoItem";
import { TodoList } from "../components/TodoList";
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState('');
  return (

    <div className={styles.container}>   
    <Head>
      <title>Inicio</title>
    </Head>
      <section>
        <div>
          <Countdown />
        </div>
        <div>
          <TodoList />
        </div>
      </section>

    </div>  
  )
}
