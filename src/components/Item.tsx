import React from "react";
import styles from "../styles/Item.module.css";
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



interface ToDo {
    text: string;
    isCompleted: boolean;
}

interface ItemProps {
    handleDelete: (index: number) => void;
    handleCompleted: (index: number) => void;
    index: number;
    toDo: ToDo;
}

export default function Item(props: ItemProps) {

    const deleteFromList = () => {
        props.handleDelete(props.index);
    }

    const toggleComplete = () => {
        props.handleCompleted(props.index);
    }

    const itemClasses = props.toDo.isCompleted ? `${styles.completed}` : ``;

    return (
        <ListItem style={{"justifyContent" : "center"}}>
            <Checkbox onChange={toggleComplete} />
            <Typography className={itemClasses}>{props.toDo.text}</Typography>
            <DeleteForeverIcon onClick={deleteFromList} />
        </ListItem>
    );
};