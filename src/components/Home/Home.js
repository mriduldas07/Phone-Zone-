import React from 'react';
import ManageLinkButton from '../../ManageLinkButton/ManageLinkButton';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import InformationSection from '../InformationSection/InformationSection';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ManageLinkButton></ManageLinkButton>
            <DiscoverSection></DiscoverSection>
            <InformationSection></InformationSection>
        </div>
    );
};

export default Home;