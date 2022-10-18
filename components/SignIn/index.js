import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';

export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "http://127.0.0.1/backend/login.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: Email,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        // alert(Response[0].Message)
        // if (Response[0].Message == "Success") {
        //   console.log("true")
          this.props.navigation.navigate("HomeScreen");
        // }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
    }
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="height" >

        <Image style={styles.image} source={require ('./Images/cassette.jpg')}/>
        <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>WELCOME</Text>
        </View>
        <View style={styles.subView}>
        
          <Text style={styles.subTxt}>Login</Text>
          <TextInput style={styles.nameInput} 
          placeholder="Email" 
          placeholderTextColor="grey"
          onChangeText={email=>this.setState({email})} />

          <TextInput style={styles.nameInput} 
          placeholder="Password" 
          placeholderTextColor="grey"
          onChangeText={password=>this.setState({password})} 
          secureTextEntry/>
          
          <TouchableOpacity style={styles.btn} onPress={this.InsertRecord}>
          <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>

          <View style={styles.endView}>
            <Text style={styles.endTxt}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.loginTxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}