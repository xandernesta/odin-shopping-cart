import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderStyle = styled.header`
    font-family: 'Montserrat';
    font-size: 5rem;
    text-align: left;
    width: 100vw;
    padding: .5rem;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, var(--light-blue) 0%, var(--yellow) 100%);
    border-color: 1px solid var(--dark-font-color);
    ${Link}{
        font-family: 'Montserrat';
    }
    ${Link}:hover{
        color: var(--light-font-color);
    }

`