import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import "./par-mums.scss"
import Tick from "./../images/tick.png"

// import aboutImage from "./../images/cleaner-girl.png"

const aboutUsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Par mums | Solis Tīrībai</title>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/lv_LV/sdk.js#xfbml=1&version=v8.0&appId=620075488933384&autoLogAppEvents=1"
          nonce="i1jpVPSm"
        ></script>
      </Helmet>
      <div id="fb-root"></div>
      <div className="about-content">
        <div className="about-why">
          <h1 className="about-title">Kāpēc izvēlēties mūs?</h1>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Veicam ķīmisko un mitro tīrīšanu</p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Individuāla pieeja katram klientam</p>
          </div>
          {/* <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Savu darbu izpildām rūpīgi un atbildīgi</p>
          </div> */}

          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Iztīrām dažādas grūtības pakāpes traipus</p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>
              Strādājam ar antialerģiskiem, cilvēkiem un dzīvniekiem nekaitīgiem
              tīrīšanas līdzekļiem
            </p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Dezinfekcija - pēc klienta vēlēšanās</p>
          </div>

          {/* <div className="about-reason">
            <img src={People} alt="" />
            <p>
              Sadarbojamies ar privātpersonām un uzņēmumiem, tai skaitā skolām,
              viesnīcām, restorāniem, autoservisiem, uc.
            </p>
          </div>

          <div className="about-reason">
            <img src={Truck} alt="" />
            <p>Bezmaksas izbraukšana pie klienta dzīvesvietā</p>
          </div> */}
        </div>
        <div className="about-image">
          {/* <img className="aboutImg" src={aboutImage} alt="img" /> */}
          {/* <h1 className="about-title">Atsauksmes</h1> */}
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fineta.dzerina1%2Fposts%2F1767488250055287&show_text=true&width=auto&appId=620075488933384&height=175"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              height: "175px",
            }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <br />

      {/* <h1 className="about-title">Solis Tīrībai klienti:</h1> */}
      {/* <TestimonialCard /> */}
      {/* <p>
        🔸 privātpersonas; - 🔸restorāni; - 🔸banketu zāles; - 🔸internātskolas;
        - 🔸skolas; - 🔸frizētavas; - 🔸skaistumkopšanas saloni; - 🔸fitnesa
        centri; - 🔸autoservisi; - 🔸viesnīcas; - 🔸bērnudārzi; - 🔸viesu nami
        u.c.
      </p> */}
    </Layout>
  )
}

export default aboutUsPage
