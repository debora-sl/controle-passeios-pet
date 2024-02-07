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
      </section>
    </Container>
  )
}
