import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./calendar.module.scss";

const TravelCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddEvent = () => {
    if (newEvent.trim() !== "") {
      if (editingIndex !== null) {
        // Update existing event
        const updatedEvents = [...events];
        updatedEvents[editingIndex] = { date: date.toDateString(), event: newEvent };
        setEvents(updatedEvents);
        setEditingIndex(null);
      } else {
        // Add new event
        setEvents([...events, { date: date.toDateString(), event: newEvent }]);
      }
      setNewEvent("");
    }
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const handleEditEvent = (index) => {
    setNewEvent(events[index].event);
    setEditingIndex(index);
  };

  return (
    <div className={classes.calendarContainer}>
        <div className={classes.navBar}>
            <a href="/" className={classes.navItem}>Home</a>
            <a href="/explore" className={classes.navItem}>Explore</a>
        </div>
      <p className={classes.title}>Travel Calendar</p>
      <Calendar onChange={setDate} value={date} className={classes.calendar} />
      <div className={classes.eventSection}>
        <h2>Selected Date: {date.toDateString()}</h2>
        <input
          type="text"
          placeholder="Add or update event..."
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          className={classes.eventInput}
        />
        <button onClick={handleAddEvent} className={classes.addEventButton}>
          {editingIndex !== null ? "Update Event" : "Add Event"}
        </button>
        <ul className={classes.eventList}>
          {events
            .filter((event) => event.date === date.toDateString())
            .map((event, index) => (
              <li key={index} className={classes.eventItem}>
                {event.event}
                <div className={classes.eventActions}>
                  <button className={classes.editButton} onClick={() => handleEditEvent(index)}>Edit</button>
                  <button className={classes.deleteButton} onClick={() => handleDeleteEvent(index)}>Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelCalendar;
