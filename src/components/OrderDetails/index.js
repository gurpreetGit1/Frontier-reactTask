import React from "react";
import { getDayfn, getMonth, getYear } from "../../Utility";
import Card from "../UI/Card";

const OrderDetails = ({ productData }) => {
  const { orderId, orderDate, orderStatus } = productData;

  return (
    <Card className="rounded-1 bg-white order-details mt-lg-0 mt-5">
      <h5 className="fw-medium border-bottom d-flex mt-1 text-dark-light pb-6">
        <i className="me-3 icon-file fs-3"></i>Order Details
      </h5>
      <ul className="p-0">
        <li>
          <p className="d-flex text-grey">
            <span className="fw-medium text-dark"> Order ID </span>
            {orderId}
          </p>
          <p className="d-flex text-grey">
            <span className="fw-medium text-dark">Order Placed On </span>
            {`${getDayfn(orderDate)} ${getMonth(orderDate)} ${getYear(
              orderDate
            )}`}
          </p>
          <p className="d-flex text-grey text-capitalize">
            <span className="fw-medium text-dark">Order Status </span>
            {orderStatus}
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default OrderDetails;
