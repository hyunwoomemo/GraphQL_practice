import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import TableRow from "../molecules/TableRow";
import TableHeader from "../atoms/TableHeader";
import TableCell from "../atoms/TableCell";
import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { majorCategoryState, middleCategoryState } from "../../recoil/atoms/category";

const Table = () => {
  const GET_PRODUCTS = gql`
    query GetProducts($first: Int!, $majorCategory: String, $middleCategory: String) {
      product(first: $first, majorCategory: $majorCategory, middleCategory: $middleCategory) {
        id
        name
        brand
        salesQuantity
        majorCategory
        middleCategory
        division
        os
        model
      }
    }
  `;

  const [majorCategory] = useRecoilState(majorCategoryState);
  const [middleCategory] = useRecoilState(middleCategoryState);

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      first: 20, // 가져올 데이터 수를 설정하세요
      majorCategory: majorCategory,
      middleCategory: middleCategory,
    },
  });

  const objectKeys = ["id", "Product Name", "Brand", "Sales Quantity", "Major Category", "SubCategory", "Classification", "OS", "Model"];

  return (
    <Container>
      <Base>
        <thead>
          <TableRow>
            {objectKeys?.map((v) => {
              return <TableHeader>{v}</TableHeader>;
            })}
          </TableRow>
        </thead>
        <tbody>
          {data?.product?.map((item) => {
            return (
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.salesQuantity}</TableCell>
                <TableCell>{item.majorCategory}</TableCell>
                <TableCell>{item.middleCategory}</TableCell>
                <TableCell>{item.division}</TableCell>
                <TableCell>{item.os}</TableCell>
                <TableCell>{item.model}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Base>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  max-height: 80vh;
  overflow: auto;
  border: 1px solid #e7e7e7;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Base = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;
