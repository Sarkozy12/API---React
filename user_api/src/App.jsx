import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  //const [nome, setNome] = useState('')
  //const [email, setEmail] = useState('')
  const [codigo, setCodigo] = useState('')
  
  const [user, setUser] = useState({
    nome: "",
    cpf: "",
  })

  const getUser = (codigo) => {
    fetch(`https://api-pi-fatec.onrender.com/clientes/${codigo}`)
    .then((resposta) => resposta.json())
    .then((json) => {
      if(json){
        setUser(json)
      }
    })

  }

  useEffect(() => {
    getUser(codigo) 
  }, [codigo])


  return (
    <>
      <Menu title="Ativa Fitness"/>
      <p>Pesquisa</p>
      <hr />
      <input type="text" onChange={(e) => {setCodigo(e.target.value)}} />
      <p>Nome: {user.nome}</p>
      <p>CPF: {user.cpf}</p>
    </>
  )
}

export default App
