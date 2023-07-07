import React, { useRef, useState } from "react";
import StarRating from "../StarRating";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";

const Feedback = () => {
  const messageRef = useRef();
  const [selectedStars, setSelectedStars] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (messageRef.current.value === "" || selectedStars === 0) {
      console.log("Please fill both values.");
      return;
    }
    console.log(`Remarks: ${messageRef.current.value}`);
    console.log(
      `Rating: ${
        selectedStars === 1 ? selectedStars + " star" : selectedStars + " stars"
      } `
    );

    // Reset values after submit
    messageRef.current.value = "";
    setSelectedStars(0);
  };

  return (
    <Card className="bg-white mt-5 rounded-1 border-primary">
      <h6 className="m-0 mb-6 fw-medium">How was your Delivery Experience?</h6>
      <div className="text-center">
        <StarRating
          selectedStars={selectedStars}
          setSelectedStars={setSelectedStars}
          totalStars={5}
        />
      </div>
      <form className="mt-3" onSubmit={onSubmitHandler}>
        <Textarea
          className="d-block p-3 rounded-2 fs-6 mb-3 w-100 bg-secondary border-0"
          ref={messageRef}
          attr={{
            placeholder: "Please enter your remarks (Max 250 characters)",
            rows: "4",
            cols: "50",
          }}
        />
        <div className="text-end">
          <Button
            className="text-uppercase border-0 rounded-1 fs-6 submit-btn btn-warning text-white"
            attr={{
              type: "submit",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Feedback;
