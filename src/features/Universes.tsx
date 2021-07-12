import React from "react";
import { List, Divider } from "antd";
import { IUniverse } from "../api";

function Universes(props: {universes: IUniverse[]}): JSX.Element {
    const universes = props.universes;
    return (
      <List
      className="universe-list"
      data-testid="universe-list"
      header={<Divider />}
      footer={<Divider />}
      bordered
      dataSource={universes}
      renderItem={item => (
        <List.Item className="universe-item" data-testid="universe-item">
          {`Name: ${item.name}, Max Size: ${item.maxSize}. `}
        </List.Item>
      )}
      />
      );
  }
export default Universes;