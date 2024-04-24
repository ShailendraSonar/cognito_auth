
// // ApiComponent.js
// import React, { useState, useEffect } from 'react';
// import { Auth } from 'aws-amplify';
// import axios from 'axios'; // Use this line if you've installed Axios

// const ApiComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Define your API endpoint
//     const apiUrl = 'https://udp5o1loel.execute-api.ap-south-1.amazonaws.com/neapi/apis';

//     // Define your token (replace 'YOUR_TOKEN' with the actual token value)
//     // const token = 'eyJraWQiOiJ0RGdiXC9hZzkyUUhLanJycTh1ak16V3RoUGp6UDZcL2JjemQ1SHFRbjRDQkE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkNjMwZDgxYy1lNzBmLTQ3MWQtODllZC1iYTkwY2M3YjUxN2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9sQzgzWENWenQiLCJjb2duaXRvOnVzZXJuYW1lIjoiZDYzMGQ4MWMtZTcwZi00NzFkLTg5ZWQtYmE5MGNjN2I1MTdjIiwib3JpZ2luX2p0aSI6IjI5YjE1NDMzLTlkOWYtNDIwMi1hODQ0LTU5ZTQzMjdkNTFjNSIsImF1ZCI6IjRmaWV0bGpvcjU5YzNrbDNnZXA2YnFyNmM2IiwiZXZlbnRfaWQiOiIxOGI2NDFhNy1lNDVlLTQ4ZTktODE0Ni1hZDQ2OWY4NGViNjciLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcwNTkxODExNSwiZXhwIjoxNzA1OTIxNzE0LCJpYXQiOjE3MDU5MTgxMTUsImp0aSI6ImM5NmFiOGZiLTA1OGItNGMyMC04Y2UyLWQ5MjJkYjU5YmQyMSIsImVtYWlsIjoic3NvbmFyNjFAZ21haWwuY29tIn0.nKta0ltKyLBJHqqKnln-C4gLSBRZuTg-TYCU2CycJ87Wx27WceNLhR3sqFcBETU-2-FiTU925G-jAt5VVy-HZR54KGNA3wJzFjH-DzhqhRK0_MnN_nEZG9joM4Be2mn_rlDM0TWsNWhX0cb4gzRR2v39S4fAbvsUrZF2VsKcViehswnG7QCOa4Cd2H5M5ckV7gonTmk5jrbQau9fIdtSDXg3QmujvmKB04BPSct61t9Pgrd5xMNjPZZlSLQsdMfgwWujmJGkNKKkZBa-VsP3nL2zUCe4rfkAP1FQ8SBFqoTlOicfoEJ6nnTvzOc3v9DAov6vCCalUwNCYzLAKeq9Jg';

//     // const getToken = () => {
//     //     // Implement your logic to retrieve the token from the session, localStorage, or wherever it is stored
//     //     // For example, if it's stored in localStorage:
//     //     return localStorage.getItem('CognitoIdentityServiceProvider.4fietljor59c3kl3gep6bqr6c6.d630d81c-e70f-471d-89ed-ba90cc7b517c.accessToken');
//     //   };
      

//     //   const token = getToken();
//     useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const session = await Auth.currentSession();
//         const idToken = session.getIdToken().getJwtToken();
//         console.log('ID Token:', idToken);
//       } catch (error) {
//         console.error('Error fetching ID token:', error);
//       }
//     };

//     fetchToken();
//   }, []);
  
//       console.log(token)
//       console.log('Authorization Header:', `Bearer ${token}`);
//     // Use fetch or Axios to make the API request with the token in the headers
//     axios.get(apiUrl, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
      
//     })

//       .then(response => {
//         setData(response.data); // Assuming your data is in the response body
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []); // The empty dependency array means this effect will run once on component mount

//   return (
//     <div>
//       {loading ? (
//         // Show a loading indicator
//         <p>Loading...</p>
//       ) : error ? (
//         // Show an error message
//         <p>{error}</p>
//       ) : (
//         // Render your data here
//         <p>{data}</p>
//       )}
//     </div>
//   );
// };

