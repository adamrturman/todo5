import React from "react";
import Typography from '@material-ui/core/Typography';

interface LandingProps {
    countRemainingTodos: () => number;
}

export default function Landing(props: LandingProps) {

    const { countRemainingTodos } = props;

    return (
        <>
            <Typography variant="h1">To Do List</Typography>
            <Typography variant="h4">
                There {countRemainingTodos() === 1 ?  'is':  'are'} {countRemainingTodos()} {countRemainingTodos() === 1 ?  'task':  'tasks'} remaining.
            </Typography>
        </>
    );
}
