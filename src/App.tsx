import { useState, useEffect } from 'react'
import './App.css'
import data from './data'
import Loading from './Loading'
import Tours from './Tours'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(data);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setTours(data);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2> no tours left </h2>
          <button className="btn" style = {{ marginTop: '2rem' }} onClick={() => fetchTours()}> refresh </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App