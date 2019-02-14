import React from 'react';
import {
  Picker,
  Text,
  View,
} from 'react-native';


export default class TimePicker extends React.Component {
    constructor(){
        super();

        this.state = { 
            minutes : 0,
            seconds_tens : 0,
            seconds_ones : 0,
        };
    }


    render(){


        return (
            <View>
                <Text style={{padding: 0}}>Round Time: {this.state.minutes}:{this.state.seconds_tens}{this.state.seconds_ones}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                <Picker
                    title ={"minutes"}
                    selectedValue={this.state.minutes}
                    style={{height: 25, width: 50}}
                    onValueChange= {(minutes) => {
                    this.setState({ minutes: minutes })}}
                >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                </Picker>

                <Picker
                    selectedValue={this.state.seconds_tens}
                    style={{height: 25, width: 50}}
                    onValueChange= {(seconds_tens) => {
                    this.setState({ seconds_tens: seconds_tens })}}
                >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                </Picker>

                <Picker
                    selectedValue={this.state.seconds_ones}
                    style={{height: 25, width: 50}}
                    onValueChange= {(seconds_ones) => {
                    this.setState({ seconds_ones: seconds_ones })}}
                >
                    <Picker.Item label="0" value={0} />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                </Picker>
                </View>
            </View>
        );
    }

}