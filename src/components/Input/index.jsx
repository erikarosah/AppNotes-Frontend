import { Container } from './styles.js';

export function Input({ icon: Icon, ...rest}){
    return(
        <Container>
            <input {...rest}/>
            {Icon && <Icon size={20}/>}
        </Container>
    )
};