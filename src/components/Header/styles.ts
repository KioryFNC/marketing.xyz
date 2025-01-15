import styled from "styled-components";
import BusinessImg from '../../assets/BusinessImg.png'

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 60rem;
  display: flex;
  align-items: center; 
  justify-content: center; 
  background: url(${BusinessImg}) no-repeat center;
  background-size: cover;
  background-position: center 80%;
  border-radius: 0 0 10px 10px;
  text-shadow: 0 2px 4px rgb(0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1; 
  }

  > * {
    position: relative; 
    z-index: 2;
  }

  @media (max-width: 1000px) {
    height: 40rem; /* Ajusta a altura para telas menores */
    background-position: center 60%; /* A imagem sobe ainda mais em telas menores */
  }

  @media (max-width: 650px) {
    height: 30rem; /* Altura ainda menor para telas muito pequenas */
    background-position: center 20%; /* Ajusta ainda mais para cima se necessário */
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Garante que a logo e o título fiquem nas extremidades */
  gap: 5rem;
  padding: 0 1rem;
  margin-bottom: 30rem;
  flex-wrap: wrap; /* Permite que os itens se movam para baixo quando a tela for pequena */

  @media (max-width: 1650px) {
    gap: 1rem;
    padding: 0;
    text-align: left;
  }

  @media (max-width: 1250px) {
    margin-top: 2rem;
    flex-direction: column;
  }
  @media (max-width: 1000px) {
    margin-top: 20rem;
  }
 

`;

export const Logo = styled.div`
  img {
    height: 20rem;

    @media (max-width: 1600px) {
      height: 16rem;
    }
    @media (max-width: 1000px) {
      height: 14rem;
    }

    @media (max-width: 650px) {
      height: 12rem;
    }
    @media (max-width: 500px) {
      height: 10rem;
    }
    @media (max-width: 400px) {
      height: 8rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 6rem;
  color: ${(props) => props.theme['white']};
  display: inline-block; /* Garante que o título seja tratado como um bloco de texto */
  white-space: nowrap; /* Impede que a frase que você não quer quebre, exceto no <br> */

  strong {
    color: ${(props) => props.theme['orange']};
    position: relative;

    &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150%;
      height: 150%;
      border-radius: 50%;
      background: ${(props) => props.theme['orange']};
      opacity: 0.3;
      filter: blur(2rem);
    }
  }
  

  @media (max-width: 1600px) {
    font-size: 4rem;
    white-space: normal; /* Permite quebra de linha no título quando necessário */
  }
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
  @media (max-width: 650px) {
      height: 2rem;
    }
    @media (max-width: 500px) {
      height: 1rem;
    }
    
 
`;


