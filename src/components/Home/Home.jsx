// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h4>This is a header</h4>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;