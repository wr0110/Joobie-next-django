import { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'http://127.0.0.1:8000/contract/contract-create/';

const PostRequest = () => {

  const [message, setMessage] = useState('');
  const [owner, setOwner] = useState('');
  const [auth, setAuth] = useState(false);
  let content;

  useEffect(() => {
      (
          async () => {
              try {
                  const response = await fetch('http://localhost:8000/api/user', { credentials: 'include'});

                  let content = await response.json();

                  setMessage(`Hi ${content.id}`);
                  setOwner(content.id)
                  setAuth(true);
              } catch (e) {
                  setMessage('You are not logged in');
                  setAuth(false);
              }
          }
      )();
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true
    let body = {
        name: name,
        symbol: "POKER",
        network: "goerli",
        royalty_rate: "7.55",
        second_mint_price: "0.0132",
        supply: 2000,
        whitelist: true,
        owner: owner,
    }
    //Call to Register API
    const config = { 
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post('http://127.0.0.1:8000/contract/contract-create/', body, config).then(response => {
      console.log(response)
    })

  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <p>{message}</p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};


export default PostRequest;