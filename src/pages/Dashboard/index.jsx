import { FaSearch } from "react-icons/fa"
import { Container, Content, ContentLoader } from "./styles"
import { useState } from "react"
import { getUserDetails } from "../../api/github"
import { LineWaveVSD } from "../../components/loaders/LineWaveVSD"
import { useNavigate } from "react-router-dom"

export const Dashboard = ()=>{

    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function handleSetUser(event) {
        setUsername(event.target.value)
    }

    async function handleGetDetails() {
        try {
            setLoading(true)
            const result = await getUserDetails(username)
            
            navigate('/repositories', {state: {profile: result}})

        } catch(error) {
            console.error(error.message)
        } finally{
            setLoading(false)
        }
    }

    return(
        <Container>
            <Content>
                <label htmlFor="nickname">
                    Digite o usuário GIT
                    <input type="text" id="nickname" placeholder="Digite aqui seu usuário"
                     onChange={handleSetUser}/>
                </label>
                <button type="button" onClick={()=> handleGetDetails()}>Buscar <FaSearch /></button>
            </Content>

            {loading && (
                <ContentLoader>
                <LineWaveVSD />
                </ContentLoader>
            )}
            
        </Container>
    )
}