import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  padding: 2rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme['beige']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 900px) {
    padding: 3rem;
    flex-direction: row;
  }
`;

export const Content = styled.div<{ reverse?: boolean}>`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 5rem;
  gap: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
  box-shadow: 0 6px 30px rgba(199, 7, 7, 0.96);

  &.beige {
    background-color: ${(props) => props.theme['beige']};
  }
  &.orange {
    background-color: ${(props) => props.theme['orange']};
  }

  &.gray {
    background-color: ${(props) => props.theme['gray']};
  }
  &.red {
    background-color: ${(props) => props.theme['red']};
  }
  &.blue {
    background-color: ${(props) => props.theme['blue']};
  }

  @media (min-width: 900px) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    text-align: left;
  }

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme['red']};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme['gray']};
    margin-bottom: 2rem;
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    display: flex;
    align-items: flex-start;
    font-size: 1.6rem;
    color: ${({ theme }) => theme['white']};
    margin: 1rem 0;
    gap: 0.5rem;

    flex-wrap: wrap; /* Permite quebra de linha quando necessário */
    max-width: 100%; /* Garante que o texto não ultrapasse a largura disponível */
    word-break: break-word; /* Quebra palavras longas */

    svg {
      flex-shrink: 0;
      margin-right: 0.5rem;
      color: ${({ theme }) => theme['orange']};
    }

    strong {
      white-space: normal; /* Permite que o texto quebre para uma nova linha */
    }
  }
}
`;
export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 900px) {
    max-width: 400px;
  }
`;

export const Text = styled.div`
  flex: 1;
  font-size: 1.6rem;
  color: ${({ theme }) => theme['gray']};

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p, ul, blockquote, cite {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      align-items: flex-start;

      >strong {
        white-space: nowrap;
      }
    }
  }

  blockquote, cite {
    color: ${({ theme }) => theme['white']};

    >strong {
      color: ${({ theme }) => theme['gray']};
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme['red']};
  color: ${({ theme }) => theme['white']};
  font-size: 1.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background:rgb(184, 17, 29);
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 8px 8px 0 0;
  background-color: ${(props) => props.theme['gray']};

  @media (min-width: 900px) {
    padding: 3rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: space-between;
  gap: 2rem; 
  padding: 2rem;

  h2 {
    color: ${({ theme }) => theme['white']};
    font-size: 1.8rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme['white']};
    text-align: center;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  text-align: center;

  @media (max-width: 900px) {
    align-items: center;
  }
`;
