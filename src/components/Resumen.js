import React from 'react';
import styled from '@emotion/styled'
import {upperMayus} from '../helper'

const ContResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00B69D;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca, year, plan} = datos 
    if(marca === '' || year === '' || plan === '') return null 

    return (
        <ContResumen>
        <h2>Resumen de Cotizacion</h2>
        <ul>
            <li>Marca: {upperMayus(marca)}</li>
            <li>Plan: {upperMayus(plan)} </li>
            <li>Año del Auto: {year}</li>
        </ul>
        </ContResumen>
    );
}
 
export default Resumen;