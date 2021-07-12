import React, { useEffect, useState } from "react";
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
import { Layout, Row, Col  } from "antd";
import { Content, Footer} from "antd/lib/layout/layout";
import styled from "styled-components";
import LogoImg from "../src/images/1b767dabc8f64e86b41509e0a8961454.png";
import { getStars, getUniverses, IStar, IUniverse } from "./api";

const StyledLogo = styled.div`
    height: 160px;
    background : url(${LogoImg}) no-repeat top left;
`;


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

const App = (): React.ReactElement => {
    const [current, setCurrent] = useState("home");
    const [starsData, setStars] = useState<IStar[]>();

    useEffect(() => {
      async function fetchData() {
        const getStarsResponse = await getStars();
        setStars(getStarsResponse);
      }
      fetchData();
    }, []);

    const [universesData, setUniverses] = useState<IUniverse[]>();

    useEffect(() => {
      async function fetchData() {
        const getStarsResponse = await getUniverses();
        setUniverses(getStarsResponse);
      }
      fetchData();
    }, []);


    const menuItems: IMenuItems = {
        home: {
            component: <Home />
        },
        universes: {
            component: <Universes universes={universesData} />,
        },
        stars: {
            component: <Stars stars={starsData}  universes={universesData} />,
        },
        imprint: {
            component: <Imprint />
        }
    };


    const handleClick = (e: MenuInfo): void => {
        setCurrent(e.key);
      };

    return (
        <Layout className="layout" style={{height: "100%"}}>
            <Router>
                <div>
                    <Header style={{background: "#f0f2f5", height: "auto"}}>
                        <Row>
                            <Col className="gutter-row" span={4} >
                                <StyledLogo />
                            </Col>
                            <Col className="gutter-row" span={8} style={{paddingTop: "40px"}}>
                                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{background: "#f0f2f5"}}>
                                    {
                                        Object.keys(menuItems).map(item => {
                                            return (
                                                <Menu.Item key={item}>
                                                    <Link to={item === "home" ? "/" : item}>{capitalizeFirstLetter(item)}</Link>
                                                </Menu.Item>);
                                        })
                                    }
                                </Menu>
                            </Col>
                        </Row>

                    </Header>
                    <Switch>
                        {
                        Object.keys(menuItems).map(item => {
                            return (
                                <Route path={`/${item === "home" ? "/" : item}`} key={item}>
                                    <>
                                    <Content style={{ padding: "0 50px", height: "100%" }}>
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