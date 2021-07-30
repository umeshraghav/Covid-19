import React from 'react'
import {Doughnut }  from 'react-chartjs-2' 
import { Grid, Typography } from '@material-ui/core'




export default function Chart({LineChart, country, flag}) {
    return (
        <Grid item xs={12} alignItems="center" >

<Typography variant="h2" align="center">
     {country}
      
      <img src={flag} style={{height:"50px", width:"120px"}}/>
 </Typography>
        <Doughnut style={{maxHeight:"50vh"}} width={100}
height={50}  data={{
            labels: ['Death', 'Cases', 'Recovered' ],
            datasets: [{
             label: ['red', 'green', 'yellow'],
             data : LineChart(),
             backgroundColor: [
                 'rgb(255, 99, 132)',
                 'rgb(54, 162, 235)',
                 'rgb(255, 205, 86)'
               ],
             borderColor: 'rgb(255, 99, 132)',
            
        }],
        hoverOffset: 4 
     }
        }
 
 />

            </Grid>
    )
}
