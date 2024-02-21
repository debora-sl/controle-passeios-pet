import {Container} from '../CadastroPasseios/styles'

import { Header } from '../../../components/Header'
import { Verticalbar } from '../../../components/Verticalbar'
import { Table } from '../../../components/ListTours/styles'

export default function CadastroPasseios() {
  const tour = {
    data: '21/02/2024',
    tourStatus: false
  }
  console.log(tour);


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
        <h2>Passeios Cadastrados</h2>

        <Table>
        <thead>
          <tr>
            <th scope='col'>Data</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'></th>
            <td></td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </>
  )
}
