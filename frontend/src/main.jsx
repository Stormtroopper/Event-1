import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import client from './apolloClient/client.js'
import { ApolloProvider } from '@apollo/client/react'
createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
