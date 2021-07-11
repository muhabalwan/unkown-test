import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "./features/Home";
import Imprint from "./features/Imprint";
import Stars from "./features/Stars";
import Universes from "./features/Universes";
import { Menu } from "antd";
import { capitalizeFirstLetter } from "./utils";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
const { Header } = Layout;

export interface MenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}


interface IMenuItems {
    [key: string]: {
        component: JSX.Element
    }
}

const menuItems: IMenuItems = {
    home: {
        component: <Home />
    },
    universes: {
        component: <Content> <Universes /> </Content>
    },
    stars: {
        component: <Stars />,
    },
    imprint: {
        component: <Imprint />
    }
};

const App = (): React.ReactElement => {
    const [current, setCurrent] = useState("home");

    const handleClick = (e: MenuInfo): void => {
        setCurrent(e.key);
      };

    return (
        <Layout className="layout">
            <Router>
                <div>
                    <Header>
                        <div className="logo" />
                        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                            {
                                Object.keys(menuItems).map(item => {
                                    return (
                                        <Menu.Item key={item}>
                                            <Link to={item === "home" ? "/" : item}>{capitalizeFirstLetter(item)}</Link>
                                        </Menu.Item>);
                                })
                            }
                        </Menu>
                    </Header>

                    <Switch>
                        {
                        Object.keys(menuItems).map(item => {
                            return (
                                <Route path={`/${item === "home" ? "/" : item}`} key={item}>
                                    <>
                                    <Content style={{ padding: "0 50px" }}>
                                        { menuItems[item].component }
                                    </Content>
                                    <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                                    </>
                                </Route>
                            );
                        })
                    }
                    </Switch>
                </div>
            </Router>
        </Layout>
        );
};

export default App;