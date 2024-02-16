import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ListTours } from '../../components/ListTours'
import { Verticalbar } from '../../components/Verticalbar'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Header />
      <Verticalbar />

      <section>
        <ListTours />
        <Outlet />
      </section>
    </Container>
  )
}
