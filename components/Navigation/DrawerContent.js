import * as React from "react";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper"
import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../components/context';

const DrawerContent = ({ navigation, props }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: ''
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}></Title>
                <Caption style={styles.caption}></Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-export-outline" size={size} color={color} />
              )}
              label="Home"
              onPress={() => { navigation.navigate("Home Services") }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="face-outline" size={size} color={color} />
              )}
              label="Profile"
              onPress={() => { navigation.navigate("Profile") }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="information-circle-outline" size={size} color={color} />
              )}
              label="About Us"
              onPress={() => { navigation.navigate('AboutUs') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="email-minus-outline" size={size} color={color} />)}
              label="Contact Us"
              onPress={() => { navigation.navigate('ContactUs') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="home-repair-service" size={size} color={color} />
              )}
              label="SignUp As a Worker"
              onPress={() => { navigation.navigate('WorkersJoin') }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
