import React from 'react'
import {Grid, AppBar ,  Toolbar, Typography } from '@material-ui/core'
 
export default function Header() {
    return (
        <Grid container style={{marginBottom:'5rem'}}>
            <Grid item  position="static">

           
        <AppBar >
                   <Toolbar>
                        <Typography variant="h3">
                                Covid 19
                        </Typography>
                       </Toolbar> 


          
        </AppBar>
         </Grid>
 
        </Grid>
    )
}
