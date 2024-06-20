"use client";
import React from "react";
import CountUp from "react-countup";

function Count({ end, delay }) {
  return <CountUp end={end} delay={delay} />;
}

export default Count;
