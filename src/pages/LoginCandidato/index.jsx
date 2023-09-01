
import { useNavigate } from 'react-router-dom'
import IMGLogo from '../../assets/logo.png'
import { Container, Content } from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

export function LoginCandidato() {

  const navigate = useNavigate()
  const { signIn } = useContext(AuthContext)

  const loginGoogleUser = async () => {
    await signIn()
    navigate("/cadidato/dashboard")

  }
  return (
    <Container>
      <Content>
        <img src={IMGLogo}/>
        <button onClick={loginGoogleUser}>
          Login com Google
        </button>
       
      </Content>
    </Container>
  )
}