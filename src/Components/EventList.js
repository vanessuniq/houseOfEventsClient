import React from "react";

function EventList({ events }) {
    return (
        <div>
            Event List page
        </div>
    )
};

EventList.defaultProps = {
    events: [],
};
export default EventList