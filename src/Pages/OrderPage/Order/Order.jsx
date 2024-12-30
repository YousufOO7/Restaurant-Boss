import { useState } from 'react';
import orderIng from '../../../assets/shop/banner2.jpg'
import ImgWithText from '../../Shared/ImgWithText/ImgWithText';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setLabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(items => items.category === 'dessert')
    const soup = menu.filter(items => items.category === 'soup')
    const salad = menu.filter(items => items.category === 'salad')
    const pizza = menu.filter(items => items.category === 'pizza')
    const drinks = menu.filter(items => items.category === 'drinks')
    return (
        <div>
            <ImgWithText coverImg={orderIng} title={"Oder now"}></ImgWithText>

            <div className='my-10 flex justify-center max-w-6xl mx-auto'>
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