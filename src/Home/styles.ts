import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray']};

  display: flex;
  justify-content: center;
  align-items: center;

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

  @media (min-width: 760px) {
    padding: 6rem 4rem;
  }
`;


export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--red);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.8rem;
    color: var(--gray);
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;

    li {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: var(--white);
      margin: 1rem 0;

      svg {
        margin-right: 1rem;
        color: var(--orange);
      }
    }
  }
`;
export const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

  &:hover {
    background: ${({ theme }) => theme['orange']};
  }
`;
