import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../api/apolloClient'
import { AppProps } from 'next/app'
import '../theme/style.scss'
import { Layout } from '../components'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
