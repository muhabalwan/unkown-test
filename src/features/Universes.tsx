import React from "react";
import { List, Divider } from "antd";
import { IUniverse } from "../api";

function Universes(props: {universes: IUniverse[]}): JSX.Element {
    const universes = props.universes;
    console.log("universes ", universes );
    return (
      <List
      header={<Divider />}
      footer={<Divider />}
      bordered
      dataSource={universes}
      renderItem={item => (
        <List.Item>
          {`Name: ${item.name}, Max Size: ${item.maxSize}. `}
        </List.Item>
      )}
      />
      );
  }
export default Universes;