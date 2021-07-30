import React, { useEffect, useState } from 'react'
import { Grid,Container,Paper} from '@material-ui/core'

import Cards from './Components/Cards'
import Header from './Components/Header'
import Chart from './Components/Chart';
import SelectCountry from './Components/SelectCountry';
import Loading from './Components/Loading'

export default function App() {
    const [data, setData] = useState("");
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("global");
    const [loading, setLoading] = useState(true)



    const fetchCountry= async()=>{
       
        let response = await fetch('https://disease.sh/v3/covid-19/countries');
        let data = await response.json();
         
        setCountries(data);
    }



   const fetchData = async()=>{
       
        if(country=== 'global')
        {
            setLoading(true);
            let response = await fetch(`https://disease.sh/v3/covid-19/all`);
            let data = await response.json();
            setData(data);
            setLoading(false);
        }
        else{
            setLoading(true);
            let response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
            let data = await response.json();
            setData(data);
            console.log(data);
            setLoading(false);
        }

                ;
                        
 
   } 


useEffect(()=>{
    fetchCountry();
},[])



useEffect(()=>{
  
    fetchData();
},[country])

const LineChart = ()=>{
            return [data.deaths, data.cases, data.active]
}



const handleChange=(event)=>{
    event.preventDefault();
        setCountry(event.target.value);
}

    return (
        <Paper style={{height:"100vh"}}>
           {loading? <Loading/> : 
           
           
           <Container>
                <Grid>
                <Header/>
           <Cards {...data}/>


           <SelectCountry country={country} handleChange={handleChange} countries={countries}/>
           <Chart LineChart={LineChart}  country={country} flag={data.countryInfo.flag}/>
                </Grid>
           
                 

                          


          </Container>
           }
        </Paper>
    )
}
