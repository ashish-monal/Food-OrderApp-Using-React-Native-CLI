import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../src/globals/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <Icon name="menu" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <Icon
            name="local_pizza"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <Icon
            name="romen_dining"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Noodles</Text>
        </View>
        <View style={styles.box}>
          <Icon name="coffee" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Coffee</Text>
        </View>
        <View style={styles.box}>
          <Icon name="local_cafe" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Tea</Text>
        </View>
        <View style={styles.box}>
          <Icon name="water_drop" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Water</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: colors.text3,
  },
  icon: {
    marginRight: 10,
    color: colors.text3,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  head: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: colors.col1,
    width: '90%',
    elevation: 10,
    borderRadius: 10,
  },
});
