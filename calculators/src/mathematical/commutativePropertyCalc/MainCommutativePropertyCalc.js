import React from 'react';
import { Container, Typography } from '@mui/material';
import InfoCommutativePropertyCalc from './InfoCommutativePropertyCalc';

function MainCommutativePropertyCalc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Commutative Property Calculator <InfoCommutativePropertyCalc/></Typography>
            <hr/>
            <br/>
            {/* Write your code here */}



            {/* End your code here */}
        </Container>
    )
}

export default MainCommutativePropertyCalc;