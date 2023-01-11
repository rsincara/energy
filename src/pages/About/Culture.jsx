import React, {useEffect, useState} from 'react';

import * as SC from './styles';
import CultureItem from "../../components/CultureItem";
import {fetchApi} from "../../services/fetch";
import Loader from "../../ui/Loader";

const Culture = () => {

  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetchApi('cultural_events').then((eventsRes) => {
      setEvents(eventsRes);
    })
  }, []);

  return (
      <SC.Section>
        <SC.SectionTitle>
          Корпоративная культура
        </SC.SectionTitle>

        {!events && (
            <Loader />
        )}

        {events && (
            <SC.CultureWrapper>
              {events.map((event) => (
                  <CultureItem event={event} />
              ))}
            </SC.CultureWrapper>
        )}
      </SC.Section>
  );
};

export default Culture;
