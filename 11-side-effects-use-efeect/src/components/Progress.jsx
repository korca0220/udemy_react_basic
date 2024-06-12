import { useEffect, useState } from "react";

export default function Progress({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("INTERVAL CLEARED");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
