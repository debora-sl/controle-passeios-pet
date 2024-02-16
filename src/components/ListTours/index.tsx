import { NavLink } from 'react-router-dom'
import {Container, Table} from './styles'


export function ListTours () {
  return <Container>
     <h1>Passeios Realizados</h1>
      <Table>
        <thead>
          <tr>
            <th scope='col'>Data</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>05/01/2024</th>
            <td>x</td>
          </tr>
          <tr>
            <th scope='row'>08/01/2024</th>
            <td>x</td>
          </tr>
          <tr>
            <th scope='row'>09/01/2024</th>
            <td>x</td>
          </tr>
        </tbody>
      </Table>
      <NavLink to='/passeios'>Clique para cadastrar um passeio</NavLink>
  </Container>
}
