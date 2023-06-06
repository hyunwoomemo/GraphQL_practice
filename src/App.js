import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GlobalStyle } from './components/atoms/GlobalStyle';
import { RecoilRoot } from 'recoil';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // GraphQL 서버의 주소를 여기에 입력하세요
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>

        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
