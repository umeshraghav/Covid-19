 import React from 'react'
//  import {Grid} from '@material-ui/core'
// import Header from './Header';
// import Content from './Content';
 import { Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core' 
const buttonStyles = makeStyles({
     
    type: 'dark'
})

 export default function App() {
     
       const classes = buttonStyles()



     return (

        <Paper>
        <Button classes={{root : classes.root}}
        
        >Hello</Button>

</Paper>
        
       
     )
 }
 