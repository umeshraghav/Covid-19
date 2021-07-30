import React from 'react'
import {Card,CardContent,Grid,Typography} from '@material-ui/core'

export default function Cards({active, cases, deaths}) {
    return (
      
        <Grid container spacing={5}   alignItems="center">
        <Grid item xs={12} sm={4}>
        <Card raised>
            <CardContent>
                <Typography variant="h4">
                   Active Cases <br/>
                   {active}
             </Typography>
            </CardContent>
    </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
        <Card raised>
            <CardContent>
                <Typography variant="h4">
                   Total Cases <br/> { cases}
             </Typography>
            </CardContent>
    </Card>
        </Grid>



        <Grid item xs={12} sm={4}>
        <Card raised>
            <CardContent>
                <Typography variant="h4">
                   Active Death <br/> {deaths}
             </Typography>
            </CardContent>
    </Card>
        </Grid>

   </Grid>
    )
}
