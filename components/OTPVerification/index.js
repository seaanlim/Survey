import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Pressable, Text } from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true
    };
  } 
  
  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    if ((Email.length==0) || (Password.length==0) || (ConfirmPw.length==0)){
      alert("Required Field Is Missing!!!");
    }else if (!(checkEmail).test(Email)){
      alert("invalid email!!!");
    }
    // Password validations
    else if (Password.length<8){
      alert("Minimum 08 characters required!!!");
    }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password))){
      alert("Use atleast 01 special character!!!");
    }else if (((/[ ]/).test(Password))){
      alert("Don't include space in password!!!");
    }else if(Password !== ConfirmPw){
      alert("Password doesnot match!!!");
    }
    
    else{
      var InsertAPIURL = "http://127.0.0.1/backend/SignUp.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Email: Email,
        Password: Password
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("SignInScreen"); //Navigate to next screen if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
    }
  }
  
  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    });
}

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="position" >

        <Image style={styles.image} source={require ('./Images/cassette.jpg')}/>
        <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Sign Up</Text>
        </View>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Register Here</Text>
          <TextInput style={styles.nameInput} placeholder="Enter Email" 
          placeholderTextColor="grey"
          onChangeText={email=>this.setState({email})} />

          <TextInput style={styles.nameInput} placeholder="Enter Password" 
          placeholderTextColor="grey"
          onChangeText={password=>this.setState({password})} 
          secureTextEntry/>

          <TextInput style={styles.nameInput} placeholder="Confirm Password" 
          placeholderTextColor="grey"
          onChangeText={confirmPw=>this.setState({confirmPw})} 
          secureTextEntry/>

          <TouchableOpacity style={styles.btn} onPress={this.InsertRecord}>
            <Text style={styles.btnTxt}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.endTxt}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
    );
  }
}
