import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import styled from 'styled-components'


export function Footer(){
    return(
        <FooterWrapper>
            Xander© 2023
            <GithubLink 
             href="https://github.com/xandernesta/odin-weather-vite-app"
             target="_blank"
             rel="noopener" >
            <FaGithub size="1.25em" /> 
            </GithubLink>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: .3rem 0;  
  font-size: 1.2rem;
  background: var(--footer-background-color);
`

const GithubLink = styled.a`
  display: flex;
  text-decoration: none;
  margin-left: 1rem;
  color: white; 
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: rotate(360deg) scale(1.05);
    color: var(--light-aqua) ;
  }
`