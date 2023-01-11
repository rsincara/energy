import React from 'react';

import * as SC from './styles';

const CultureItem = ({ event }) => {

  return (
      <SC.CultureItem>
        <img style={{objectFit: 'cover'}} src={event['photo_url']} alt="culturePlaceholder" />

        <SC.Info>
          {new Date(event.date * 1000).toLocaleDateString()} <br />
          {event.description}
        </SC.Info>
      </SC.CultureItem>
  );
};

export default CultureItem;
