import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const ButtonCategories = styled.button`
  cursor: pointer;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  background: none;
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#a9a9a9')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`

export const ContainerMenu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 20px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
