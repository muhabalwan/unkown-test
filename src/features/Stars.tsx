import { List, Divider } from "antd";
import React from "react";
import { IStar, IUniverse } from "../api";

function Stars(props: { stars: IStar[], universes: IUniverse[]}): JSX.Element {
  const { stars, universes } = props;
   const data = stars?.map(star => {
     return {
      name: star.name,
      color: star.color,
      universeName: universes?.map((uni) => {
        if (uni.id === star.universeId) {
          return uni.name;
        }
      })
     };
   });

    return (
    <List
    header={<Divider />}
    footer={<Divider />}
    bordered
    dataSource={data}
    renderItem={item => {
      return (
      <List.Item style={{color: item.color}}>
        {`Universe Name: ${item.universeName}, Name: ${item.name}, Color: ${item.color}. `}
      </List.Item>
    );}}
    />);
  }

export default Stars;