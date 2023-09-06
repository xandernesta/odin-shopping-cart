import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import {FooterWrapper, GithubLink} from './Footer.styles.js'

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
