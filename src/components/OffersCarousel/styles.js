import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
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

export const OffersImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    margin-left: 40px;
    margin-top: 10px;

    color: #424242;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 210px;
  border-radius: 10px;
  margin-left: 30px;
`

export const Button = styled.button`
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

  &: active {
    opacity: 0.6;
  }
`
