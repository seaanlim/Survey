import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return(
      <ImageBackground style={styles.container} source={require('./Images/grey.jpg')}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
      </View>
      
      <View style={styles.buttonContainer}>  
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => this.props.navigation.navigate('Login')}
        >
        <Text style={styles.btnTxt}>Log Out</Text>
      </TouchableOpacity>
      
    </View>
    </ImageBackground>
    );
  }
export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flex: 1,
  },
  title: {
    fontSize: 40,
    marginTop: -10,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginBottom: 30,
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnTxt: {
    color: '#444',
    fontSize: 20,
  },

})