import styled from 'styled-components'

import Backgroung from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Backgroung}');

  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 10px;
    color: #ffffff;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;
  color: #ffffff;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 5px;
`

export const SignInLink = styled.p`
  width: 187.3px;
  height: 22.99px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  a {
    text-decoration-line: underline;
    cursor: pointer;
  }
`
