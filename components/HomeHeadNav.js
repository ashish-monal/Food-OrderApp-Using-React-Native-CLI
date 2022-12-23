import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../src/globals/style';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {authentication} from '../firebase';

export default function HomeHeadNav() {
  const navigation = useNavigation();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const SignOutUser = () => {
    signOut(authentication)
      .then(re => {
        setIsSignedIn(false);
        navigation.navigate('Welcome');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Icon name="menu" size={24} color="black" style={styles.myicon} />
      <View style={styles.containerIn}>
        <Text style={styles.mytext}>CHEF FOOD</Text>
        <Icon name="fastfood" size={30} color="black" style={styles.myicon} />
      </View>
      <TouchableOpacity onPress={SignOutUser}>
        <Icon name="account-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.col1,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerIn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myicon: {
    color: colors.text1,
  },
  mytext: {
    color: colors.text1,
    fontSize: 24,
  },
});
