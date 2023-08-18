import { useState, useContext } from 'react'
import { CurrencyDollar, MapPin, CreditCard, Bank, Money } from 'phosphor-react'

import {
  Wrapper,
  Divider,
  FormOrder,
  Results,
  SelectedCoffees,
  SubmitButton,
} from './styles'
import { RadioButton } from '../../components/RadioButton'
import { CoffeeCard } from '../../components/CoffeCard'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { cart, getCoffeeById } = useContext(CartContext)
  const [selectedPayment, setSelectedPayment] = useState('')

  const handlePaymentChange = (value: string) => {
    setSelectedPayment(value)
  }

  return (
    <Wrapper>
      <FormOrder>
        <h5>Complete seu pedido</h5>
        <div id="first-section" className="form-section">
          <header>
            <MapPin size={22} />
            <div>
              <p className="section-title">Endereço de Entrega</p>
              <p className="section-subtitle">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>
          <div id="form">
            <div className="form-row">
              <input className="col-2" type="text" placeholder="CEP" required />
            </div>
            <div className="form-row">
              <input className="col-6" type="text" placeholder="Rua" required />
            </div>
            <div className="form-row">
              <input
                className="col-2"
                type="text"
                placeholder="Número"
                required
              />
              <input
                className="col-4"
                type="text"
                placeholder="Complemento (opcional)"
              />
            </div>
            <div className="form-row">
              <input
                className="col-2"
                type="text"
                placeholder="Bairro"
                required
              />
              <input
                className="col-3"
                type="text"
                placeholder="Cidade"
                required
              />
              <input className="col-1" type="text" placeholder="UF" required />
            </div>
          </div>
        </div>
        <div id="second-section" className="form-section">
          <header>
            <CurrencyDollar size={22} />
            <div>
              <p className="section-title">Pagamento</p>
              <p className="section-subtitle">
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </header>
          <div id="payment">
            <RadioButton
              label="CARTÃO DE CRÉDITO"
              name="payment"
              htmlFor="creditCard"
              icon={<CreditCard size={16} weight="regular" />}
              selected={selectedPayment}
              onChange={handlePaymentChange}
            />
            <RadioButton
              label="CARTÃO DE DÉBITO"
              name="payment"
              htmlFor="debitCard"
              icon={<Bank size={16} weight="regular" />}
              selected={selectedPayment}
              onChange={handlePaymentChange}
            />
            <RadioButton
              label="DINHEIRO"
              name="payment"
              htmlFor="money"
              icon={<Money size={16} weight="regular" />}
              selected={selectedPayment}
              onChange={handlePaymentChange}
            />
          </div>
        </div>
      </FormOrder>
      <SelectedCoffees>
        <h5>Cafés selecionados</h5>

        <div id="coffeeList">
          {cart.map((coffee) => {
            const coffeeData = getCoffeeById(coffee.id)
            return coffeeData ? (
              <>
                <CoffeeCard.Cart key={coffee.id} coffee={coffeeData} />
                <Divider />
              </>
            ) : (
              <></>
            )
          })}
          <Results>
            <p>
              <span className="label">Total de itens</span>
              <span>R$ 29,70</span>
            </p>
            <p>
              <span className="label">Entrega</span>
              <span>R$ 3,50</span>
            </p>
            <p className="total">
              <span className="label">Total</span>
              <span className="value">R$ 33,20</span>
            </p>
          </Results>

          <SubmitButton type="submit" disabled={!cart.length}>
            Confirmar Pedido
          </SubmitButton>
        </div>
      </SelectedCoffees>
    </Wrapper>
  )
}
