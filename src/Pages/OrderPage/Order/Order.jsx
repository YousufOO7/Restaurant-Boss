import { useState } from 'react';
import orderIng from '../../../assets/shop/banner2.jpg';
import ImgWithText from '../../Shared/ImgWithText/ImgWithText';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setLabIndex] = useState(initialIndex);
    const [menu = []] = useMenu();

    const desserts = Array.isArray(menu) ? menu.filter(item => item.category === 'dessert') : [];
    const soup = Array.isArray(menu) ? menu.filter(item => item.category === 'soup') : [];
    const salad = Array.isArray(menu) ? menu.filter(item => item.category === 'salad') : [];
    const pizza = Array.isArray(menu) ? menu.filter(item => item.category === 'pizza') : [];
    const drinks = Array.isArray(menu) ? menu.filter(item => item.category === 'drinks') : [];

    return (
        <div>
            <Helmet>
                <title>Boss | Order Food</title>
            </Helmet>
            <ImgWithText coverImg={orderIng} title={"Order now"}></ImgWithText>

            <div className="my-10 flex justify-center max-w-6xl mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setLabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
