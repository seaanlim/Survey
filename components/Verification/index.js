import { StyleSheet, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';

export default function Verification() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding" >

        <Image style={styles.image} source={require ('./Images/Authentication2.png')}/>
        <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Verification</Text>
        </View>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>Enter the One Time Pin sent to your Email</Text>
          
        <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
      </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.endView}>
            <Text style={styles.endTxt}>Did not recieve OTP?</Text>
            <TouchableOpacity
              style={styles.endBtn}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.loginTxt}>Click Here</Text>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'white',
    height: 540,
    marginTop: 270,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  headerTxt: {
    fontSize: 40,
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 200,
  },
  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
    marginRight: 40,
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: '#0782f9',
    borderRadius: 80,
    borderWidth: 1,
    marginLeft: 85,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endTxt: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 80,
  },
  loginTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0782f9',
    marginTop: 18,
    marginLeft: 10,
  },
  image: {
    width:'100%',
    height: 380,
    marginBottom: -300,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});