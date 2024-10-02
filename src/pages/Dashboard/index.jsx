import { FaSearch } from "react-icons/fa"
import { Container, Content } from "./styles"
export const Dashboard = ()=>{
    return(
        <Container>
            <Content>
                <label htmlFor="">
                    Digite o usuário GIT
                    <input type="text" id="nickname" placeholder="Digite aqui seu usuário"/>
                </label>
                <button>Buscar <FaSearch /></button>
            </Content>
        </Container>
    )
}