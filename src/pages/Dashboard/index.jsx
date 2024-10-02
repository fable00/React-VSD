import { FaSearch } from "react-icons/fa"
import { Container, Content } from "./styles"
import { useState } from "react"
import { getUserDetails } from "../../api/github"

export const Dashboard = ()=>{

    const {username, setUsername} = useState('')

    function handleSetUser(event) {
        setUsername(event.target.value)
    }

    function handleGetDetails() {
        
    }

    return(
        <Container>
            <Content>
                <label htmlFor="nickname">
                    Digite o usuário GIT
                    <input type="text" id="nickname" placeholder="Digite aqui seu usuário"
                     onChange={handleSetUser}/>
                </label>
                <button>Buscar <FaSearch /></button>
            </Content>
        </Container>
    )
}