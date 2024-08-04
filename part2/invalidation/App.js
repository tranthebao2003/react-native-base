import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [email, onChangeEmail] = useState('')
  const [isValidEmail, setValidEmail] = useState(true)

  const [number, onChangeNumber] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)

  const verifyEmai = (email) => {
    // https://www.regextester.com/ : dùng web này để test regex trên mạng nếu email nó bắt đc thì nó sẽ màu xanh lên
    // trong regex này thì mik bỏ đi dấu '' và thay vào là dấu /regex/
    let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
    if(!email) return true
    if(regex.test(email)){ // todo
      return true
    }
    return false
  }

  const verifyPhoneNumber = (phone) => {
    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/)
    if(!phone) return true
    if(regex.test(phone)){ // todo
      return true
    }
    return false
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar></StatusBar>
      <Text style={{padding: 10, fontSize: 20}}>Email</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10, fontSize: 20}}
        onChangeText={(text) => {
          onChangeEmail(text)
          const isValid = verifyEmai(text)
          isValid === true ? setValidEmail(true) : setValidEmail(false)
        }}
        value={email}
        placeholder='Email'
      >
      </TextInput>
      {isValidEmail === false ? 
      <Text style={{padding: 10, fontSize: 20, color: 'red'}}>Email is invalid</Text> : ''
      }
      

      <Text style={{padding: 10, fontSize: 20}}>Phone number</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10, fontSize: 20}}
        onChangeText={(phone) => {
          onChangeNumber(phone)
          const isValid = verifyPhoneNumber(phone)
          isValid === true ? setValidPhone(true) : setValidPhone(false)
        }}
        value={number}
        keyboardType='numeric'
        placeholder='Number'
      >
      </TextInput>

      {isValidPhone === false ? 
      <Text style={{padding: 10, fontSize: 20, color: 'red'}}>Phone number is invalid</Text> : ''
      }
      
    </SafeAreaView>
  );
}

