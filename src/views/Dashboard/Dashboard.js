import React from 'react'

import './Dashboard.css'
import Store from '../../store/Store'
import Toggle from '../../components/Toggle/Toggle'
import Checkbox from '../../components/Checkbox/Checkbox'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import { offers } from '../../mocks'
import { formatMoney } from '../../utils'

class Dashboard extends React.PureComponent {
  constructor(...args) {
    super(...args)

    this.state = {
      isShowMap: true,
      isShowFlats: true,
      isShowHouses: true,
      monthlyCost: 200,
      insuranceAmount: 1000000
    }

    this.toggleMap = this.toggleMap.bind(this)
    this.filterByType = this.filterByType.bind(this)
    this.filterByAmount = this.filterByAmount.bind(this)
  }

  toggleMap() {
    this.setState({ isShowMap: !this.state.isShowMap })
  }

  filterByType(isFlat) {
    this.setState(isFlat ?
      { isShowFlats: !this.state.isShowFlats } :
      { isShowHouses: !this.state.isShowHouses }
    )
  }

  filterByAmount(event) {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  toEntryDetails = (id) => {
    this.props.history.push(`/dashboard/${id}`)
  }

  render() {
    const { isShowMap, isShowFlats, isShowHouses, monthlyCost, insuranceAmount } = this.state
    const entries = Store.getValue('entries')
      .filter(entry => (
        (
          (isShowFlats && entry.mieszkanie === true) ||
          (isShowHouses && entry.mieszkanie === false)
        ) &&
        entry[`suwak.${offers[entry.pakiet].label}`] > monthlyCost &&
        entry.insuranceAmount > insuranceAmount
      ))

    return (
      <div className="dashboard">
        <div className="dashboard__table-wrap">
          <table className="table">
            <caption>
              <div className="table__caption">
                <h3>Lista ofert</h3>
                <div className="toggle">
                  <i className="far fa-map" />
                  <Toggle checked={isShowMap} onChange={this.toggleMap} />
                </div>
              </div>
            </caption>

            <thead className="table__head">
              <tr className="table__head__filters">
                <th colSpan="8">
                  <div className="default-filters">
                    <label className="filter">
                      <span>Obszar</span>
                      <div>Centrum, Mokotów, Warszawa</div>
                    </label>
                    <div className="filter">
                      <span>Rodzaj nieruchomości</span>
                      <div>
                        <Checkbox onChange={() => this.filterByType(true)}
                                  checked={isShowFlats}
                                  label={<span><i className="far fa-building" /> Mieszkania</span>}
                        />
                        <Checkbox onChange={() => this.filterByType(false)}
                                  checked={isShowHouses}
                                  label={<span><i className="far fa-home" /> Domy</span>}
                        />
                      </div>
                    </div>
                    <label className="filter">
                      <span>Miesięczny koszt</span>
                      <select name="monthlyCost" onChange={this.filterByAmount}>
                        <option value={200}>> 200 PLN</option>
                        <option value={300}>> 300 PLN</option>
                        <option value={400}>> 400 PLN</option>
                        <option value={500}>> 500 PLN</option>
                        <option value={600}>> 600 PLN</option>
                      </select>
                    </label>
                    <label className="filter">
                      <span>Kwota ubezpieczenia</span>
                      <select name="insuranceAmount" onChange={this.filterByAmount}>
                        <option value={1000000}>> 1 000 000 PLN</option>
                        <option value={3000000}>> 3 000 000 PLN</option>
                        <option value={5000000}>> 5 000 000 PLN</option>
                      </select>
                    </label>
                  </div>
                </th>
              </tr>
              <tr className="table__head__column-names">
                <th>ID</th>
                <th>Rodzaj</th>
                <th>Koszt miesięczny</th>
                <th>Wartość ubezpieczenia</th>
                <th>Kto</th>
                <th>Miasto</th>
                <th>Data</th>
                <th />
              </tr>
            </thead>

            <tbody className="table__body">
              {
                entries.map(entry => (
                  <tr key={entry.id} onClick={() => this.toEntryDetails(entry.id)}
                      className="table__body__row">
                    <td>{entry.id}</td>
                    <td>
                      {
                        entry.mieszkanie ?
                          <span><i className="far fa-building" /> Mieszkanie</span> :
                          <span><i className="far fa-home" /> Dom</span>
                      }
                    </td>
                    <td>{formatMoney(entry[`suwak.${offers[entry.pakiet].label}`], 'PLN')}</td>
                    <td>{formatMoney(entry.insuranceAmount, 'PLN')}</td>
                    <td>{entry.name}</td>
                    <td>{entry.miasto}</td>
                    <td>{(new Date(Date.now())).toLocaleDateString('pl-PL')}</td>
                    <td><a>Szczegóły <i className="fal fa-angle-right" /></a></td>
                  </tr>
                ))
              }
              <tr key="just-a-filler"><td colSpan="8" /></tr>
            </tbody>
          </table>
        </div>

        {isShowMap && <GoogleMap zoom={13} markers={entries.map(entry => entry.adres)} />}
      </div>
    )
  }
}

export default Dashboard
