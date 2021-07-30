import React from 'react'


import {Grid,FormControl,Select, InputLabel } from '@material-ui/core'


export default function SelectCountry({country, handleChange, countries}) {
    return (
        <Grid container style={{marginTop:"2rem"}} >
        
                <Grid item xs={12}>

                <InputLabel id="ddd">Choose   Country</InputLabel>
                <FormControl>
            <Select native value={country} onChange={(e)=>handleChange(e)}>
            <option  value='global'>Global</option>
                {countries.map((country)=>{
                    return   <option key={country.country}  value={country.countryInfo.iso3}>
                         {country.country}
                         
                         </option>
                })}
            </Select>
            </FormControl>
                </Grid>

    </Grid>    )
}
