import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`

export const ContainerUserInfo = styled.div`
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const ExitPage = styled.a`
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9758a6;
`
