import React from 'react';
import ManageLinkButton from '../../ManageLinkButton/ManageLinkButton';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ManageLinkButton></ManageLinkButton>
        </div>
    );
};

export default Home;