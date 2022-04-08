import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Tabs from './Components/Tabs';


export default function App() {
  return (
     <NavigationContainer>
        {/* <Login/> */}
        <Tabs/>
     </NavigationContainer>   

  );
}
