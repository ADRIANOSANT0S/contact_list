import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Importa a tipagem do modulo types
import { Contact } from '../../types'

// Cria um tipo para o estado
interface ContactState {
  contacts: Contact[]
}

// Configura o estado inicial do reducer
const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      name: 'Jonas',
      phone: '11989578846',
      email: 'jonas2027@gmail.com'
    },
    {
      id: 2,
      name: 'Jó',
      phone: '11989578254',
      email: 'jo2027@gmail.com'
    }
  ]
}

//Cria os slice para ser consumido no componentes
const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    // Reducer para remover um contato da lista
    remove: (state, action: PayloadAction<number>) => {
      state.contacts = [
        ...state.contacts.filter((contact) => contact.id !== action.payload)
      ]
    },
    //Reducer para editar uma tarefa existente.
    changer: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContact >= 0) {
        state.contacts[indexContact] = action.payload
      }
    },
    // Cria um novo contato
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const alreadyName = state.contacts.find(
        (contact) =>
          contact.name.toUpperCase() === action.payload.name.toUpperCase()
      )
      const alreadyNumber = state.contacts.find(
        (contact) => contact.phone === action.payload.phone
      )
      if (alreadyName && alreadyNumber) {
        alert('Já existe um contato com esse dados cadastrais')
      } else {
        let newId = state.contacts.length
        const newContact = {
          ...action.payload,
          id: ++newId
        }
        state.contacts.push(newContact)
      }
    }
  }
})

export const { remove, changer, register } = contatoSlice.actions

export default contatoSlice.reducer
