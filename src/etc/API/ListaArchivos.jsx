import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ApiComponent = () => {
    const [data, setData] = useState([]);
    const [carrito]=useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (


        <Grid container>
            <Grid item xs={4} >
                {data.map(item => (
                    <Grid  padding={2}  key={item.id}>
                        <Paper >
                            <p>{item.userId}</p>
                            <p>{item.title}</p>
                            <Button onClick={() => AgregarProducto(item.userId)}  variant="contained">Agregar</Button>
                            <Button onClick={() => handleSearchAndRemove(item.userId)} variant="contained">Eliminar</Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={7}>
                <Paper>
                   
                    
               
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ApiComponent;