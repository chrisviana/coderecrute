
import IMGLogo from '../../assets/logo.png'
import { Container, Content } from './styles'
import { singInWithGooglePopup  } from '../../service/firebase'
import { useNavigate } from 'react-router-dom'
export function LoginCandidato() {

  const navigate = useNavigate()
  const logGoogleUser = async () => {
    const reponse = await singInWithGooglePopup()

    navigate("/cadidato/dashboard")
  }
  return (
    <Container>
      <Content>
        <img src={IMGLogo}/>
        <button onClick={logGoogleUser}>
          Login com Google
        </button>
      </Content>
    </Container>
  )
}