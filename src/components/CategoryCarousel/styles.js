import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #efefef;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  flex-direction: column;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  background: #9758a6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  position: static;
  width: 283.4px;
  height: 66px;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
