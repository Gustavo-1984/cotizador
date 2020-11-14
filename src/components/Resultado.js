import React from 'react';
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'




const Mensaje = styled.p`
    background-color: #00D7BA;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center
`;
const CotizacionRes = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: #00B69D;
    margin-top: 1rem;
    position: relative;

`;

const Texto = styled.p`
    color: #DAFFFA;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    return ( 
      (cotizacion === 0) 
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        : ( <CotizacionRes> 
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                    <Texto>El total es: $ {cotizacion}</Texto>
                    </CSSTransition>
                </TransitionGroup>
            </CotizacionRes>)
            )
}
 
export default Resultado;