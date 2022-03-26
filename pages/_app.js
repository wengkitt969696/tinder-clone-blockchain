import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://zdlxjrcpdpbk.usemoralis.com:2053/server'
      appId='dLnWLFCmu1pj7l5cQAbR5IXrX7C6A9hMMztZSeqr'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp