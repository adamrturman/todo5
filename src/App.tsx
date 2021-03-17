import React, {useState} from 'react';
import ToDo from "./interfaces/ToDo";
import './App.css';
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Landing from "./components/Landing/Landing"

const App: React.FC = () => {
    const [list, setList] = useState<ToDo[]>([]);

    const handleAdd = (taskToAdd: string) => {
        const newToDo: ToDo = {
            text: taskToAdd,
            isCompleted: false
        };
        const listWithAddition = [...list, newToDo];
        setList(listWithAddition);
    };

    const handleDelete = (index: number) => {
        const listWithDeletion = list.filter((toDo, i) => i !== index);
        setList(listWithDeletion);
    };

    const handleCompleted = (index: number) => {
        const listWithCompletion = list.map((toDo, i) => {
            if (i === index) {
                toDo.isCompleted = !toDo.isCompleted;
            }
            return toDo;
        });
        setList(listWithCompletion);
    };

    const countRemainingTodos = () => {
        return list.reduce((count, currentValue) => {
            if (!currentValue.isCompleted) {
                count++;
            }
            return count;
        }, 0)
    }

  return (
    <div className="App">
        <Landing countRemainingTodos={countRemainingTodos} />
        <Input handleAdd={handleAdd} />
        <List 
            list={list}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted} 
        />
    </div>
  );
};

export default App;