// export default ApiComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ApiComponent = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiUrl = 'https://udp5o1loel.execute-api.ap-south-1.amazonaws.com/neapi/apis';
//     const token = "eyJraWQiOiJ0RGdiXC9hZzkyUUhLanJycTh1ak16V3RoUGp6UDZcL2JjemQ1SHFRbjRDQkE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJkNjMwZDgxYy1lNzBmLTQ3MWQtODllZC1iYTkwY2M3YjUxN2MiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9sQzgzWENWenQiLCJjb2duaXRvOnVzZXJuYW1lIjoiZDYzMGQ4MWMtZTcwZi00NzFkLTg5ZWQtYmE5MGNjN2I1MTdjIiwib3JpZ2luX2p0aSI6IjEyN2FhMzUxLWMwZTUtNDYyNy1iOTk5LTFmY2Y3NTBhNDdlMSIsImF1ZCI6IjRmaWV0bGpvcjU5YzNrbDNnZXA2YnFyNmM2IiwiZXZlbnRfaWQiOiIzMjhiYjQ3OS04M2VkLTQ3MjEtYmU1OC0xNGU0YzliNzAyYzIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcwNTkyMjA4MSwiZXhwIjoxNzA1OTI1NjgxLCJpYXQiOjE3MDU5MjIwODEsImp0aSI6ImE4ZWEzMjk3LTQ5MGUtNDI2MS1iYTZlLTE4ZTliZGQxZDAwYiIsImVtYWlsIjoic3NvbmFyNjFAZ21haWwuY29tIn0.v2fs4Z-B2nerwp5B1gtg97Ab2gHfFTsdOUT5HRockCSg3m-x9PNrisy5hY-LI44m2I7hK98RRcBayZotbr029VFa45XhPejNlBdqNCbZrdUXlsY8K84EjHUu8usLHr6vFhFhU2DPhceFsQrVeOt1_HCVjzkA6WMoyKnw5-uJLGvWjqb3ojt-QdtsZp9uNUPd4wmuImSpRnGiRXg2U64GwVIi5_mh5NCVgL7Q8f2TcXgfQXu-HTVlARpa2HTKGePs2a6kWQF5NJRd0XBzj1kY8VDoSDyIW2dAK2ZexIFvuq96qZ_sRb5VB8muV9Aw6Rhbpjr4_NvqPnmsLJ6hhqOf_A"
//     ;
//     // Set up your authentication credentials (replace 'yourToken' with the actual token)
//     const headers = {
//       Authorization: `Bearer ${token}` };

//     axios.get(apiUrl, { headers })
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please check your authentication credentials.');
//       });
//   }, []); // The empty dependency array means this effect will run once on component mount

//   return (
//     <div>
//       {data ? (
//         // Render your data here
//         <p>{data}</p>
//       ) : (
//         // Show a loading indicator or an error message
//         <p>{error || 'Loading...'}</p>
//       )}
//     </div>
//   );
// };

// export default ApiComponent;



// Sample code for obtaining a token using Amazon Cognito SDK
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Auth } from 'aws-amplify'; 

// const ApiComponent = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Function to get the authentication token
//     const getAuthToken = async () => {
//       try {
//         const user = await Auth.currentAuthenticatedUser();
//         const token = user.signInUserSession.idToken.jwtToken;
//         return token;
//       } catch (error) {
//         console.error('Error fetching authentication token:', error);
//         throw error;
//       }
//     };

//     const fetchData = async () => {
//       try {
//         const token = await getAuthToken();
//         const apiUrl = 'https://udp5o1loel.execute-api.ap-south-1.amazonaws.com/neapi/apis';
//         const headers = { Authorization: `Bearer ${token}` };

//         const response = await axios.get(apiUrl, { headers });
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please check your authentication credentials.');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         // Render your data here
//         <p>{JSON.stringify(data)}</p>
//       ) : (
//         // Show a loading indicator or an error message
//         <p>{error || 'Loading...'}</p>
//       )}
//     </div>
//   );
// };

// export default ApiComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ApiComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiUrl = 'https://udp5o1loel.execute-api.ap-south-1.amazonaws.com/neapi/apis';

//     const getToken = () => {
//       return localStorage.getItem('CognitoIdentityServiceProvider.4fietljor59c3kl3gep6bqr6c6.d630d81c-e70f-471d-89ed-ba90cc7b517c.idToken');
//     };

//     const token = getToken();

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);

//         // Check for specific error conditions and set a more informative error message
//         if (error.response && error.response.status === 401) {
//           setError('Unauthorized - Token may have expired');
//         } else {
//           setError('Error fetching data');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <p>{data}</p>
//       )}
//     </div>
//   );
// };

// export default ApiComponent;


import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null); // Added state for token

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        console.log('ID Token:', idToken);
        setToken(idToken); // Set the token in the state
      } catch (error) {
        console.error('Error fetching ID token:', error);
        setError('Error fetching ID token');
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    // Make sure to check if the token is available before making the API request
    if (token) {
      const apiUrl = 'https://udp5o1loel.execute-api.ap-south-1.amazonaws.com/neapi/apis';

      axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          setData(response.data); // Assuming your data is in the response body
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Error fetching data');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token]); // Include token in the dependency array

  return (
    <div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <p>{data.message}</p>
    )}
  </div>
  );
};

export default ApiComponent;
