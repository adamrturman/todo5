import React from "react";
import styles from "./Item.module.css";
import ToDo from "../../interfaces/ToDo";
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface ItemProps {
    handleDelete: (index: number) => void;
    handleCompleted: (index: number) => void;
    index: number;
    toDo: ToDo;
}

export default function Item(props: ItemProps) {

    const { handleDelete, handleCompleted, index, toDo } = props;
    const { listElement, listItem } = styles;

    const deleteFromList = () => handleDelete(index);

    const toggleComplete = () => handleCompleted(index);

    const itemClasses = toDo.isCompleted ? `completed` : ``;

    return (
        <ListItem className={`${listElement} ${listItem}`}>
            <Checkbox onChange={toggleComplete} />
            <Typography className={itemClasses}>{toDo.text}</Typography>
            <DeleteForeverIcon onClick={deleteFromList} />
        </ListItem>
    )
}