import * as Element from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, YoutubeLogo, List } from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Element.Root>
        {/* LOGO */}
        <Element.Logo>
          <h1>Francis Walsh</h1>
        </Element.Logo>
        <Element.HeaderContent>

        <Element.NavMobile>
        {/* HAMBURGER */}
        <Element.Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <List size={32} />
        </Element.Hamburger>

        <Element.NavSearch>
        
          {/* NAVIGATION - Ícones sociais */}
          <Element.Navigation>
            <li><YoutubeLogo /></li>
            <li><FacebookLogo /></li>
            <li><WhatsappLogo /></li>
            <li><InstagramLogo /></li>
            <li><TwitterLogo /></li>
          </Element.Navigation>
        </Element.NavSearch>
        </Element.NavMobile>    

        {/* SEARCH */}

        {/* MENU DESKTOP */}
        <Element.Menu>
          <li>sobre mim</li>
          <li>Receitas</li>
          <li>dicas</li>
          <li>assinatura</li>
        </Element.Menu>

        {/* FUNDO AO ABRIR MOBILE MENU */}
        <Element.Backdrop $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

        {/* MOBILE MENU */}
        <Element.MobileMenu $isOpen={menuOpen}>
          <li>sobre mim</li>
          <li>Receitas</li>
          <li>dicas</li>
          <li>assinatura</li>
        </Element.MobileMenu>
        </Element.HeaderContent>
    </Element.Root>
  )
}
