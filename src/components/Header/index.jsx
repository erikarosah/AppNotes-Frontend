import { Link } from 'react-router-dom';
import { Container, Profile } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/profile.png'

export function Header(){
    const {user} = useAuth()
    const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <Link to='/profile'>
                <Profile>
                    <img src={avatarUrl} alt="foto do usuário"/>
                    <div>
                        <span>Bem-vindo (a),</span>
                        <strong>{user.name}</strong>
                    </div>
                </Profile>
            </Link>
            <Link to='/new-note'>
                Criar nota
                <FiPlus/>
            </Link>
        </Container>
    )
};