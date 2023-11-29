import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { api } from '../../services/api';

export function NewNote(){
    const [ links, setLinks ] = useState([])
    const [ newLink, setNewLink ] = useState("")
    const [ tags, setTags ] = useState([])
    const [ newTag, setNewTag ] = useState("")

    function handleBack(){
        navigate(-1)
    }

    function handleAddItems({arr, item}){
        arr(prevState => [...prevState, item])

        if(arr === setLinks){
            setNewLink("")
        }else {
            setNewTag("")
        }
    }

    function handleRemoveItems({arr, item}){
        arr(prevState => prevState.filter(list => list !== item))
    }

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const navigate = useNavigate()

    async function handleNewNote(){
        if(!title){
            return alert("Digite o título da nota")
        }

        if(newTag || newLink){
            return alert("Adicione as informações para prosseguir")
        }

        alert("Sua nota está sendo salva e já estará disponível na página inicial")

        navigate(-1)
        await api.post("/notes", {
            title: title,
            description: description,
            tags: tags,
            links: links
        })
    }

    return(
        <>
        <Header/>
        <Container>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText title="Voltar" onClick={handleBack} isActive/>
                    </header>

                    <Input 
                        placeholder="Título" 
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea 
                        placeholder="Observações"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem key={index}
                                 value={link}
                                 onClick={() => handleRemoveItems({arr: setLinks, item: link})}
                                />
                            ))
                        }
                       
                        <NoteItem
                        isNew 
                        placeholder="Novo link" 
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={() => handleAddItems({arr: setLinks, item: newLink})}
                        />                          
                    </Section>

                    <Section title="Marcadores">
                        {
                            tags.map((tag, index) => (
                                <NoteItem key={index}
                                 value={tag}
                                 onClick={() => handleRemoveItems({arr: setTags, item: tag})}
                                />
                            ))
                        }

                        <div className='tags'>
                            <NoteItem 
                                placeholder="Nova tag" 
                                isNew
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={() => handleAddItems({arr: setTags, item: newTag})}
                            />
                        </div>
                    </Section>
                    <Button title="Salvar" onClick={handleNewNote}/>
                </Form>
            </main>
            <Footer/>
        </Container>
        </>
    )
};