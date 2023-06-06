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
    id: Int
    majorCategory: String
    middleCategory: String
    name: String
    division: String
    os: String
    model: String
    brand: String
    salesQuantity: Int
  }

  type Query {
    allProduct: [Product]
    product(first: Int, majorCategory: String, middleCategory: String): [Product]
    productsByMiddleCategory(majorCategory: String): [Product]
  }
`;


// 리졸버 함수 작성
const resolvers = {
  Query: {
    allProduct: () => {
      const products = jsonData;
      return products;
    },
    product: (_, { first, majorCategory, middleCategory }) => {
      let products = jsonData.slice(0, first);
      if (majorCategory !== 'all' && middleCategory !== 'all') {
        products = jsonData.filter((product) => product.majorCategory === majorCategory && product.middleCategory === middleCategory).slice(0, first)
      } else if (majorCategory !== 'all') {
        products = jsonData.filter((product) => product.majorCategory === majorCategory).slice(0, first)
      } else if (middleCategory !== 'all') {
        products = jsonData.filter((product) => product.middleCategory === middleCategory).slice(0, first)
      }

      return products;
    },

    productsByMiddleCategory: (_, { majorCategory }) => {
      const products = majorCategory === 'all' ? jsonData : jsonData.filter((product) => product.majorCategory === majorCategory)
      return products
    }

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