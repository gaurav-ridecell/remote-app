import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App({ token }) {
  const [count, setCount] = useState(0);
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    setPokemonData(data);

    const res = await fetch(
      'https://starflightesam-dev.ridecell.io/api/v3/rentals?page=1&page_size=25&timestamp=1747039029548&in_progress=True&optimized=true&ordering=id&role=staff',
      {
        headers: {
          accept: 'application/json',
          authorization: `JWT ${token}`,
        },
        credentials: 'include',
      }
    );

    const json = await res.json();
    console.log('Response:', json);
  };

  return (
    <>
      <div>
        <h1>Remote APP</h1>

        {/* Fetch data and display : https://pokeapi.co/api/v2/pokemon/ditto */}
        <h2>Pokemon</h2>
        <p>Click the button to fetch data</p>
        <button className='ra-button' onClick={fetchPokemonData}>
          Fetch Pokemon
        </button>
        {pokemonData && (
          <table
            border='1'
            style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Base Experience</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pokemonData.name}</td>
                <td>{pokemonData.base_experience}</td>
                <td>{pokemonData.height}</td>
                <td>{pokemonData.weight}</td>
              </tr>
            </tbody>
          </table>
        )}
        <p>Check the console for the response</p>
        <a className='ra-a' href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a className='ra-a' href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          className='ra-button'
          onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
