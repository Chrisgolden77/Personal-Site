import React from 'react';

const AppCard = ({ app }) => {
  return (
    <div className="app-tile">
      <h2>{app.appName}</h2>
      <img
        className="app-image"
        alt={`Screen shot of ${app.appName}`}
        src={app.appImages ? app.appImages[0] : ''}
      />
      <h3>Description:</h3>
      <div>{app.appDescription}</div>
      <br />
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
