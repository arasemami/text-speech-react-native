import React,{Component} from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';
import Speech from 'react-native-android-speech';



class SpeechComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { textSpeech:'Hello, Speech this text!' }
    }



    _onSpeech(){

            Speech.speak({
                text: this.state.textSpeech,    // Text For Speech get from state or some string
                pitch:1.5,                      // Optional Parameter to set the pitch of Speech,
                forceStop : false ,             //  Optional Parameter if true , it will stop TTS if it is already in process
                language : 'en',                // Optional Paramenter Default is en you can provide any supported lang by TTS
                country : 'US'                  // Optional Paramenter Default is null, it provoques that system selects its default
            }).then(isSpeaking=>{
                //Success Callback
                console.log(isSpeaking);
            }).catch(error=>{
                //Errror Callback
                console.log(error)
            });

    }

    render() { 
        return ( 
            <View style={styles.container}>
                <Text style={{color:'#fcfcfc'}}>{this.state.textSpeech}</Text>

                <TouchableOpacity style={styles.btnSpeech} onPress={this._onSpeech.bind(this)}>
                    <Text>Speech</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent:'center',
 

},
btnSpeech:{
    height:150,
    width:150,
    borderRadius:100,
    backgroundColor:'#2980B9',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth:5,
    borderColor:'#1F618D',
    elevation:5,
    marginTop:50,



}

})
export default SpeechComponent;