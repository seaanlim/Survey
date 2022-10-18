import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ImageBackground } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native'

const SurveyScreen = ({navigation}) => {

  const [selected, setSelected] = React.useState("");

  const platform = [
    'Spotify',
    'Soundcloud',
    'Youtube',
  ];

  const mood = [
    'Energetic',
    'Happy',
    'Calm',
    'Sad',
  ];

  const genre = [
    'Pop Music',
    'K-Pop',
    'J-Pop',
    'OPM',
    'Indie Pop/Rock',
    'Jazz',
    'Reggae',
    'Blues Music',
    'RnB Hip Hop',
    'Soul Music',
    'Rock',
    'Heavy Metal',
    'Alternative Rock',
    'Emo Rock',
    'Punk Rock',
  ];

    return(
      <ImageBackground style={styles.container} source={require('./Images/survey_bg.jpg')}>
      <View style={styles.container}>
        <Text style={styles.title}>LET'S HAVE A LOOK AT YOUR MUSIC PALETTE!</Text>
        <Text style={styles.title2}>Take a trip down memory lane and fill us up with your music groove!</Text>
        
        <Text style={styles.text}>Favorite Artist</Text>      
        <TextInput
        style={styles.input}
        placeholder="Your favorite Artist/s" 
        placeholderTextColor="#444"
      />
      
      <Text style={styles.text}>Online Platform</Text>      
      <SelectDropdown
            data={platform}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select platform'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />

      <Text style={styles.text}>Mood</Text>      
      <SelectDropdown
            data={mood}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Tell us your mood'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />

      <Text style={styles.text}>Genre</Text>
      <SelectDropdown
            data={genre}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select genre'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />  

      <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('SurveyDone')}
      >
        <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity>
      
    </View>
    </ImageBackground>
    );
  }
export default SurveyScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flex: 1,
  },
  title: {
    marginLeft: -20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  title2: {
    marginTop: 10,
    color: 'white'
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 15,
    color: 'white'
  },
  input: {
    marginLeft: 1,
    height: 45,
    width: 310,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 10,
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
    dropdown2BtnStyle: {
      width: '105%',
      height: 45,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
      color: '#444',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#fff',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {
      backgroundColor: '#fff', 
      borderBottomColor: '#C5C5C5'
    },
    dropdown2RowTxtStyle: {
      color: '#444',
      textAlign: 'center',
      fontWeight: 'bold',
    },
})