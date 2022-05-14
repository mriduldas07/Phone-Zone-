import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageLinkButton from '../../ManageLinkButton/ManageLinkButton';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import InformationSection from '../InformationSection/InformationSection';
import LodingCompo from '../LodingCompo/LodingCompo';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    const [loading] = useAuthState(auth);
  if (loading) {
    <LodingCompo></LodingCompo>
  }
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