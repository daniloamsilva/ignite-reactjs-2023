import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import { Wrapper, Header, OrderInfo, Section } from './styles'
import DeliveryImage from '../../assets/delivery.png'
import { Badge } from '../../components/Badge'

export function Success() {
  return (
    <Wrapper>
      <Header>
        <h3>Uhu! Pedido confirmado</h3>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Header>
      <Section>
        <div id="firstColumn">
          <OrderInfo>
            <Badge.Container>
              <Badge.Icon color="purple">
                <MapPin weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="yellow">
                <Timer weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="yellow-dark">
                <CurrencyDollar weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </Badge.Infos>
            </Badge.Container>
          </OrderInfo>
        </div>
        <div>
          <img src={DeliveryImage} alt="Homem em uma moto" />
        </div>
      </Section>
    </Wrapper>
  )
}
