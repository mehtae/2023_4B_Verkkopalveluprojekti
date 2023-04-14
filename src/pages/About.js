import React from "react";
import "../styles/about.css";
import Pic from '../img/taustakuva3.png'
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop">
          <img src={Pic}/>
      
      </div>
      <div className="aboutBottom">
      
        <h1><b> ABOUT US</b></h1>
        <p className="description">
        Olemme ryhmä kehittäjiä, jotka loivat tämän sivuston auttaakseen ihmisiä saamaan laadukasta ohjelmointialan koulutusta. Tavoitteenamme on tehdä oppimisesta mahdollisimman helppoa ja saavutettavaa kaikille, jotka haluavat oppia uuden ammatin tai kehittää taitojaan. Tarjoamme laajan valikoiman online-ohjelmointikursseja, jotka auttavat sinua menestymään urallasi.
        </p>
        <p className="description"> 
        Jos sinulla on kysyttävää tai ehdotuksia, ota meihin yhteyttä yhteydenottolomakkeella sivulla "Ota yhteyttä". Olemme aina valmiina auttamaan ja vastaamaan kysymyksiisi.</p>
      </div>
    </div>
  );
}

export default About;
