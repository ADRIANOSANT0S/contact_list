import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import ContactItem from '../ContactItem'

import * as S from './styles'
import { Title } from '../../styles'

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)
  return (
    <S.ContainerContactList>
      <S.ListContact>
        <Title>Lista de contatos</Title>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </S.ListContact>
    </S.ContainerContactList>
  )
}

export default ContactList
