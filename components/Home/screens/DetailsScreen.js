import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';

export default function App() {
  return (
      
    <ImageBackground source={require('./Images/about.jpg')}>
      <View style={styles.square}>
      <Text style={styles.headerTxt}>Shhhhhhh!</Text>
      <Text style={styles.subTxt}>Want to know a secret?</Text>
      <Text style={styles.txt}>We are a group of aspiring IT students from University of Pangasinan and 
        this website is a part of our App/Web Developing collab project.

        Music Survey App is a fictional app made for grading purposes.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  headerTxt: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: -10,
    marginLeft: 20,
    marginRight: 20,
  },
  subTxt: {
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
  },
  txt: {
    marginLeft: 20,
    marginRight: 40,
    color: 'white',
  },
  square: {
  backgroundColor: 'rgba(52, 52, 52, 0.8)',
  marginTop: -50,
  justifyContent: 'center',
  width: 400,
  height: 800,
  },
  
});