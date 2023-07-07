import React from "react";
import { getDayfn, getFullMonth, getWeekDay, getYear } from "../../Utility";
import Card from "../UI/Card";

const DeliveryStatus = ({ productData }) => {
  const { deliveryDate, orderStatus } = productData;

  return (
    <Card className="bg-white rounded-1">
      <h6 className="m-0 fw-medium">Delivery Date</h6>
      <h3 className="fw-medium m-0 mt-1">{getWeekDay(deliveryDate)}</h3>
      <p className="m-0 fw-medium lh-1 fs-4">{getFullMonth(deliveryDate)}</p>
      <p className="fw-medium mb-0 d-flex align-items-end">
        <span className="text-warning lh-1 display-1">
          {getDayfn(deliveryDate)}
        </span>
        <span className="mb-2">{getYear(deliveryDate)}</span>
      </p>
      <h6 className="m-0">Status:</h6>
      <p className="text-success text-capitalize mb-5 fs-1 d-flex align-items-center">
        <i className="icon-check me-4 fs-2"></i>
        {orderStatus}
      </p>
    </Card>
  );
};

export default DeliveryStatus;
