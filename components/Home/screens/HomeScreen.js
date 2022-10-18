import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, Image, View, Dimensions, Linking} from 'react-native';
import { Button } from "@rneui/themed";

const images = [
    'https://i.ibb.co/Vp4g8qS/HOME-1.png',
    'https://i.ibb.co/5s1NQb9/HOME-2.png',
    'https://i.ibb.co/0Bdbcv7/HOME-3.png',
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
      this.setState({
        active:slide
      })
      }
    } 
  }
  render() {
    const { active } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent })=>this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((e, index) =>
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ url : e }}
                />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((e, index) =>
                <Text
                  key={e}
                  style={active === index ? styles.dotActive : styles.dot}>●</Text>)
            }
          </View>
        </View>

        <View style={styles.square}>
        <Text style={styles.headerTxt}>Go take our survey</Text>
        <Text style={styles.text}>Lets us know the things that you love about music</Text>
        <Button
              onPress={() => this.props.navigation.navigate('Survey')}
              title="Open Survey"
              buttonStyle={{
                borderColor: 'rgba(255, 255, 255, 1)',
              }}
              type="outline"
              titleStyle={{ color: 'rgba(255, 255, 255, 1)' }}
              containerStyle={{
                width: 150,
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            />
      </View>

      <View style={styles.container}>
      <Text style={styles.header2Txt}>Online Platforms</Text>
      <Text style={styles.text2}>Try out these online platforms.</Text>
      <Image style={styles.image} source={require('./Images/1.png')}/>
      <Button
              onPress={ ()=>{ Linking.openURL('https://play.google.com/store/apps/details?id=com.spotify.music')}}
              title="Download Spotify"
              buttonStyle={{
                borderColor: 'rgba(0, 0, 0, 1)',
              }}
              type="outline"
              titleStyle={{ color: 'rgba(0, 0, 0, 1)' }}
              containerStyle={{
                width: 200,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
      <Image style={styles.image} source={require('./Images/2.png')}/>
      <Button
              onPress={ ()=>{ Linking.openURL('https://youtube.com')}}
              title="Open Youtube"
              buttonStyle={{
                borderColor: 'rgba(0, 0, 0, 1)',
              }}
              type="outline"
              titleStyle={{ color: 'rgba(0, 0, 0, 1)' }}
              containerStyle={{
                width: 150,
                marginHorizontal: 110,
                marginVertical: 10,
              }}
            />
      <Image style={styles.image} source={require('./Images/3.png')}/>
      <Button
              onPress={ ()=>{ Linking.openURL('https://soundcloud.com')}}
              title="Open Soundcloud"
              buttonStyle={{
                borderColor: 'rgba(0, 0, 0, 1)',
              }}
              type="outline"
              titleStyle={{ color: 'rgba(0, 0, 0, 1)' }}
              containerStyle={{
                width: 200,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
    </View>  

    <View style={styles.footer}>
        <Text style={styles.footerHead}>Questions?</Text>
        <Text style={styles.footerText}>Drop us a hello at lorem.ipsum@gmail.com</Text>
    </View>

      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.30, // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
  square:{
    backgroundColor: 'black',
    marginTop: 5,
    width: 400,
    height: 350,
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 80,
    marginLeft: 20,
    marginRight: 40,
  },
  text: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 40,
    color: 'white',
  },
  button: {
    color: 'white',
    marginRight: 50,
    type: "outline",
    size: 'md',
  },
  header2Txt: {
    marginTop: -30,
    fontSize: 35,
    textAlign: 'center',
  },
  text2: {
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    marginTop: 30,
    marginBottom: 20,
    marginRight: 10,
    width: '100%',
    height: 200,
  },
  footer:{
    marginTop: 30,
    backgroundColor: 'black',
    width: 400,
    height: 150,
  },
  footerHead: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  footerText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
});

export default Home;