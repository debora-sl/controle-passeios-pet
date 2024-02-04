import { Container, Logo} from '../Header/styles'

import logoImg from '../../assets/logo.png'

export function Header(){
  return (
    <Container>
      <Logo src={logoImg} alt="Cão com guia" />
      <h1>CPP - Controle de Passeios de Pets</h1>
      <Logo src={logoImg} alt="Cão com guia" />
    </Container>
  )
}
