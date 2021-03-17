import React from "react";
import ToDo from "../../interfaces/ToDo";
import Item from "../Item/Item";
import List from '@material-ui/core/List';

interface ListProps {
    list: ToDo[];
    handleDelete: (index: number) => void;
    handleCompleted: (index: number) => void;
}

export default function ToDoList(props: ListProps) {

    const { list, handleDelete, handleCompleted } = props;

    const displayedList = list.map((toDo: ToDo, index: number) => (
        <Item
            key={index}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
            index={index}
            toDo={toDo}
        />
    ));

    return (
        <List>
            {displayedList}
        </List>
    );
}
