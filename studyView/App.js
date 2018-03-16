/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//*********优化后的写法 *********/

class ColorView extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.viewColor}}>
        <Text style={{fontSize: 33, color: this.props.titleColor,}}> {this.props.viewColor} </Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ColorView viewColor='#003459' titleColor='white'/>
        <ColorView viewColor='#028090' titleColor='white'/>
        <ColorView viewColor='#02C39A' titleColor='white'/>
        <ColorView viewColor='#FCE38A' titleColor='#6638F0'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});


//*********优化前的写法 *********/
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.headerView}> 
//           <Text style={styles.text}> #003459 </Text>
//         </View>
//         <View style={styles.h_mView}>
//           <Text style={styles.text}> #028090 </Text>
//         </View>
//         <View style={styles.middleView}>
//           <Text style={styles.text}> #02C39A </Text>
//         </View>
//         <View style={styles.footerView}>
//           <Text style={ {fontSize: 33, color: '#6638F0'}}> #FCE38A </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   headerView: {
//     flex: 1,
//     backgroundColor: '#003459',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   h_mView: {
//     flex: 1,
//     backgroundColor: '#028090',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   middleView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#02C39A',
//   },
//   footerView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor:  '#FCE38A',
//   },
//   text: {
//     fontSize: 33,
//     color: 'white',
//   }
// });