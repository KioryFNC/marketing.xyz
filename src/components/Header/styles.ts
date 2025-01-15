import styled from "styled-components";

// ROOT - Estrutura principal do Header
export const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center; // Centraliza verticalmente
  justify-content: center; // Centraliza horizontalmente
  background: ${(props) => props.theme['blue']};
  border-radius: 0 0 10px 10px;
`;

// CONTENT - Contêiner do conteúdo
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza os itens horizontalmente
  text-align: center; // Ajusta o alinhamento do texto para o centro
  gap: 1rem; // Espaçamento entre os elementos
  width: 100%;
  max-width: 60rem;
  padding: 0 1rem; // Margem interna para telas pequenas

  @media (min-width: 760px) {
    padding: 0; // Remove o padding em telas maiores
    text-align: left; // Alinha o texto à esquerda
  }
`;

// LOGO - Área do Logo
export const Logo = styled.div`
  img {
    height: 8rem; // Ajuste conforme necessário
    width: auto;

    @media (max-width: 480px) {
      height: 6rem; // Reduz o tamanho do logo em telas pequenas
    }
  }
`;

// TITLE - Texto do Header
export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme['gray']};

  strong {
    color: ${(props) => props.theme['orange']};
    position: relative;

    // Conteúdo extra e brilho suave
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
      opacity: 0.3; // Brilho suave
      filter: blur(2rem);
    }
  }

  @media (min-width: 760px) {
    font-size: 2.5rem; // Aumenta o tamanho da fonte em telas maiores
  }
`;
