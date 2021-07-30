import React from 'react'
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';

const useStyles =makeStyles(()=>({
    TypographyStyle :{
        flex:1
    }



}))



export default function Header() {

        const classes = useStyles()


    return (
                <AppBar  position="static">
                                    <Toolbar >
                                        <Typography variant="h3" className={classes.TypographyStyle}>
                                                       Umesh 
                                        </Typography>
                                        <MenuIcon/>
                                    </Toolbar>
                            </AppBar>
         
    )
}
