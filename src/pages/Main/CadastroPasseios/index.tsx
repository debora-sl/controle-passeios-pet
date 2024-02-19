import {Container} from '../styles'

import { Header } from '../../../components/Header'
import { Verticalbar } from '../../../components/Verticalbar'

export default function CadastroPasseios() {
  return (
    <>
      <Header />
      <Verticalbar />
      <Container>
        <h1>Cadastro de Passeios</h1>
        <form action="">
          <label htmlFor="">
            Escolha a Data
            <input type="date" name="date" id="" />
          </label>

          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Passeio concluído
          </label>

          <button type="submit" className='buttonCadastrar'>Cadastrar</button>
        </form>
      </Container>
    </>
  )
}
