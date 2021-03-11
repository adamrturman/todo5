import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";


interface InputProps {
    handleAdd: (taskToAdd: string) => void;
}

export default function Input(props: InputProps) {
    const [task, setTask] = useState('');

    const handleChange = (event: any) => {
        setTask(event.target.value);
    }

    const addToList = () => {
        if (task.length > 0) {
            props.handleAdd(task);
            setTask('');
        } else {
            alert('Blank ToDo\'s not allowed!')
        }
    }

    return (
        <>
            <TextField onChange={handleChange} id="standard-basic" label="ToDo" value={task} />
            <Button variant="contained" onClick={addToList}>Add</Button>
        </>
    )
};