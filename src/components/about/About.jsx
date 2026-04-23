import React from 'react'

export default function About() {
  return (
    <>
      <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="row">
      
      <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
        <img src="/assets/img/portfolio/Slide8.PNG" className="img-fluid" alt />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
        <h3> </h3>
        <h4>Eine Oase des Komforts und der Eleganz im Herzen Wiens</h4>
        <p className="fst-italic">
         Genießen Sie ein unvergessliches Übernachtungserlebnis in unserem Apartment, wo moderner Komfort auf den klassischen Charme Wiens trifft. Jeder Winkel des Apartments wurde sorgfältig gestaltet, um eine komfortable und warme Umgebung zu schaffen, die Sie wie zu Hause fühlen lässt.
        </p>
        <h4>Was dieses Apartment auszeichnet:</h4>
        <ul>
          <li>
            <i className="ri-check-double-line" />
            Erstklassige Lage: Unser Apartment befindet sich in zentraler Lage in Wien und bietet einfachen Zugang zu den wichtigsten Sehenswürdigkeiten, Restaurants und Geschäften.
          </li>
          <li>
            <i className="ri-check-double-line" /> Stilvolles Innendesign: Das Apartment verfügt über ein elegantes und modernes Innendesign mit komfortablen Möbeln und hochwertigen Oberflächen.
          </li>
          <li>
            <i className="ri-check-double-line" /> Komplette Ausstattung: Wir bieten alle notwendigen Annehmlichkeiten für einen komfortablen Aufenthalt, darunter eine voll ausgestattete Küche, ein modernes Badezimmer und ein gemütliches Wohnzimmer.
          </li>
         
          <li>
            <i className="ri-check-double-line" />Wohlfühlen mit schöner Aussicht: Genießen Sie einen angenehmen Ausblick und lichtdurchflutete Räume, die zum Entspannen einladen.
          </li>
           <li>
            <i className="ri-check-double-line" />           Privatsphäre und Ruhe: Das Apartment bietet eine ruhige und private Atmosphäre, die Ihnen Entspannung nach einem langen Erkundungstag garantiert.

          </li>
        </ul>
        <br />
        <p />
      </div>
    </div>
  </div>
</section>

    <div>

  {/* ======= Features Section ======= */}
  <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="image col-lg-6" style={{backgroundImage: 'url("assets/img/features.png")'}} data-aos="fade-right" />
       
       
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
          <h4>Taxidienst in Wien und Umgebung: Ein unvergessliches Reiseerlebnis</h4>
          <p>Genießen Sie ein komfortables und sicheres Reiseerlebnis in Wien und Umgebung mit unserem Taxidienst. Wir bieten eine Flotte von modernen Fahrzeugen und erfahrenen Fahrern, um sicherzustellen, dass Sie pünktlich und bequem an Ihr Ziel gelangen.</p>
         <h4>Was unseren Taxidienst auszeichnet:</h4>
          <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-receipt" />
            <h4>Moderne und komfortable Fahrzeuge</h4>
            <p>
              Wir bieten eine Vielzahl von modernen und komfortablen Fahrzeugen, darunter Limousinen, SUVs und Minivans, um Ihren unterschiedlichen Bedürfnissen gerecht zu werden.
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-cube-alt" />
            <h4>Erfahrene Fahrer</h4>
            <p>
              Unsere Fahrer verfügen über umfangreiche Erfahrung im Fahren in Wien und Umgebung und achten darauf, Ihnen ein sicheres und komfortables Reiseerlebnis zu bieten.
            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-images" />
            <h4>Vernünftige Preise</h4>
            <p>
Wir bieten vernünftige und transparente Preise mit verschiedenen Zahlungsoptionen, um Ihrem Budget gerecht zu werden.            </p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
            <i className="bx bx-shield" />
            <h4> Umfassende Abdeckung</h4>
            <p>
Wir bieten Taxidienst in Wien und Umgebung, einschließlich der umliegenden Gebiete und anderer Städte.            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Section */}
</div>

    </>
  )
}
