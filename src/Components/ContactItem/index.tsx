import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { changer, remove } from '../../store/reducers'

import {
  MainButton,
  ButtonEdit,
  ButtonCancel,
  ButtonRemove
} from '../../styles'

import { Contact } from '../../types'

import * as S from './styles'

type Props = {
  contact: Contact
}

const ContactItem = ({ contact }: Props) => {
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [editedContact, setEditedContact] = useState(contact)

  // Essa função quando acionada libera os campos para que possa ser editados
  const handleEdit = () => {
    setEditing(true)
  }

  // Essa função salva as alterações feita e fecha os campos de dição
  const handleSave = () => {
    dispatch(changer(editedContact))
    setEditing(false)
  }

  const handleCancelEditing = () => {
    setEditing(false)
  }

  // Essa função define os novos valor editados
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setEditedContact({
      ...editedContact,
      [name]: value
    })
  }

  return (
    <S.Item>
      {editing ? (
        <S.ContainerEdit>
          <div>
            <S.EditInput
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
            />
            <S.EditInput
              type="text"
              name="phone"
              value={editedContact.phone}
              onChange={handleChange}
            />
            <S.EditInput
              type="text"
              name="email"
              value={editedContact.email}
              onChange={handleChange}
            />
          </div>
          <S.ContainerButtons>
            <MainButton type="submit" onClick={handleSave}>
              Salvar
            </MainButton>
            <ButtonCancel type="button" onClick={handleCancelEditing}>
              cancelar
            </ButtonCancel>
          </S.ContainerButtons>
        </S.ContainerEdit>
      ) : (
        <>
          <S.ItemData>{contact.name}</S.ItemData>
          <S.ItemData>{contact.phone}</S.ItemData>
          <S.ItemData>{contact.email}</S.ItemData>
          <S.ContainerButtons>
            <ButtonEdit onClick={handleEdit} type="button">
              Editar
            </ButtonEdit>
            <ButtonRemove
              type="button"
              onClick={() => dispatch(remove(contact.id))}
            >
              Remover
            </ButtonRemove>
          </S.ContainerButtons>
        </>
      )}
    </S.Item>
  )
}

export default ContactItem
