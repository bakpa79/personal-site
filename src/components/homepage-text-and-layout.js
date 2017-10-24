import React from 'react';
import headshot from '../assets/headshot-square.jpg';
import './homepage-text-and-layout.css';

function HomepageTextAndLayout() {
  return(
    <section className="container">
      <div className="row">
        <div className="col-md-8 col-md-push-2 bio">
          <div className="headshot">
            <img src={headshot} alt="Brian Akpa Headshot"/>
          </div>
          <h1>I'm Brian Akpa, and I build things with JavaScript, CSS and HTML</h1>
          <hr/>
          <p>I'm a Senior Front End Developer with a visual design background, who loves great UX, compelling content and immersive experiences. Working alongside project managers, information architects, Sitecore and custom application developers, backend developers, designers and even the client, I build smart and engaging CMS-Driven user interfaces and single page applications using HTML/JS/SCSS, RESTful services, and Angular JS. </p>
          <p>Based on project parameters and data from business analysts, I helped brainstorm and identify UI and interaction solutions, utilizing cross-browser capable elements and progressive enhancement that gracefully degrade across legacy browsers.</p>
          <p>In the past, I've used Wordpress and Drupal to build and deploy small CMS driven sites. I also have experience working with hybrid app development using Phonegap. The focus of much of my work has been in responsive/adaptive web development in the agency space, typically working on multiple projects at a time. On project teams have helped develop project technical strategies, staffing, planning and resourcing, as well as interviewing and evaluating potential new front end development hires.</p>
          <p>I have also helped to develop technical strategies and coordinate staffing, planning, and resourcing for projects.</p>
          <p>What am I working on in my spare time? check out my <a href="https://codepen.io/bakpa79/" target="_blank">Codepen</a> or <a href="https://github.com/bakpa79" target="_blank">Github</a> to see my sketches, gists and repos.</p>
        </div>
      </div>
    </section>
  );
}

export default HomepageTextAndLayout;