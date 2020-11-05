import React from 'react';

const AppCard = ({ app, onClick }) => {
  return (
    <div className="app-tile">
      <div
        role="button"
        tabIndex="0"
        onClick={() => onClick()}
        onKeyDown={() => onClick()}
        style={{ height: '100%', overflowY: "scroll" }}
      >
        <h2>{app.appName}</h2>
        <img
          className="app-image"
          alt={`Screen shot of ${app.appName}`}
          src={app.appImages ? app.appImages[0] : ''}
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
    </div>
  );
};
export default AppCard;
