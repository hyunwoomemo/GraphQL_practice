import styled from "@emotion/styled";
import { Tag } from "../atoms/Tag";
import { Title } from "../atoms/Title";

export const List = ({ title, data, all = false, event = undefined }) => {
  return (
    <ListStyle>
      {title && <Title text={title} />}
      <div className="list_wrapper">
        {all && <Tag text="all" event={event}></Tag>}
        {data &&
          data.map((d) => {
            return <Tag text={d} event={event} />;
          })}
      </div>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  > div.list_wrapper {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 14px;
    padding: 1rem 0;
  }
`;
