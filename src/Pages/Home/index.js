import React from 'react';
import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    ImageBackground

} from 'react-native';

//Criando duas constantes
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function Home() {
 return (
   <ScrollView style={styles.container}>
        <View style={{flex:1, height:screenHeight}}>
            <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>

            </View>
        </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{

    }
})