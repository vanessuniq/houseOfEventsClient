import axios from "axios";
import React, { useEffect, useState } from "react";
import EventList from "./EventList";
import Header from "./Header";

const BASE_API = "http://localhost:8080";

function MainPage() {
    //setting the state that will save all events fetched from the api
    const [events, setEvents] = useState([]);
    // fetch events from api in the useEffect hook to prevent side effects
    useEffect(() => {
        axios
            .get(`${BASE_API}/api/events`)
            .then(response => setEvents(events.concat(response.events)))
            .catch(error => {
                console.log(error)
            })
    }, [events]);

    // handle the case when event list is empty
    if(events.length === 0) return (<h1>The event list is currently empty.</h1>)
    return (
        <div>
            <Header/>
            <EventList events= {events}/>
        </div>
    )
}

export default MainPage;