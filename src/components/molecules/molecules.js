import { Box, Tag, Title } from "../atoms/atom"
import { ListStyle } from "./moleculesStyle"

export const List = ({ title, data }) => {
  return (
    <ListStyle>
      {title && <Title text={title} />}
      <div className="list_wrapper">
        {data && data.map((d) => {
          return (
            <Tag text={d} />
          )
        })}
      </div>
    </ListStyle>
  )
}