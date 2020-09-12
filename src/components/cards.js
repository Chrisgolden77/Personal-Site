import React from 'react';

const Cards = ({ items }) => {
  return (
    <section class="card-list">
      {items &&
        items.map(
          (
            { content, language, description, languageIcon, tags, title },
            i
          ) => (
            <article class="card" key={i}>
              <div class="card-language">
                <div class="language-avatar" href="#">
                  <img alt={language} src={languageIcon} />
                </div>
                {description && (
                  <div class="language-name">
                    {language}
                    <div class="language-name-suffix">{description}</div>
                  </div>
                )}
              </div>
              <header class="card-header">
                <h2>{language}</h2>
                <p>{content}</p>
              </header>
              {tags && (
                <div class="tags">
                  {tags.map(tag => (
                    <a href={tag.link}>{tag.text}</a>
                  ))}
                </div>
              )}
            </article>
          )
        )}
    </section>
  );
};
export default Cards;
