import React from 'react';
import { Button,  ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



export default class LinksScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "nothing"
    };
  
    this.findCoordinates = this.findCoordinates.bind(this);
  }

  findCoordinates(){
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };


  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={() => {this.findCoordinates()}}
          title="get coordinates"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />      
        <Text>Find My Coords?</Text>
        <Text>Location: {this.state.location}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
