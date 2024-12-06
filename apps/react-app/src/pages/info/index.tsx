import { useState } from 'react';

function InfoPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #eee', padding: '20px' }}>
      <h1>Vite + React</h1>
      <p>
        You can try Vite online on StackBlitz. It runs the Vite-based build
        setup directly in the browser, so it is almost identical to the local
        setup but doesn't require installing anything on your machine. You can
        navigate to vite.new to select which framework to use. The
        supported template presets are:
      </p>
      <div>
        <button
          style={{
            padding: '10px 20px',
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid transparent',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default InfoPage;
