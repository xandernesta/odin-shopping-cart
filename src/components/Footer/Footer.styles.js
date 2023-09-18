import styled from 'styled-components'

export const FooterWrapper = styled.footer`
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

export const GithubLink = styled.a`
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

/*${({ theme }) => theme.padding.sm}; */
/*${({ theme }) => theme.colors.dark.primary}; */