import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper } from '@material-ui/core';
export default function Loading() {
    return (
        <Paper style={{height: '100vh', alignItems:'center'}}>
        <CircularProgress disableShrink />
        </Paper>
    )
}


 
