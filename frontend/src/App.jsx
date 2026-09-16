import { useState } from 'react'

function App() {
  const [message, setMessage] = useState("");

  async function getMessage() {
    const repsonse = await fetch("http://127.0.0.1:8000/api/hello/")
    const data = await repsonse.json();

    setMessage(data.message);
  }

  return (
    <div>
      <h1>Website</h1>

      <button onClick={getMessage}>
        Talk to Django
      </button>

      <p>{message}</p>
    </div>
  )
}

export default App
