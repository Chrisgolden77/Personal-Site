import React from 'react';

const Cards = ({ items }) => {
  return (
    <section class="card-list">
      {items &&
        items.map(
          (
            { content, language, languageDescription, languageIcon, title },
            i
          ) => (
            <article class="card" key={i}>
              <header class="card-header">
                <h2>{title}</h2>
                <p>{content}</p>
              </header>
              <div class="card-language">
                <div class="language-avatar" href="#">
                  <img alt={language} src={languageIcon}/>
                </div>
                <svg class="half-circle" viewbox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                {/* <div class="language-name">
                  {language}
                  <div class="language-name-suffix">{languageDescription}</div>
                </div> */}
              </div>
              {/* <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                <a href="#">web-dev</a>
              </div> */}
            </article>
          )
        )}
    </section>
  );
};
export default Cards;
