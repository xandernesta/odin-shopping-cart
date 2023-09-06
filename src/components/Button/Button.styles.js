import styled from 'styled-components'

//initially had the styled-components imported into the Button.jsx but moved into its only styles.js sheet for better organization and customization
export const StyledButton = styled.button`
  border-radius: 16px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  margin: .6em;
  font-size: 1em;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${(props) => props.variant === 'outline' ? 'rgba(0,0,0)':'rgb(255, 255, 255)'};
  //instead of a static color for background-color and color now using props to conditionally set it based on a variant used
  background-color: ${(props) => props.variant === 'outline' ? 'rgb(255, 255, 255)': 'rgba(69,23,23)'};
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover{
    border: ${(props)=> props.variant === 'outline' ? '2px solid rgba(5, 57, 216, 1)' :'1px solid #646cff'};
    margin: ${(props)=> props.variant === 'outline' ? 'calc(.6em - 1px)': '.6em'};
    } ;
`
//creating a variant button that extends the styles of the previous button that we can customize specific properties
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, rgb(21, 21, 219) 0%, rgb(23, 25, 69)  100%);
  border: none;
  margin: 1px;
  font-size: 1.5rem;
  &:hover{
    margin:0;
    border: 1px solid white;
    } ;
`
