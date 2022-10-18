import { StyleSheet} from 'react-native'

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
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
    nameInput: {
      height: 40,
      width: 280,
      marginLeft: 40,
      borderBottomWidth: 1,
      marginTop: 30,
      fontSize: 15,
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
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0782f9',
      marginTop: 17,
      marginLeft: 10,
    },
    image: {
      width:'100%',
      height: 300,
      marginBottom: -300,
    }
  });

export default styles;
