import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import React from 'react';
import {useState} from 'react';


export default function App() {
  const [num1,setnum1]=useState('');
  const [num2,setnum2]=useState('');
  const [result,setResult]=useState(null);

  const calculate=(operator)=>{
    const a=parseFloat(num1);
    const b=parseFloat(num2);
    if(isNaN(a)||isNaN(b)){
      setResult('Entered number is invalid');
      return;
    }
    
    switch(operator)
    {
      case '+':
        setResult(a+b);
        break;
      case '-':
        setResult(a-b);
        break;
      case '*':
        setResult(a*b);
        break;
      case '/':
        setResult(b!=0? a/b: 'Cannot divide by 0');
        break;
      case '%':
        setResult(a%b);
        break;
      default:
        setResult('Invalid operation');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput style={styles.textinput} placeholder='Enter first number' value={num1} onChangeText={setnum1} keyboardType='numeric'></TextInput>
      <TextInput style={styles.textinput} placeholder='Enter second number' value={num2} onChangeText={setnum2} keyboardType='numeric'></TextInput>
      <View style={styles.allbuttons}>
        <Button title='Add' onPress={()=>calculate('+')}></Button>
        <Button title='Subtract' onPress={()=>calculate('-')}></Button>
        <Button title='Multiply'onPress={()=>calculate('*')}></Button>
        <Button title='Divide' onPress={()=>calculate('/')}></Button>
        <Button title='Modulus' onPress={()=>calculate('%')}></Button>
      </View>
      {result!=null && (<Text style={styles.result}>Result:{result}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textinput:{
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  allbuttons:{
    flexDirection:'row',
    gap:5
  },
  result:{
    marginTop:30,
    fontWeight:'bold'
  }
});
