import { Container, Filter } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note'
import { Input } from '../../components/Input';
import {ButtonText} from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { IoMdSearch } from 'react-icons/io';

export function Home(){
    const [ tags, setTags ] = useState([])
    const [ tagsSelected, setTagsSelected ] = useState([])
    const [ notes, setNotes ] = useState([])
    const [ search, setSearch ] = useState("")
    const navigate = useNavigate()

    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)

        }else{
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    function handleDetails(id){
       navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchSearch(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }   

        fetchSearch()
    }, [search, tagsSelected])

    return(
        <Container>
           <Header/>
            <Input 
                placeholder="Pesquisar pelo título" 
                icon={IoMdSearch}
                onChange={e => setSearch(e.target.value)}
            />

            <Filter>
                <ButtonText title="Filtros:" isActive/>
                <li>
                    <ButtonText 
                        title="Todos"
                        onClick={() => handleTagSelected("all")}
                        isActive={tagsSelected.length === 0 }
                    />
                </li>

                {   
                    tags && tags.map((tag, index) => (
                        <li key={index}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name) }
                            />
                        </li>
                    ))
                }

            </Filter>

            <Section title={notes.length === 0? "Adicione novas notas" : "Minhas notas"}>
                { notes && notes.map((note) => (
                    <Note 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                    />
                ))}
            </Section>
        </Container>
    )
};