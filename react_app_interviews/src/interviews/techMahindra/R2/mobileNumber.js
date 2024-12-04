import React, { useState, useRef } from "react";

const MobileNumber = ({ showOtp, setShowOTP }) => {
  const [number, setNumber] = useState("");
  const numberInput = useRef();

  const handleNumberChange = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (number && number.length) {
      setShowOTP(true);
    }

    console.log("value", numberInput.current.value);
  };

  return (
    <>
      <div>
        <label>Mobile Number</label>
        <input
          ref={numberInput}
          type="number"
          placeholder="Enter Mobiel Number"
          value={number}
          onChange={handleNumberChange}
          disabled={showOtp}
        />

        {showOtp ? (
          ""
        ) : (
          <button type="button" onClick={handleSubmit}>
            {" "}
            Send OTP
          </button>
        )}
      </div>
    </>
  );
};

export default MobileNumber;
