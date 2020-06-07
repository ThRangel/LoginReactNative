/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';



import fondo from './sources/fondo.jpg'
import logo from './sources/descarga.png'


/*  COMPONENTES--------------------------------*/

const {width : WIDTH } = Dimensions.get('window')

//export default class Example extends Component{

 // render() {
const HomeScreen = ({navigation}) =>{
    return(
       <ImageBackground source={fondo} style= {styles.backgroundContainer}>
         <View style={styles.logoContainer}>
             <Image source ={logo} style = {styles.logo}/>

            <Text style={styles.logoText}> REACT NATIVE</Text>

         </View>
         <View style = {styles.inputContainer}>
           <TextInput
             style={styles.input}
             placeholder={'Correo electronico'}
             placeholderTextColor={'rgba(255,255,255,0.7)'}
             underlineColorAndroid = 'transparent'
           
           />
         </View>

         <View style = {styles.inputContainer}>
           <TextInput
             style={styles.input}
             placeholder={'Contraseña'}
             secureTextEntry = {true}
             placeholderTextColor={'rgba(255,255,255,0.7)'}
             underlineColorAndroid = 'transparent'
           
           />
         </View>

         <TouchableOpacity style = {styles.botonLogin}>
             <Text onPress = {() => navigation.navigate("Details")} style= {styles.text}>
             Entrar
             </Text>
         </TouchableOpacity>

         <TouchableOpacity style = {styles.botonLogin}>
             <Text style= {styles.text}>
             Registrarse
             </Text>
         </TouchableOpacity>

       </ImageBackground>
    );
  }
  //}
//}

//PANTALLA SIGUIENTE--------------------------
const DetailsScreen = () =>{
   return(

     <ImageBackground source = {require('./sources/luna.jpg')}  style = {styles.contenedor}> 
        <View style = {{flex :1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {styles.welcome} > Bienvenido</Text>
            
       </View>
     </ImageBackground>

  );
}


const Stack = createStackNavigator();


const App = () => { 

  return (

    <NavigationContainer>
       <Stack.Navigator screenOptions = {{
          headerStyle:{
            backgroundColor : '#B228E0',
          },
          headerTintColor : '#fff',
          headerTitleStyle : {
            fontWeight: 'bold'
          }
          }}>
            <Stack.Screen name="Home" component={HomeScreen} options = {{

             }}
            />
           <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



 /* ESTILOS CSS----------------------------------------------------*/


 const styles = StyleSheet.create({

  welcome: {
    fontSize : 28,
    textAlign : 'center'
    
  
  },
  backgroundContainer:{
     flex :1,
     width : null,
     height: null,
     justifyContent :'center',
     alignItems : 'center',
  },

  logoContainer:{
     alignItems: 'center',
     opacity : 0.5
  },
  logo:{
     width: 120,
     height: 120
  },
  logoText :{
    color: 'white',
    fontSize: 28,
    fontWeight : '500',
    marginTop : 10,
    opacity :0.9
  },
  inputContainer:{
    marginTop: 10,
    //alignItems: 'center',
    //marginBottom : 50
  },
  input :{
    width : WIDTH -55,
    height : 45,
    borderRadius : 25,
    fontSize : 16,
    paddingLeft: 45,
    backgroundColor : 'rgba(0, 0, 0, 0.35)',
    color : 'rgba(255, 255, 255, 0.7)',
    marginHorizontal :25
  },
  botonLogin:{
    marginTop: 20,
    width : WIDTH -55,
    height : 45,
    borderRadius : 25,
   
    backgroundColor : '#5FCDDA',
    justifyContent : 'center',
    marginHorizontal :25
  },
  text :{
    color : '#fff',
    fontSize : 18,
    textAlign : 'center'
  },



  button: {
    borderColor: "#E9D1F1",
    borderWidth: 1,
    borderRadius: 10 
},
buttonPress: {
  width: 300,
  height:50,
    borderColor: "#fff",
    backgroundColor: "#B228E0",
    borderWidth: 4,
    borderRadius: 10,
    alignItems : 'center',
    textAlign : 'center',
    fontSize : 22,
    justifyContent: 'center'
},
textoBoton:{
  color : '#fff'
},


  contenedor:{

    flex : 1,
    alignItems: 'center',
    justifyContent : 'center'
  }
  
  
});


export default App;
