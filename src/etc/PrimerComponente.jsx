import React from 'react'
import { Calculator } from "./CompTeclado";
import ApiComponent from './API/ListaArchivos';
// import SelectAllTransferList from "./List_prod";
import Grid from '@mui/material/Unstable_Grid2';

export const PrimerComponente = () => {


  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Calculator />
      </Grid>
      <Grid xs={12} >
        <ApiComponent />
      </Grid>
     {/* <Grid xs={12} >
        <SelectAllTransferList />
      </Grid>  */}
    </Grid>

  )
}
