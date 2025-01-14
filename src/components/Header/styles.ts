import styled from "styled-components";

// ROOT - Estrutura principal do Header
export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(180deg, ${(props) => props.theme['gray-700']} 0%, ${(props) => props.theme['gray-700']} 30%,${(props) => props.theme['green-100']} 100%);
  font-family: 'Roboto', sans-serif;

  @media (min-width: 760px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1rem;

  @media (min-width: 760px) {
    gap: 3rem;
    max-width: 1600px;
  }
`

// LOGO
export const Logo = styled.div`
  font-size: 1.6rem;
  margin: 1rem;
  color: ${(props) => props.theme['white-ice']};
  z-index: 2;
  white-space: nowrap;
  @media (min-width: 760px) {
    font-size: 2rem;
    margin-right: 2rem;
  }
`

export const NavSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

// NAVIGATION - Ícones sociais
export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;
  color: ${(props) => props.theme['green-300']};
  li {
    font-size: 2.8rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    

    &:hover {
      transform: scale(0.9);
    }
  }

    @media (min-width: 760px) {
      gap: 3rem;
      li{
        font-size: 3.5rem;
    }
  }
`

export const NavMobile = styled.div`
   display: flex;
  align-items: center;
  justify-content: space-between; /* Garante que os itens fiquem um em cada canto */
  padding: 0 .5rem; /* Espaço lateral de 1rem */
  gap: 8rem;
  
  @media (max-width: 760px) {
    flex-direction: row; /* Itens ficam lado a lado */
    width: 100%;
  }
`

// MENU DESKTOP
export const Menu = styled.ul`
  width: 100%;
  display: none;
  justify-content: space-between;
  gap: 1.5rem;
  color: ${(props) => props.theme['white-ice']};
  white-space: nowrap;

  li {
    cursor: pointer;
    font-size: 1.8rem;
    position: relative;
    transition: transform 0.3s ease-in-out;
    border-bottom: 4px solid transparent;

    &:hover {
      transform: scale(1.1);
      border-bottom: 4px solid ${(props) => props.theme['blue-200']};
    }
  }
  
  @media (min-width: 760px) {
    display: flex;
  }
`

// HAMBURGER MENU
export const Hamburger = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 3;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: auto;
  color: ${(props) => props.theme['green-300']};
  

  @media (min-width: 760px) {
    display: none;
  }
`

// MOBILE MENU
interface MobileMenuProps {
  $isOpen: boolean;
}

export const MobileMenu = styled.ul<MobileMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme['gray-800']};
  padding: 4rem 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 10;

  li {
    color: #FFF;
    font-size: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme['green-300']};

    &:last-child {
      border: none;
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;

    li {
      font-size: 1.3rem;
    }
  }
`

// FUNDO CINZA AO ABRIR MOBILE MENU
interface BackdropProps {
  $isOpen: boolean;
}

export const Backdrop = styled.div<BackdropProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`
