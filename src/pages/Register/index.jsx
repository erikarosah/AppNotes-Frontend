import { Container, Brand } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {api} from "../../services/api";

export function Register(){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate()
    
    function handleRegister(){
        if(!name || !email || !password){
            return alert("error")
        }

        api.post("/users", {name, email,password})
        .then(() => {
            alert("Usuário cadastrado com sucesso")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
            <Brand>
                <span>N</span>
                <h1>Notes</h1>
            </Brand>
            <span>Aplicação para salvar e gerenciar seus links úteis</span>
            <h1>Crie sua conta</h1>
            <form>
                <Input 
                    placeholder="Nome" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    placeholder="Email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    title="Cadastrar" 
                    type="button"
                    onClick={handleRegister}
                />
            </form>
            <Link to='/'>
                <ButtonText title="Voltar para login" isActive/> 
            </Link>
            <Footer/>
        </Container>
    )
};