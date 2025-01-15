import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: ${(props) => props.theme['gray']};
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme['soft-beige']};
  margin: 2rem 0;
  border-radius: 8px;

  h2 {
    font-size: 2.5rem; /* Aumentado para maior destaque */
    color: ${(props) => props.theme['red']};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.8rem; /* Texto maior */
    line-height: 1.8;
    margin: 1rem 0;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      font-size: 1.6rem; /* Maior para listas */
      margin-bottom: 0.8rem;

      strong {
        color: ${(props) => props.theme['orange']};
      }
    }

  }

  button {
    background: ${(props) => props.theme['red']};
    color: ${(props) => props.theme['white']};
    padding: 1rem 2rem; /* Botão maior */
    font-size: 1.6rem; /* Texto do botão maior */
    margin-top: 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['orange']};
    }
  }

  blockquote {
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: ${(props) => props.theme['gray']};
    color: ${(props) => props.theme['white']};
    border-radius: 4px;
    font-size: 1.4rem; /* Texto maior */
    line-height: 1.8;

    cite {
      display: block;
      margin-top: 0.5rem;
      color: ${(props) => props.theme['slate-blue']};
      font-size: 1.2rem;
    }
  }
`;
