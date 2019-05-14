import React from 'react'

const EventsCard = ({ image, name, date, venue }) => {
  return(
    <div  className="columns event-index-card box-shadow">
      <div className="column">
        <img className="event-image" src={image}></img>
      </div>
      <div className="column">
        <h1  className="title is-1">{name}</h1>
        <div className="event-meta">
          <div className="subtitle is-7">{date}</div>
          <div className="subtitle is-7">{venue}</div>
        </div>
      </div>
    </div>
  )
}

export default EventsCard
