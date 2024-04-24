import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-family: Jost, sans-serif;
    list-style: none;
  }

  body {
    background-color: #f1f2f6;
  }
`

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h2`
  display: block;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`

export const MainButton = styled.button`
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #f1f2f6;
  background-color: green;
  border-radius: 4px;
  border: none;
`
export const ButtonCancel = styled(MainButton)`
  background-color: #2f3542;
`
export const ButtonRemove = styled(MainButton)`
  background-color: #e74c3c;
`
export const ButtonEdit = styled(MainButton)`
  background-color: #ffa502;
`

export default GlobalStyle
