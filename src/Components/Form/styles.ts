import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 8px;
  padding: 24px;
  width: 100%;
`
export const InputGroup = styled.div`
  display: block;
  margin-bottom: 16px;
  max-width: 500px;
  width: 100%;
`

export const Label = styled.label`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  border-bottom: 2px solid;
`
