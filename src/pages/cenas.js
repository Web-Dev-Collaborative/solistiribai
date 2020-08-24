import React from "react"
import Helmet from "react-helmet"

import Layout from "./../components/layout"
import "./cenas.scss"

const PricesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Cenas | Solis Tīrībai</title>
      </Helmet>

      <h1 className="prices-title">Mūsu izcenojumi:</h1>
      <div className="prices-content">
        <div className="prices-card-box">
          <h3 className="prices-card-title">Krēslu tīrīšana</h3>
          <h1 className="prices-card-amount">2.50€ - 5€</h1>
          <h1 className="prices-card-description">par vienību</h1>
          <h1 className="prices-card-discount">20% atlaide no 20 gab.</h1>
        </div>
        <div className="prices-card-box">
          <h3 className="prices-card-title">Dīvānu, matraču tīrīšana</h3>
          <h1 className="prices-card-amount">20€ - 65€</h1>
          <h1 className="prices-card-description">viss dīvāns/matracis</h1>
          <h1 className="prices-card-amount">vai 9€ - 15€</h1>
          <h1 className="prices-card-description">par sēdvietu</h1>
        </div>
        <div className="prices-card-box">
          <h3 className="prices-card-title">
            Paklāju ķīmiskā vai mitrā tīrīšana
          </h3>
          <h1 className="prices-card-amount">1.50€ - 6€</h1>
          <h1 className="prices-card-description">par m2</h1>
        </div>
      </div>

      <br />
      <p className="prices-notes">
        *Lai uzzinātu precīzākas cenas - sazinies ar mums!
      </p>
      <p className="prices-notes">
        *Cenas atkarīgas no auduma materiāla un tīrības pakāpes, tādēļ ir
        atšķirīgas.
      </p>
    </Layout>
  )
}

export default PricesPage
