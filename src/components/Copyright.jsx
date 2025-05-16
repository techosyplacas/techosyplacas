import React from 'react';
import './styles/copyright.css';

const Copyright = () => {
  return (
    <section className="copyright">
      <div className="content__copyright grilla">
        <p>
          Copyright © 2023 Techos & Placas Todos los derechos reservados |
          Realizado por{' '}
          <a
            href="https://alex-pacheco-portafolio.netlify.app/#/"
            target="_blank"
          >
            Alex Pacheco
          </a>
        </p>
      </div>
    </section>
  );
};

export default Copyright;
