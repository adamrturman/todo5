import React, {useState} from 'react';
import './App.css';
import Input from "./components/Input";
import List from "./components/List";

interface ToDo {
    text: string;
    isCompleted: boolean;
}


const App: React.FC = () => {
    const [list, setList] = useState<ToDo[]>([]);

    const handleAdd = (taskToAdd: string) => {
        const newToDo: ToDo = {
            text: taskToAdd,
            isCompleted: false
        };
        const listWithAddition = [...list, newToDo];
        setList(listWithAddition);
    }

    const handleDelete = (index: number) => {
        const listWithDeletion = list.filter((toDo, i) => {
            if (i !== index) {
                return toDo;
            }
            return undefined;
        });
        setList(listWithDeletion);
    }

    const handleCompleted = (index: number) => {
        const listWithCompletion = list.map((toDo, i) => {
            if (i === index) {
                toDo.isCompleted = !toDo.isCompleted;
            }
            return toDo;
        });
        setList(listWithCompletion);
    }

  return (
    <div className="App">
      <Input handleAdd={handleAdd} />
      <List list={list} handleDelete={handleDelete} handleCompleted={handleCompleted} />
    </div>
  );
}

export default App;
