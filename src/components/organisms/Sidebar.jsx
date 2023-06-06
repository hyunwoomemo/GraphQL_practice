import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Title } from "../atoms/Title";
import { List } from "../molecules/List";
import { useRecoilState } from "recoil";
import { majorCategoryState, middleCategoryState } from "../../recoil/atoms/category";
import { useEffect } from "react";

export const Sidebar = () => {
  const GET_CATEGORIES = gql`
    query GetCategories {
      allProduct {
        majorCategory
      }
    }
  `;

  const GET_MIDDLLECATEGORY = gql`
    query GetMiddleCategories($majorCategory: String) {
      productsByMiddleCategory(majorCategory: $majorCategory) {
        majorCategory
        middleCategory
      }
    }
  `;

  const GET_BRANDNAME = gql`
    query GetBrandName {
      allProduct {
        brand
      }
    }
  `;

  // major category state
  const [majorCategory, setMajorCategory] = useRecoilState(majorCategoryState);
  const [middleCategory, setmiddleCategory] = useRecoilState(middleCategoryState);

  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const {
    loading: middleLoading,
    error: middleError,
    data: middleData,
  } = useQuery(GET_MIDDLLECATEGORY, {
    variables: {
      majorCategory: majorCategory,
    },
  });

  console.log(middleData);

  const { data: brandData } = useQuery(GET_BRANDNAME);

  // 중복 제거를 위해 Set을 사용
  const uniqueCategoriesSet = new Set(data?.allProduct.map((product) => product.majorCategory));
  const uniqueMiddleCategoriesSet = new Set(middleData?.productsByMiddleCategory.map((product) => product.middleCategory));
  const uniqueBrandName = new Set(brandData?.allProduct.map((product) => product.brand));

  // Set을 배열로 변환
  const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);
  const uniqueMiddleCategoriesArray = Array.from(uniqueMiddleCategoriesSet);
  const uniqueBrandNameArray = Array.from(uniqueBrandName);

  useEffect(() => {
    console.log(middleCategory);
  }, [majorCategory, middleCategory]);
  return (
    <Base>
      <Title size="medium" text="Product Manage" />
      <List title="Major Category" data={uniqueCategoriesArray} all={true} event={setMajorCategory} />
      <List title="Middle Category" data={uniqueMiddleCategoriesArray} all={true} event={setmiddleCategory} />
      <List title="Brands" data={uniqueBrandNameArray} all={true} />
    </Base>
  );
};

const Base = styled.div`
  max-width: 300px;
  position: sticky;
  top: 0;
  bottom: 0;
  height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #f9f9f9;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
