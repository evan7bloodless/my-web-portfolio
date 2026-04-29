import { useState, useEffect } from 'react'

export const RealTimeClock = ({ timeZone = 'Europe/Kyiv' }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleString('ru-RU', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (formattedTime);
};