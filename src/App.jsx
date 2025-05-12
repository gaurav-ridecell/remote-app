import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const createRequest = token => {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://starflightesam-dev.ridecell.io/api/v3/rentals?page=1&page_size=25&timestamp=1747041001132&in_progress=True&optimized=true&ordering=id&role=staff&service=1',
    true
  );

  xhr.setRequestHeader('accept', 'application/json');
  xhr.setRequestHeader(
    'accept-language',
    'en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7,fr;q=0.6,es;q=0.5,it;q=0.4,en-GB;q=0.3'
  );
  xhr.setRequestHeader('authorization', `JWT ${token}`);
  xhr.setRequestHeader('cache-control', 'no-cache');
  xhr.setRequestHeader('pragma', 'no-cache');
  xhr.setRequestHeader('priority', 'u=1, i');
  xhr.setRequestHeader(
    'sec-ch-ua',
    '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"'
  );
  xhr.setRequestHeader('sec-ch-ua-mobile', '?0');
  xhr.setRequestHeader('sec-ch-ua-platform', '"macOS"');
  xhr.setRequestHeader('sec-fetch-dest', 'empty');
  xhr.setRequestHeader('sec-fetch-mode', 'cors');
  xhr.setRequestHeader('sec-fetch-site', 'cross-site');
  xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status, xhr.responseText);
    }
  };

  xhr.send();
};

function App({ token }) {
  const [count, setCount] = useState(0);
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    setPokemonData(data);

    const res = createRequest(token);
    console.log('Response:', res);
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
