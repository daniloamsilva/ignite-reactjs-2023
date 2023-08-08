import { CurrencyDollar, MapPin } from 'phosphor-react'
import { Container, FormOrder, SelectedCoffees } from './styles'

export function Checkout() {
  return (
    <Container>
      <FormOrder>
        <h3>Complete seu pedido</h3>
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
              <input className="col-3" type="text" placeholder="Cidade" />
              <input className="col-1" type="text" placeholder="UF" />
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
        </div>
      </FormOrder>
      <SelectedCoffees>
        <h3>Cafés selecionados</h3>
      </SelectedCoffees>
    </Container>
  )
}
