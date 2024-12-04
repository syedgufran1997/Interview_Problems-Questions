import { useState } from "react";
import MobileNumber from "./mobileNumber";
import OTP from "./otp";
import "./styles.css";
import WelcomePage from "./welcome";

export default function App() {
  const [showOtp, setShowOTP] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div className="">
      <MobileNumber showOtp={showOtp} setShowOTP={setShowOTP} />

      {showOtp && (
        <OTP showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
      )}

      {showWelcome && <WelcomePage />}
    </div>
  );
}
