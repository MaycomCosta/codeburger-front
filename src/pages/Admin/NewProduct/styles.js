import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    padding: 30px;
    background: #565656;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  margin-bottom: 3px;
  color: #ffffff;
`

export const Input = styled.input`
  border: none;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`

export const ButtonProduct = styled(Button)`
  margin-top: 25px;
  width: 100%;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  border: 1px dashed #ffffff;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  text-align: center;

  input {
    opacity: 0;
  }
`
