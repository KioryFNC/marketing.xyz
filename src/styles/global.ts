import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
      width: 8px; 
      height: 8px; 
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['gray-700']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['wine-500']}; /* Cor da barra */
      border-radius: 10px; /* Cantos arredondados */
    }

    ::-webkit-scrollbar-thumb:hover {
      background:rgba(133, 35, 82, 0.88); 
    }

  }

  body { 
    width: 100vw;
    height: 100vh;
    line-height: 1.6;
    overflow-x: hidden;
    background-color: ${(props) => props.theme['green-100']};
  }

  body, input, textarea, button{
    font-family: 'PT Serif', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  li{
    list-style: none;
  }
`