import { useRef, useEffect } from 'react'

function usePlayer() {
  const ref = useRef(null);

  useEffect(() => {
    ref?.current?.play()
  }, []);

  return { ref }
}

export default usePlayer;