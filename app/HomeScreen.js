import React, {Component} from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer as UIKittenDrawer, Layout, Text } from '@ui-kitten/components';
import ActionBar from 'react-native-action-bar';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

const Drawer = createDrawerNavigator();

const ActionBarLayout = ({ navigation }) => {
  const openDrawer = ()=>{
    console.log(navigation);
    navigation.openDrawer();
  };

  return(
    <ActionBar
      containerStyle={styles.bar}
      title={'React-native-action-bar Example'}
      leftIconName={'menu'}
      onLeftPress={openDrawer}
      onTitlePress={() => console.log('Title!')}
      rightIcons={[
          {
              name: 'flag',
              onPress: () => console.log('Right Flag !'),
          },
      ]}
    />
  )
}

const UsersScreen = ({navigation}) => (
  <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    <ActionBarLayout navigation={navigation}/>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = ({navigation}) => (
  <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
    <ActionBarLayout navigation={navigation}/>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };
  const profileImage ='https://via.placeholder.com/150';

  return (
    <Layout style={{flex: 1, flexDirection: 'column', alignItems:"stretch", justifyContent:"flex-start"}}>
      <Layout style={styles.title}>
        <Image
          source={{ uri: profileImage }}
          style={styles.sideMenuProfileIcon}
        />
        <Layout style={styles.list}>
          <Text style={{fontWeight:'bold'}}>Saravanan</Text>
          <Text style={{fontSize:12}}>sharvanan7944@gmail.com</Text>
          <Text style={{fontSize:12, color: '#27ae60'}}>ID: #7944</Text>
        </Layout>
      </Layout>
      <Layout style={styles.navigation}>
        <UIKittenDrawer
          data={[{ title: 'Home' }, { title: 'Settings' }]}
          selectedIndex={state.index}
          onSelect={onSelect}
        />
      </Layout>
    </Layout>
  );
};

export const DrawerNavigator = ({props}) => {
  
  return(
    <>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name='Users' component={UsersScreen}/>
        <Drawer.Screen name='Orders' component={OrdersScreen}/>
      </Drawer.Navigator>
    </>
  );
};

export default class AppNavigator extends Component{
  render(){
    return(
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
  sideMenuProfileIcon: {
    resizeMode: 'stretch',
    width: 70,
    height: 70,
    borderRadius: 250 / 2,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  navigation:{
    flex: 9,
  },
  list: {
    flexDirection: 'column',
    margin: 10,
    height:60,
    justifyContent: "center"
  }
});