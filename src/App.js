import { Amplify } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import ApiComponent from './ApiComponent';
Amplify.configure(awsExports);


// const revokeTokens = async () => {
//   try {
//     await Auth.signOut({ global: true });
//     console.log('Tokens revoked successfully');
//   } catch (error) {
//     console.error('Error revoking tokens:', error);
//   }
// };

const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    family_name: {
      order: 2,
    },
    preferred_username: {
      order: 4,
    },
    birthdate: {
      order: 3,
    },
    password: {
      order: 5,
    },
    confirm_password: {
      order: 6,
    },
  },
};

const signUpAttributes = ['birthdate', 'family_name', 'preferred_username'];

export default function App() {
  const [userAttributes, setUserAttributes] = useState({});
  
  useEffect(() => {
    // Fetch the current authenticated user's attributes
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUserAttributes(user.attributes);
      })
      .catch(error => {
        // Handle the error, e.g., if the user is not authenticated
        console.error('Error fetching user info:', error);
      });
  }, []);



  
// --------------------------------------------------------------------------------------------------------------------------------------------------------
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const session = await Auth.currentSession();
        const idToken = session.getRefreshToken().getToken();
        console.log('refresh tokenn:', idToken);
        setToken(idToken); // Set the token in the state
      } catch (error) {
        console.error('Error fetching ID token:', error);
        setError('Error fetching ID token');
      }
    };

    fetchToken();
  }, []);


// -----------------------------------------------------------------------------------------------------------------------------------

  const handleSignout = async () => {
    try {
        // Replace 'YOUR_LAMBDA_ENDPOINT' with the actual endpoint of your Lambda function
        const lambdaEndpoint = 'https://x62sz6rzd7ex5k72eqtxsz7fzu0kimic.lambda-url.ap-south-1.on.aws/';
        const response = await fetch(lambdaEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Pass the JWT token to be revoked
                token: token,
            }),
        });

        if (response.ok) {
            // Handle successful response (e.g., show a success message)
            console.log('Token revoked successfully');
        } else {
            // Handle error response (e.g., show an error message)
            console.error('Failed to revoke token');
        }
    } catch (error) {
        console.error('Error during signout:', error);
    }
  }



  // -----------------------------------------------------------------------------------------------------------------------------------------
  const [responseMessage, setResponseMessage] = useState(null);

  const revokeToken = async () => {
    const apiUrl = 'https://shail.auth.ap-south-1.amazoncognito.com/oauth2/revoke';
    const clientId = '4fietljor59c3kl3gep6bqr6c6';  // Replace with your actual client ID
    const token = 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.B-DXrzm2cyMhW7hUmvIIZb6vyJs195vq7JbvabaQ2yryLS4xgRs4dJLHSzVzojOPX2vR7JkoAfzLLJNrmOZgFmSNlsUWJI9VP4fnrB02s4Hr399v-ZTh01jBeqZL89Q7Cot_3RyKKtCUzK3s6YL-oUT5dbwnOEc-FGXsxFEW8JuOwbk1BKmc_KgZJIz4l0JBmmD87Cj8ImVtFwzk7-y81bHqXXjAvGUkVDmK5WQ0xJaj2pIo7CqCeu2CKGdW66DhDyUD33iEW9glG1GHhBXwhbBsrcbJpmuHLsgEqPrVoc_LiFWFkH1_is_hAO_RbjtzKTI0PtS2LT2uWjkD8_3OLw.klCsf74RINfWj-V1.52xwuCURW1sxjMXvI_ZKIG0HWsEEurKY-JIW8L4q1sj1Npz-OIPtRTCuH9xUgjOyzdqTit1PyDP7j3KCcU-8-18elSM_os7f7AZRhnIuRu6iLZgyfIVfG_sF83rCS5rkCuBwPQsKpOwpNld8Ud2Mw-AZ99rxJKncFLbcpGG4HPWnAmD11gip9dOBR3tsjXc5Vf0mBemBJkZeHWhVDWjEJEHv11Ni634LPJDjCznXtutICGiP5mJLFpUpjRiLfNC0-1jjBcGmiwTJK5a_KMaCOOPBohIZhfk9no3AUH1ym4XABpnlINtTA0L2RQyA1B6cdsRiCPFNFlXdbHg4qQ7H8_D8MIHo7onQ4VYGZrRJC7X7mQTdi35p2SiYaV1TcWtPQ5nCm4iN-OzWxptcmL5lwkNptvaO4O7livPkGVR3EQ1U6kH1Ah71TS-ZK2Fwd1z5kGFKja-BFqVOsfnMoDtB8jRIxYAZNQtOu7GNU9dNbcV-iXteM5J8lqhrkMbJfGp6P0R4khf1cBqOM9pyaFuSccXbwYRVGme_dLA8QOTNIv7s35Ux1XnzzQglcXjR4a2PCC0Q7BueBm9SgWfKMfWg1GaEfK9fDLA4GfSlDFxwsVflhpjDN-IlmVruv5-4MxdxjgQpe_OXs9RnkNq_gO00dixHCSYpx6bRQL_lj-5jHwFR16qUaYoM32e-iYGNJRM36jI-bn-ut74Zkfv3Kh6PF3HLE7-eub8Z648IyioSq4gimSpRcju6URwIFZd5FEOoC79e1gsgTq0jVgqWJurOxQnQ0PBoI4RBYzr2SSmNd6nrqcZLQ8btqfWJRgdUKbLSRytDWs7xxv8LVwdLwquKG1ENvzasQvnnu030j8AzOBoHDbox45BKb7aNDR70OTOB2rkMWP0f-kYN-OC6gpoDe_IjRZtlqTrpKgH5JZGqquGAtn-8T3SURMnD8G1SsVXZWfR_KK0ZkgYbqweQQW-FEqQT7fdBV2pRZ0RE_h-tk9sl1zpunnu1plOr0c0-lF1JYcFuQehr6ksw7mdc0IC7ri3dmq2WLAyIVc92hREFwsIXz4WUhR2mUUPi9fC_R2JlfI7-CN5_U1teSfypfx9LWTrxqgSS-sLdCJLJYs6jHvD8K6tzAF7LBgGi0po51ukAt8bd16gfHaeWiOdYCIlB213BKZPBEWB9DRp4ueYFYSW1wDS_ZmrVl-2xrdC75Pv359wP82qi0lVxah8_YX4DwWilXRVvbedbcv9_0qAOKO9zKDLr_Apq0H_B7zB1HqcSBw6xN7MZYeR3uuBbpa-7oOy79cAIK8cL3wXeox7I6ZH4lWwXq7IODzjRY_dBlKw.P977a07pDloaPt3p0h30Tg';  // Replace with your actual token

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          token,
          client_id: clientId,
        }).toString(),
      });

      console.log(response)

      if (response.ok) {
        setResponseMessage('Token successfully revoked.');
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error revoking token: ${errorData.error_description || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error revoking token:', error);
      setResponseMessage('An unexpected error occurred.');
    }
  }
  // const ok = ()=>{
  //   revokeToken()
  //   signOut()
  // }
  
// --------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      
      <Authenticator formFields={formFields} signUpAttributes={signUpAttributes}>
     
        {({ signOut }) => (
          
          <>
          <ApiComponent/>
          <div>
            <p>Welcome, {userAttributes.preferred_username} {userAttributes.family_name} </p>
            <p>This Authentication is ready by AWS Cognito</p>
        </div>
            {/* <button onClick={signOut}>Sign out</button> */}
            <button onClick={() => {  signOut(); revokeToken();}}>Sign out</button>
          </>
        )}

      </Authenticator>


     
    </>
  );
}