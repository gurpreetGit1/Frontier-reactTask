import React from "react";
import { getDayfn, getMonth, getTimeFn } from "../../Utility";

const TimeLineListItem = ({ item }) => {
  const { images: imagesArr, date: currentDate, activity, location } = item;
  return (
    <li className="d-flex">
      <div className="time">
        <p className="text-uppercase m-0 fw-medium">{`${getDayfn(
          item.date
        )} ${getMonth(currentDate)}`}</p>
        <p className="text-capitalize m-0 fs-md">{getTimeFn(currentDate)}</p>
      </div>
      <div className="timeline flex-grow-1">
        <p className="text-capitalize">
          <span className="fw-medium">Activity </span>:{activity}
        </p>
        <p className="text-capitalize">
          <span className="fw-medium">Location </span>:{location}
        </p>
        <div className="layer"></div>
        {imagesArr !== undefined && (
          <div className="d-flex ps-4 product-imgWraper mb-3 justify-content-between">
            {imagesArr.map((item, index) => {
              return (
                <img
                  className="product-img"
                  key={index}
                  src={item}
                  alt={`img${index + 1}`}
                ></img>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
};

export default TimeLineListItem;
