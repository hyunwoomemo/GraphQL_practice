import { gql, useQuery } from "@apollo/client";
import { Title } from "../atoms/atom";
import { List } from "../molecules/molecules";
import { SidebarStyle } from "./organismsStyle";

export const Sidebar = () => {
  const GET_CATEGORIES = gql`
    query GetCategories {
      product {
        category
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  // 중복 제거를 위해 Set을 사용
  const uniqueCategoriesSet = new Set(data?.product.map((product) => product.category));

  // Set을 배열로 변환
  const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);
  console.log(uniqueCategoriesArray);

  return (
    <SidebarStyle>
      <Title size="medium" text="Product Manage" />
      <List title="Category" data={uniqueCategoriesArray} />
    </SidebarStyle>
  );
}