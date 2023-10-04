import styled from 'styled-components'

//initially had the styled-components imported into the Button.jsx but moved into its only styles.js sheet for better organization and customization
export const StyledButton = styled("button", {shouldForwardProp: (prop) => prop !== "variant"} )`
  border-radius: 40px;
  border: 3px solid transparent;
  padding: 0.6rem;
  padding-left: 0.45rem;
  margin: 0.2rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${(props) => props.variant === 'round' ? 'rgba(0,0,0)' : 'rgb(230, 223, 223)'};
  //instead of a static color for background-color and color now using props to conditionally set it based on a variant used
  background-color: ${(props) => props.variant === 'round' ? 'rgb(255, 255, 255)' : 'rgba(69,23,23)'};
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
/* export const CartButton = styled(StyledButton, {shouldForwardProp: (prop) => prop !== "variant"})`
  padding: 1rem;
  background-color: ${props =>
    props.variant === 'close' ? 'rgb(138, 2, 2)' : 'rgb(26, 97, 26)'};
` */
export const SquareButton = styled.button`
  display: flex;
  height: 1.5rem;
  width: 1.5rem;
  padding: .25rem;
  border-radius: .125rem;
  justify-content: center;
  align-items: center;
  background-color: rgb(203, 213, 225);
  color: rgb(31, 41, 55);
  cursor: pointer;

  &:hover {
    background-color: rgb(136, 140, 145);
  }


`