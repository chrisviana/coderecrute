
import IMGLogo from '../../assets/logo.png'
import { Container, Content } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
export function LoginCandidato() {

  const { signIn  } = useContext(AuthContext)

  const navigate = useNavigate()
  const logGoogleUser = async () => {
    await signIn()
    navigate("/candidato/dashboard")
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