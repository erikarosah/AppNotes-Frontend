import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <Container>
            <div>
                <ButtonText title="Copyright &copy; 2023 Developed by Erika Rosa" isActive/>
            </div>

            <div>
                <Link to='https://github.com/erikarosah'>
                    <img alt='github' src='https://i.pinimg.com/736x/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.jpg'/>
                </Link>
                
                <Link to='https://www.linkedin.com/in/erika-rosa-19a4361b1/'>
                    <img alt='linkedin' src='https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png'/>
                </Link>
            </div>
         </Container>
    )
};