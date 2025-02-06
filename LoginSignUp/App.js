// import React, { useState } from "react";
// import { Text, View, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();

// const App = () => {

//     return (<NavigationContainer>

//         <Stack.Navigator screenOptions={{headerShown : false}}>

//                 {/* <Stack.Screen name="Home" component={UI_Home} />
//                 <Stack.Screen name="Login" component={Login} />
//                 <Stack.Screen name="Signup" component={Signup} />
//                 <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//                 <Stack.Screen name="Tc" component={Tc} /> */}

//         </Stack.Navigator>
//     </NavigationContainer>

//     )
// }

// export default App;



//1. Basic Structure of a React Native App
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
});
