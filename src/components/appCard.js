import React from 'react';

const AppCard = ({ app, onClick }) => {
  return (
    <article className="app-tile card" key={app.appName}>

   <div
        role="button"
        tabIndex="0"
        style={{ height: '100%', overflowY: "auto" }}
      >
        <h2>{app.appName}</h2>
        <img
          className="app-image"
          alt={`Screen shot of ${app.appName}`}
          src={app.appImages ? app.appImages[0] : ''}
          onClick={() => onClick()}
          onKeyDown={() => onClick()}
          role="button"
        />
        <h3>Description:</h3>
        <div>{app.appDescription}</div>
        <br />
      </div>
      {app.appLink ? (
        <a
          className="app-link"
          href={app.appLink}
          rel="noreferrer noopener"
          target="_blank"
        >
          <strong>{app.appLinkText || 'View Demo Here'}</strong>
        </a>
      ) : null}
      </article>
  );
};
export default AppCard;
