import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    buttonStyle: {
        background: props=> (props.loggedIn? 'yellow' : 'red')
    }
 
})



export default function MyButton(props) {

    const classes = useStyles(props);


    return (
        <Button className={classes.buttonStyle} variant="contained">
            Hello
        </Button>
    )
}
