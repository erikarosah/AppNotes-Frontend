import { Container, Brand} from './styles';
import { Button} from '../../components/Button';
import { ButtonText} from '../../components/ButtonText';
import { Input} from '../../components/Input';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function Login(){
    const { signIn} = useAuth()
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return(
        <Container>
             <Brand>
                <span>N</span>
                <h1>Notes</h1>
            </Brand>
            <span>Aplicação para salvar e gerenciar seus links úteis</span>
            <h1>Faça seu login</h1>
            <form>
                <Input 
                    placeholder="Email" 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    title="Entrar" 
                    type="button"
                    onClick={() => signIn({email,password})}
                />
            </form>
            <Link to='/register'>
                <ButtonText title="Criar conta" isActive/>
            </Link>
            <Footer/>
        </Container>
    )
};