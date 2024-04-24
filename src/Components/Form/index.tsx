import { useDispatch } from 'react-redux'
import { useState } from 'react'

import {} from '../../store'

import * as S from './styles'

import { register } from '../../store/reducers'
import { MainButton, Title } from '../../styles'

const Form = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(
      register({
        name,
        phone,
        email
      })
    )
    setName('')
    setPhone('')
    setEmail('')
  }
  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputGroup>
        <Title>Adicionar contato</Title>
        <S.Label htmlFor="text">Nome:</S.Label>
        <S.Input
          type="text"
          placeholder="Nome"
          minLength={3}
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="tel">Telefone:</S.Label>
        <S.Input
          type="tel"
          placeholder="(00)90000-0000"
          name="tel"
          id="tel"
          maxLength={15}
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="email">E-mail:</S.Label>
        <S.Input
          type="email"
          placeholder="nome@dominio.com"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </S.InputGroup>
      <MainButton type="submit">Adicionar</MainButton>
    </S.FormContainer>
  )
}

export default Form
