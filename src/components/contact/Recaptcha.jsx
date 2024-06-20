// components/Recaptcha.js

import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Recaptcha({ onVerify }) {
  const recaptchaRef = useRef();

  const handleChange = (value) => {
    onVerify(value);
  };

  return (
    <ReCAPTCHA
      sitekey={process.env.RECAPTCHA_SITE_KEY}
      onChange={handleChange}
      ref={recaptchaRef}
    />
  );
}
