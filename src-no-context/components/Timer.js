import { useEffect } from 'react';

function Timer({ dispatch, timer }) {
  const min = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(function () {
    const id = setInterval(function () {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => {
      return clearInterval(id);
    };
  }, []);

  return (
    <div className='timer'>
      {min < 10 && '0'}
      {min}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
