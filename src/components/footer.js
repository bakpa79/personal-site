import React from 'react';
import './footer.css'

const Footer = () =>{
  return(
    <footer>
      <section className="container">
        <div className="row">
          <ul className="col-md-8 col-md-push-2">
            <li>
              <a href="https://github.com/bakpa79" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://codepen.io/bakpa79/"><i className="fa fa-codepen" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://www.twitter.com/palmwine9999"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brianakpa/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer;