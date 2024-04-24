import { Provider } from 'react-redux'

import Form from './Components/Form'
import ContactList from './Components/ContactList'
import store from './store'

import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <Form />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
