import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

import './index.css';
import App from './App';
import { SessionProvider } from './contexts/SessionContext'
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';

const uri = 'http://localhost:3001/graphql'
const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache({
    addTypename: false
  }),
  credentials: 'include',
  link: createUploadLink({
    uri: uri,
    cache: new InMemoryCache({
      addTypename: false
    }),
    credentials: 'include',
  }),
})

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <SessionProvider>
            <App />
          </SessionProvider>
        </ApolloProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
