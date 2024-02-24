import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ListTours } from '../../components/ListTours'
import { Verticalbar } from '../../components/Verticalbar'
import { Container } from './styles'
import { Head } from '../../components/Head'

export default function Main() {
  return (
    <Container>
      <Head title='Home'/>
      <Header />
      <Verticalbar />

      <section>
        <ListTours />
        <Outlet />
      </section>
    </Container>
  )
}
