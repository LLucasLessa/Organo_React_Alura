import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      Nome,
      Cargo,
      Imagem,
      Time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [Nome, setNome] = useState('')
  const [Cargo, setCargo] = useState('')
  const [Imagem, setImagem] = useState('')
  const [Time, setTime] = useState('')

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={Nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={Cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={Imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          itens={props.times}
          label="Times"
          valor={Time}
          aoAlterado={valor => setTime(valor)} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario