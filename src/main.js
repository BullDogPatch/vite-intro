import './style.css';
import liverpoolLogo from './liverpool-fc-4.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.liverpoolfc.com/" target="_blank">
      <img src="${liverpoolLogo}" class="logo liverpool" alt="Liverpool FC logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Liverpool FC logo to go to the Liverpool FC website.
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
