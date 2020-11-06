import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
//import db from '../config'
//import firebase from 'firebase'
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }
/*
    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }
*/
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   // onPress={this.submitStory}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
        
