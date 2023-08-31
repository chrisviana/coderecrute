
import IMGLogo from '../../assets/logo.png'
import { Container, Content } from './styles'

export function LoginCandidato() {
  return (
    <Container>
      <Content>
        <img src={IMGLogo}/>
        Login com Google
      </Content>
    </Container>
  )
}