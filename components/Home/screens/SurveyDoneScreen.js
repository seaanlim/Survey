import { Button } from '@rneui/themed/dist/Button';
import { StyleSheet, Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';

export default function App({navigation}) {
  return (
      
    <ImageBackground source={require('./Images/survey_bg.jpg')}>
      <View style={styles.square}>
      <Text style={styles.title}>Thank you for doing our survey!</Text>
      <Image style={styles.image} source={require('./Images/check.png')}/>
      <Text style={styles.title2}>You have such great taste!</Text>
      <Text style={styles.txt}>You can find more about us by clicking the button below or the other, 
        if you want to retake the survey.</Text>

        <View style={styles.buttonStyleContainer}>
            <Button
             title={"Home"}
             style={styles.buttonStyle}
             onPress={() => navigation.navigate('Home')}
              color="green"
            />
              <Button
                style={styles.buttonStyle}
                title={"Retake?"}
                onPress={() => navigation.navigate('Survey')}
             color="gray"
           />

         </View>
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
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'lightgreen',
    marginBottom: -10,
    marginLeft: 20,
    marginRight: 40,
  },
  image: {
    marginTop: 30,
    marginLeft: 110,
    height: 150,
    width: 150,
  },
  title2: {
    marginTop:20,
    marginRight: 20,
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  txt: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 40,
    textAlign: 'center',
    color: 'white',
  },
  square: {
  backgroundColor: 'rgba(52, 52, 52, 0.8)',
  marginTop: -50,
  justifyContent: 'center',
  width: 400,
  height: 800,
  },
  buttonStyle: {
    height: 50,
    width: 90,
    marginRight: 20,
  },
  buttonStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
   }
  
});