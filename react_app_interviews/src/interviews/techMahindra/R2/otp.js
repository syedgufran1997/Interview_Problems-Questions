import React, { useState } from "react";

const OTP = ({ showWelcome, setShowWelcome }) => {
  const [otp, setOTP] = useState("");

  const handleClick = () => {
    if (otp && otp.length) {
      setShowWelcome(true);
    }
  };

  return (
    <div>
      {!showWelcome ? (
        <>
          <label>OTP </label>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button type="button" onClick={handleClick}>
            Verify OTP
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default OTP;
