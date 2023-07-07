import React from "react";
import TimelineListItem from "./TimelineListItem";

const TimelineList = ({ timeStamps }) => {
  return (
    <ul className="timeline-list">
      {timeStamps.map((item, index) => {
        return <TimelineListItem item={item} key={index} />;
      })}
    </ul>
  );
};

export default TimelineList;
