import { styled } from 'styled-components'

export const Item = styled.li`
  display: block;
  margin-bottom: 16px;
  max-width: 500px;
  width: 100%;
`
export const ItemData = styled.span`
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 8px;
  width: 100%;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`
export const ContainerEdit = styled.div`
  display: block;
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

export const EditInput = styled.input`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  width: 60%;
  outline: none;
  border: none;
  border-bottom: 2px solid #2f3542;
  background-color: transparent;
  padding: 0 8px;
`
