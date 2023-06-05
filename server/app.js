const express = require('express')
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const app = express()
const port = 3030

// JSON 파일 읽기
const rawData = fs.readFileSync('./src/data.json');
const jsonData = JSON.parse(rawData);

// GraphQL 스키마 정의
const typeDefs = gql`
  type Product {
    category: String
    name: String
    division: String
    os: String
    model: String
    brand: String
    salesQuantity: Int
  }

  type Query {
    product(first: Int): [Product]
  }
`;


// 리졸버 함수 작성
const resolvers = {
  Query: {
    product: (_, { first }) => {
      const products = jsonData.slice(0, first)
      return products;
    },
  },
};

// Apollo Server 생성 및 실행
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})