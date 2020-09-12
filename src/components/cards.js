import React from 'react';

const Cards = ({ items }) => {
  return (
    <section className="card-list">
      {items &&
        items.map(
          (
            { content, language, description, languageIcon, tags, title },
            i
          ) => (
            <article className="card" key={i}>
              <div className="card-language">
                <div className="language-avatar" href="#">
                  <img alt={language} src={languageIcon} />
                </div>
                {description && (
                  <div className="language-name">
                    {language}
                    <div className="language-name-suffix">{description}</div>
                  </div>
                )}
              </div>
              <header className="card-header">
                <h2>{language}</h2>
                <p>{content}</p>
              </header>
              {tags && (
                <div className="tags">
                  {tags.map((tag, i) => (
                    <a key={(tag.text + i)} href={tag.link}>
                      {tag.text}
                    </a>
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
