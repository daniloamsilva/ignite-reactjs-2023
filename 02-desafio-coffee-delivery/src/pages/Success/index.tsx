import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { Item, Container, Header, OrderInfo, Section } from './styles'
import DeliveryImage from '../../assets/delivery.png'

export function Success() {
  return (
    <Container>
      <Header>
        <h3>Uhu! Pedido confirmado</h3>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Header>
      <Section>
        <div id="firstColumn">
          <OrderInfo>
            <Item color="purple">
              <div className="icon">
                <MapPin weight="fill" size={16} />
              </div>
              <div className="itemInfos">
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </Item>
            <Item color="yellow">
              <div className="icon">
                <Timer weight="fill" size={16} />
              </div>
              <div className="itemInfos">
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </Item>
            <Item color="yellow-dark">
              <div className="icon">
                <CurrencyDollar weight="fill" size={16} />
              </div>
              <div className="itemInfos">
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </Item>
          </OrderInfo>
        </div>
        <div>
          <img src={DeliveryImage} alt="Homem em uma moto" />
        </div>
      </Section>
    </Container>
  )
}
