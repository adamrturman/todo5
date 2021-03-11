import React from "react";
import Item from "./Item";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


interface ToDo {
    text: string;
    isCompleted: boolean;
}

interface ListProps {
    list: ToDo[];
    handleDelete: (index: number) => void;
    handleCompleted: (index: number) => void;
}

export default function ToDoList(props: ListProps) {

    const displayedList = props.list.map((toDo: ToDo, index: number) => (
        <Item
            key={index}
            handleDelete={props.handleDelete}
            handleCompleted={props.handleCompleted}
            index={index}
            toDo={toDo}
        />
    ));

    return (
        <List>
            {displayedList}
        </List>
    );
};


