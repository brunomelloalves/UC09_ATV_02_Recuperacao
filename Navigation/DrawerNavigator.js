import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/Screens/Home';
import Promocoes from '../src/Screens/Promocoes';
import Categorias from '../src/Screens/Categorias';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Promoções" component={Promocoes} />
      <Drawer.Screen name="Categorias" component={Categorias} />



    </Drawer.Navigator>
  );
};
export default DrawerNavigator;