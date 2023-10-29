import * as React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Dimensions } from 'react-native';
// const Resume = require('../../.git/refs/remotes/origin')

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#171515',
      paddingTop: Dimensions.get('window').height/5,
    },
    view: {
        flex: 1,
        justifyContent: 'flext-start',
    },
    text: {
        color: '#1e90ff',
        textAlign: 'center',
    },
    button: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    }
  });

export class Home extends React.Component {
    constructor(){
        super();
    }
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1,
                justifyContent: 'flex-end'}}>
                <View style={styles.view}>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                </View>
                <View style={styles.button}>
                <Button icon='email' onPress={() => navigation.navigate('contact')}>Contact me here</Button>
                {/* <a href={Resume} target='_blank' download>*/}<Button icon='file-account' onPress={() => alert('downloaded resume')}>Resume</Button>
                {/* </a>*/}</View>
            </ScrollView>
        );
    }
}