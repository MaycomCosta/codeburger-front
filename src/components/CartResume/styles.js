import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      ' title title'
      'items items-price'
      'delivery tex-delivery-price';

    .title {
      grid-area: title;
      margin-bottom: 10px;
    }

    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }
    .delivery-teax {
      grid-area: delivery;
    }
    .delivery-tax-price {
      grid-area: tex-delivery-price;
    }
  }

  .container-bottom {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
  }
`
