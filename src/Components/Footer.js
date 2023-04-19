import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 VERKKOPALVELUPROJEKTI</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.nordiclaw.fi/en/applications-terms-of-use?gclid=CjwKCAjwov6hBhBsEiwAvrvN6KTpbL7xcg-DXylVEtPmueMsAZQL0Q6EIzBNkWiFB51mZXG8g4utBxoCQH4QAvD_BwE">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
