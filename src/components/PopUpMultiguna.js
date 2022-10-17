import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dialog, {
  DialogContent,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';

const PopUpMultiguna = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Show Dialog"
        onPress={() => {
          this.setState({visible: true});
        }}
      />
      <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({visible: false});
        }}
      />
      <DialogContent></DialogContent>
    </View>
  );
};

export default PopUpMultiguna;

const styles = StyleSheet.create({});
