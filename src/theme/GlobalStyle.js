import * as styled from 'styled-components'

export const GlobalStyle = styled.createGlobalStyle`
    /* google fonts were imported in the index.html */
    :root {
        --dark-font-color: black;
        --dark-gray:rgb(94, 94, 94);
        --header-background-color:rgb(9, 61, 107);
        --light-font-color: rgb(238, 238, 238);
        --sidebar-background-color:rgb(14, 100, 100, .8);
        --light-blue: rgb(12, 192, 223);
        --medium-blue: rgb(53, 51, 205);
        --dark-blue: rgb(7, 59, 105);
        --purple: rgb(94, 14, 144);
        --yellow: rgb(255, 222, 89);
        --aqua: #00B3BB;
        --light-aqua: #00E6AA;
        --dark-aqua: #0E9AA1;
        --menu-h4-color: rgb(7, 33, 56);
        --border-color: #222;
        --background-dark: rgba(0, 0, 0, 0.9);
        --background-light: #DFF1F6;
        
        font-family: 'JetBrains Mono','Montserrat','Poppins', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 300;
        

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

a {
  font-weight: 500;
  color: var(--light-font-color);
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.2;
  font-weight: 700;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
    
`

