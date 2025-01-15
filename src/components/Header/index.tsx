import * as Element from './styles'

import marketing from '../../assets/marketing.xyz-logo.png'

export function Header() {

  return (
    <Element.Root>
      <Element.Content>
        <Element.Logo>
          <img src={marketing} />
          
        </Element.Logo>
        <Element.Title>
          Driving Real <strong>Growth</strong>, <br />One Lead at a <strong>Time</strong>
        </Element.Title>
      </Element.Content>
    </Element.Root>
  )
}
