import React from 'react';
import axios from 'axios';

const baseUrl = 'http://hiring.rewardgateway.net';

const App = () => (
  <div>
    <h1>React Application</h1>
    <button
      onClick={() =>
        axios
          .get(`${baseUrl}/list`, {
            auth: {
              username: 'hard',
              password: 'hard'
            }
          })
          .then(response => {
            console.log(response.data);
          })
      }
    >
      Test request
    </button>
  </div>
);

export default App;
