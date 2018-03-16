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
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ListView,
  ListViewDataSource,
} from 'react-native';


class TestListView extends Component {
    constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var datas = [ {color:'#003459',titleColor:'white'},
                  {color:'#028090',titleColor:'white'},
                  {color:'#02C39A',titleColor:'white'},
                  {color:'#FCE38A',titleColor:'#6638F0'},
                  {color:'#02C39A',titleColor:'white'},
                  {color:'#028090',titleColor:'white'},
                  {color:'#003459',titleColor:'white'},
                  ];
    this.state = {
      dataSource: ds.cloneWithRows(datas),
    };
  }

  render() {
    return (
      <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: 'red',
                  }}>
        <ListView style={{flexDirection: 'row', flexWrap:'wrap'}} dataSource={this.state.dataSource} renderRow={(rowData) => <ColorView viewColor={rowData.color} titleColor={rowData.titleColor} viewWidth={screen_w} viewHeight={222}></ColorView>}/>
      </View>
    );
  }
}

class ColorHountView extends Component {
  render () {
    return(
      <View style={this.props.style}>
        {this.renderAllColorView()}
      </View>
    );
  }
  renderAllColorView() {
    if(this.props.colors){
        var views = [];
        this.props.colors.map((value, index) => {views.push(<View style={{flex:[3.8, 2.6, 1.9, 1.7][(index % 4)], backgroundColor:value}}/>) })
        return(
          views
        ); 
    }
  }
}

class ColorHuntCell extends Component {
  constructor(props) {
    super(props);
    style = {
      flex: 1,
    };
    this.state = {
      didLike: false,
    }
  }
  render() {
    return(
      <View style={this.props.style}>
        {/*显示配色view*/}
          <ColorHountView colors={this.props.colors} style={{flex:1, borderRadius:5, overflow:'hidden', marginRight:18, marginLeft:18, marginTop:18}}/>
        {/*底部 view */}
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginRight:18, marginLeft:18, marginTop:18, marginBottom:18}}>
          <View style={{width:70, height:40, backgroundColor:'white', borderColor:'#E9F2F9', borderWidth:1, borderRadius:5, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity  activeOpacity={0.5} onPress={() => this._onLikePressed()} style={{flexDirection: 'row'}}>
            <Image source= {{uri: this.state.didLike?'icon-heart-blue' : 'icon-heart'}} style={{width:18, height:15}}></Image>
            {/*喜欢数字*/}
            <Text> 237</Text>
            </TouchableOpacity>
          </View>
          <View>
            {/*时间label*/}
            <Text style={{color: this.state.didLike?'#72A2D2':'#C1CFDE'}}>5 days </Text>
          </View>
        </View>
      </View>
    );
  }

  _onLikePressed() {
    this.setState({didlike:!this.state.didlike});
    console.log(this.state.didlike);
  }
}

class ColorListView extends Component {
    constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var datas = [ 
                    {colors:['#003459','#028090','#02C39A','#FCE38A']},
                    {colors:['#0278AE','#51ADCF','#A5ECD7','#E8FFC1']},
                    {colors:['#EC7700','#D65F00','#C04D00','#EFEFEF']},
                    {colors:['#194769','#F6F6E9','#D7EEF2','#F2855E']},
                    {colors:['#A1D9FF','#CA82F8','#ED93CB','#F2BBBB']},
                    {colors:['#1FFFFF','#FFFDE1','#FF9D76','#FF4273']},
                    {colors:['#B0DEDB','#E3F3F7','#FC6E5E','#583131']},
                    {colors:['#F4F9F4','#C4E3CB','#8AAE92','#616161']},
                    {colors:['#F3ECC8','#78C2C3','#3F6699','#0D1B4C']},
                    {colors:['#E9007F','#7CDFFF','#D5FFFB','#FCFFC8']},
                    {colors:['#00649F','#49BEB7','#FCCF4D','#EF255F']},
                    {colors:['#085F63','#028090','#02C39A','#FCE38A']},
                  ];
      this.state = {
        dataSource: ds.cloneWithRows(datas),
      };    
    }
    
    render() {
      return (
            <ListView dataSource = {this.state.dataSource}                
                      renderRow = {this.renderRow}
                      contentContainerStyle = {{flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-around'}}>
            </ListView>
      );
    }
    renderRow(rowData) {
      return (
        <ColorHuntCell colors={rowData.colors} style={{width:170, height:240, backgroundColor:'white',borderRadius:6, shadowColor:'black', shadowRadius:10,shadowOffset:{height:10}, shadowOpacity: 0.2, marginTop: 26}}/>
      );
    }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ColorListView></ColorListView>
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
