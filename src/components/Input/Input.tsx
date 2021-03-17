import React, {ChangeEvent, useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

interface InputProps {
    handleAdd: (taskToAdd: string) => void;
}

export default function Input(props: InputProps) {
    const [task, setTask] = useState('');

    const { handleAdd } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const addToList = () => {
        if (task.length > 0) {
            handleAdd(task);
            setTask('');
        } else {
            alert(`Blank ToDo's not allowed!`);
        }
    };

    return (
        <>
            <TextField onChange={handleChange} label="ToDo" value={task} />
            <Button variant="contained" onClick={addToList}>Add</Button>
        </>
    );
}
