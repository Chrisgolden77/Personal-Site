import PropTypes from 'prop-types';
import React from 'react';

const TimelineItem = ({ data }) => (
  <div className="timeline-item" lazyLoading={true}>
      <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          <span className="circle" />
      </div>
  </div>
);
TimelineItem.propTypes = {
  data: PropTypes.object,

};

TimelineItem.defaultProps = {
  data: {}
};

export default TimelineItem;
 