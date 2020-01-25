// JavaScript source code
import React from 'react';
import './menustyle.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';

const Dashboard = () => {
    return (
        <div className="menustyle">
                <div style={{ height: '120px', position: 'relative' }}>
                    <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                        <Header transparent title="Power Control" style={{ color: 'white' }}>
                            <Navigation>
                                <a href="#">Dashboard</a>
                                <a href="#">Log History</a>
                                <a href="#">Profile</a>
                                <a href="#">Logout</a>
                            </Navigation>
                        </Header>
                        <Navigation>
                            <img src="./logo jpg" />
                        </Navigation>

                        <Content />
                    </Layout>
                </div>


            </div>

        )
    }

  
export default Dashboard;