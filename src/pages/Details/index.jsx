import { Container, Content, Links, Tags } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Details() {
  const [ data, setData ] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  },[])
  
  return (
    <Container>
      <Header/>
      {
        data && 
        <main>
          <Content>
            <div>
                <ButtonText title="Voltar" isActive onClick={handleBack}/>
                <ButtonText title="Excluir nota" isActive onClick={handleRemove}/>
            </div>
           
            <h1>{data.title}</h1>
            <p>{data.description}</p>
  
           {  
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map((link) => (
                      <li key={String(link.id)}> 
                        <a href={link.url}>{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

          {
            data.tags &&
            <Section title="Marcadores">
              <Tags>
                {
                  data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name}/>
                  ))
                }
              </Tags>
            </Section>
          }
          </Content>
        </main>
      }
    </Container>
  )
};
