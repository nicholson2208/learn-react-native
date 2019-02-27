import React from 'react';
import { Text, View, TouchableOpacity, Vibration } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  constructor(props){
    super(props);
    

    this.handleVibrationButton = this.handleVibrationButton.bind(this);

  }
 
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    image: null,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleVibrationButton() {
    Vibration.vibrate([100, 200, 300, 400]);

  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={async () => {
                  if( this.camera){
                    this.handleVibrationButton();

                    const picture =  await this.camera.takePictureAsync();
                    await this.props.navigation.navigate("Home", picture);
                  }}
                }>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}snap picture{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}