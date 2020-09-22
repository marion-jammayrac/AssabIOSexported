/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DD614A',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;
