import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button } from 'react-native';

export default function App() {

const img = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMal0tBwFJFF0CVIe7cixk3vrardx6ESUvFA&usqp=CAU'}
const img1 = { uri: 'https://blog.marcusoliveiradev.com.br/wp-content/uploads/2023/08/Como-colocar-cor-de-fundo-no-html.jpg'}
  return (
    <View style={styles.container}>
      

      <ImageBackground 
        style={styles.imageBackground}
        source={img1}
        resizeMode="cover"
      >
       
        <Text>Faça login!</Text>

<TextInput 
style={styles.input}
  placeholder='e-mail'
/>

<TextInput
style={styles.input2}
  placeholder='Senha'
  secureTextEntry={true}
  

/>
<Button
  style={styles.Button}
  title="Login"
  color="red"
  accessibilityLabel="Learn more about this purple button"
 
/>

<Image
  style={styles.img}
  source={img}
/>


      </ImageBackground>
     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
    width: '20%',
    backgroundColor: 'gray',
    
  },

  input2: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
    width: '20%',
    backgroundColor: 'gray',
    
    marginBottom: 10
    
  },
  Button: {
    marginTop: 60,

  },
  img: {
    width: 200,
    height: 200,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    backfaceVisibility: 'visible',

    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    
    flex: 1,
    width: '100%',
  },
  imageText: {
    color: 'Black',
    fontSize: 58,
  },
});

