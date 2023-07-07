import React from "react";
import Card from "../UI/Card";
import TimelineList from "./TimelineList";

const Timeline = ({ productData }) => {
  const trackingId = productData.tracking.id;
  const timeStamps = productData.tracking.timeStamps;

  return (
    <Card className="bg-white p-1 mt-5 rounded-1">
      <p className="fw-medium">
        Tracking Id - <span className="text-primary">{trackingId}</span>
      </p>
      <TimelineList timeStamps={timeStamps} />
    </Card>
  );
};

export default Timeline;
