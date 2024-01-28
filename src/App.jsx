import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { gsap, Power4 } from 'gsap';

function App() {
  const [count, setCount] = useState(0);
  let tl = gsap.timeline();
  let logoItem = useRef(null);
  let logoItem1 = useRef(null);
  let txt = useRef(null);
  let btn = useRef(null);
  let edit = useRef(null);
  let click = useRef(null);

  useEffect(() => {
    tl.to(logoItem, 0.8, { opacity: 1, y: -30, ease: Power4.easeInOut });
    tl.to(logoItem1, 0.8, { opacity: 1, y: -30, ease: Power4.easeInOut });
    tl.to(txt, 0.8, { opacity: 1, y: -30, ease: Power4.easeInOut });
    tl.to(btn, 0.8, { opacity: 1, y: -30, ease: Power4.easeInOut });
    tl.to(edit, 0.8, { opacity: 1, y: -30, ease: Power4.easeInOut });
    tl.to(click, 0.8, { opacity: 1, y: -30, ease: Power4.easeInOut });

    // Reload the page after the animations are completed
    tl.eventCallback('onComplete', () => {
      window.location.reload();
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img ref={(el) => (logoItem = el)} src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img ref={(el) => (logoItem1 = el)} src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 ref={(el) => (txt = el)}>Vite + React</h1>
      <div className="card">
        <button ref={(el) => (btn = el)} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p ref={(el) => (edit = el)}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" ref={(el) => (click = el)}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;3