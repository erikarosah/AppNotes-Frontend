import { Container, Content, Image } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiPadlock } from 'react-icons/gi';
import { RiShutDownLine } from 'react-icons/ri';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/profile.png'
import { api } from '../../services/api';

export function Profile(){
    const navigate = useNavigate()
    const { user, signOut, updateProfile } = useAuth()
    
    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ password, setPassword ] = useState("")
    const [ oldPassword, setOldPassword ] = useState("")

    const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)
    
    function handleBack(){
        navigate(-1)
    }

    function handleSignOut(){
        signOut()
        navigate("/")
    }

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: password,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <ButtonText title="Voltar" isActive onClick={handleBack}/>    
            <Content>
                <Image>
                    <img src={avatar} alt="foto do usuário"/>
                    <label htmlFor="edit">
                        <FaCamera/>
                        <input 
                            id="edit"
                            type='file'
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Image>

                <form>
                    <Input 
                        placeholder="Nome" 
                        type="text" 
                        icon={FaUser}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                        placeholder="Email" 
                        type="email" 
                        icon={MdEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Nova senha" 
                        type="password" 
                        icon={GiPadlock}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                        placeholder="Senha antiga" 
                        type="password" 
                        icon={GiPadlock}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <Button title="Atualizar" type="button" onClick={handleUpdate}/>
                </form>
                <Button title="Sair" onClick={handleSignOut}>
                    <RiShutDownLine/>
                </Button>
            </Content>
        </Container>
    )
};