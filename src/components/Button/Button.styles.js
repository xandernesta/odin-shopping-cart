import styled from 'styled-components'

//initially had the styled-components imported into the Button.jsx but moved into its only styles.js sheet for better organization and customization
export const StyledButton = styled.button`
  border-radius: 40px;
  border: 3px solid transparent;
  padding: 0.6rem;
  margin: 0.2rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${({variant}) =>
    variant === 'round' ? 'rgba(0,0,0)' : 'rgb(230, 223, 223)'};
  //instead of a static color for background-color and color now using props to conditionally set it based on a variant used
  background-color: ${props =>
    props.variant === 'round' ? 'rgb(255, 255, 255)' : 'rgba(69,23,23)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.1s;
  &:hover {
    .cartIcon {
      fill: #3232f1;
    }
  }
`
//creating a variant button that extends the styles of the previous button that we can customize specific properties
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(
    to right,
    rgb(21, 21, 219) 0%,
    rgb(16, 16, 61) 110%
  );
  border: none;
  border-radius: 25px;
  margin: 2px;
  padding: 1px;
  font-size: 1.5rem;
  &:hover {
    margin: 0;
    border: 2px solid white;
  }
`
