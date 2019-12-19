import React from 'react';
import './menustyle.css';
import { Layout,Header, Navigation,Drawer,Content } from 'react-mdl';
import{Link}from 'react-router-dom';
/* import { Router } from 'express'; */

const menu =() => {
    return(
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="Contact">Contact</Link>
                <Link to="Resume">Resume</Link>
                <Link to="project">project</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="About">About</a>
                <a href="Resume">Resume</a>
                <a href="project">project</a>
                <a href="Contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    )

}

  
  
export default menu;
