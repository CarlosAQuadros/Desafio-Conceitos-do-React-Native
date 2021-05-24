import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);
  //const [doneTasks, setDoneTasks] = useState<Task[]>([]);


  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: task,
      done: false
    }
    if (data.title !== "") {
      setTasks(oldState => [...tasks, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
      tasks.map((item)=>{
        if(item.done === false){
          item.done=true
        }else{
          item.done=false
        }
      })
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}