import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Section from '../../components/Section/Section';
import EventFilter from './../../components/EventFilter/EventFilter';
import EventStatusFilter from '../../components/EventStatusFilter/EventStatusFilter';
import EventCard from './../../components/EventCard/EventCard';
import DataLoader from './../../components/DataLoader/DataLoader';
import Modal from './../../components/Modal/Modal';
import EventReview from './../../components/EventReview/EventReview';
import Panel from '../../components/Panel/Panel';
import Toast from '../../components/Toast/Toast';

import { EventsWrapper, Inner } from './EventsStyles';
import {
  Header,
  Title,
  Sidebar,
  ButtonGroup,
  ButtonOutlineGruped,
  ButtonText,
  Button,
  EventCards,
  InfoText,
} from '../../lib/style/generalStyles';
import { formatDateTime } from '../../lib/util/helpers';
import { useFetchEvents } from '../../lib/util/hooks';
import { eventRegistration } from './../../api/eventRegistration';
import { cancelEventRegistration } from './../../api/cancelEventRegistration';

const Events = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [response, setResponse] = useState({
    finished: false,
    error: false,
    message: '',
  });
  const [eventType, setEventType] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [maxEvents, setMaxEvents] = useState(5);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [token] = useState(localStorage.getItem('authToken'));
  const [events, isLoading, isError] = useFetchEvents(token, eventType);

  const onEventTypeChange = (eventType) => {
    setEventType(eventType);
  };

  const handleFilteredEventsChange = (newFilteredEvents) => {
    setFilteredEvents(newFilteredEvents);
  };

  const onEventClick = async (event) => {
    setSelectedEvent(event);

    if (event.isScheduled) {
      setSelectedEvent(event);
      let newResponse = { success: false, error: false, message: '' };

      try {
        const result = event.isMyEvent
          ? await cancelEventRegistration(token, event.id)
          : await eventRegistration(token, event.id);
        newResponse.error = !result.ok;
        newResponse.message = await result.text();
        onEventTypeChange(eventType === 'all' ? 'my' : 'all');
      } catch (error) {
        newResponse.error = true;
        newResponse.message = 'Something went wrong. Please try again.';
      } finally {
        newResponse.finished = true;
        setTimeout(
          () => setResponse({ finished: false, error: false, message: '' }),
          3000,
        );
        setResponse(newResponse);
      }
    } else if (event.isMyEvent && event.isFinished) {
      setIsModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handlePanelToggle = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  const handlePanelClose = () => {
    setIsPanelVisible(false);
  };

  const eventCards = () => {
    if (isError) {
      return <InfoText>Događaji se nisu mogli učitati.</InfoText>;
    } else if (isLoading) {
      return <DataLoader />;
    } else if (!filteredEvents.length) {
      return <InfoText>Događaji nisu pronađeni</InfoText>;
    } else {
      return filteredEvents.map((event, index) => {
        if (index > maxEvents - 1) return null;
        return (
          <EventCard
            key={event.id}
            name={event.name}
            organizer={event.organizer}
            dateTime={formatDateTime(event.startTime, event.endTime)}
            location={event.location}
            seats={event.seats}
            description={event.description}
            isMyEvent={event.isMyEvent}
            isFinished={event.isFinished}
            isScheduled={event.isScheduled}
            onEventClick={() => onEventClick(event)}
          />
        );
      });
    }
  };

  return (
    <EventsWrapper>
      <Section>
        <Header>
          <Title>Događaji</Title>
          <ButtonText onClick={handlePanelToggle}>
            {eventType === 'all' ? 'Filtriraj' : 'Status'}
          </ButtonText>
          <ButtonGroup>
            <ButtonOutlineGruped
              isActive={eventType === 'all'}
              onClick={() => onEventTypeChange('all')}>
              Svi događaji
            </ButtonOutlineGruped>
            <ButtonOutlineGruped
              isActive={eventType === 'my'}
              onClick={() => onEventTypeChange('my')}>
              Moji događaji
            </ButtonOutlineGruped>
          </ButtonGroup>
        </Header>
        <Inner>
          <Sidebar>
            {eventType === 'all' ? (
              <EventFilter
                events={events}
                onFilteredEventsChange={handleFilteredEventsChange}
              />
            ) : (
              <EventStatusFilter
                events={events}
                onFilteredEventsChange={handleFilteredEventsChange}
              />
            )}
          </Sidebar>
          <EventCards>
            {eventCards()}
            {filteredEvents.length > maxEvents && (
              <Button onClick={() => setMaxEvents(maxEvents + 5)}>
                Prikaži više
              </Button>
            )}
          </EventCards>
        </Inner>
      </Section>
      {isPanelVisible && (
        <Panel title="Status događaja" onClose={handlePanelClose}>
          {eventType === 'all' ? (
            <EventFilter
              onClose={handlePanelClose}
              events={events}
              onFilteredEventsChange={handleFilteredEventsChange}
            />
          ) : (
            <EventStatusFilter
              onClose={handlePanelClose}
              events={events}
              onFilteredEventsChange={handleFilteredEventsChange}
            />
          )}
        </Panel>
      )}

      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          title="Ocijeni događaj"
          handleClose={handleModalClose}>
          <EventReview event={selectedEvent} handleClose={handleModalClose} />
        </Modal>
      )}

      {response.finished && (
        <Toast
          isError={response.error}
          message={response.message}
          onClose={() =>
            setResponse({ finished: false, error: false, message: '' })
          }
        />
      )}
      <ReactTooltip />
    </EventsWrapper>
  );
};

export default Events;
