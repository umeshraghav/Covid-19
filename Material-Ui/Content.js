import React from 'react'
import ContentCard from './ContentCard'

import { Container,Grid } from '@material-ui/core'

import coffeeMachine from './data'



export default function Content() {

        const getCoffeeCard = coffeeMachineObj =>{
            return (
                    <Grid item xs={12} sm={4} >
                                        <ContentCard {...coffeeMachineObj} />
                        </Grid>
            )
        }

    return (
      

 
       <Container>        <Grid container item sm={12} >    
            {coffeeMachine.map((coffee)=>(
                    
                    getCoffeeCard(coffee)

))}
        
        </Grid>
        </Container>

     

 
    )
}
