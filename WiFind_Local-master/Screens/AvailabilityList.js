import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ListItem }
  from 'react-native';
import 'firebase/firestore';
import stylesSheet from './stylesSheet'



class AvailabilityList extends Component {


  constructor(props) {

    super(props);

    this.state = {
      isSelected: false,
      selectedItemIndex: null,
      providers: [],
    };

  }

  bookNowHandler = () => {
    if (this.state.isSelected) {
      this.selectProviderHandler(this.state.selectedItemIndex)
      const provider = this.state.providers[this.state.selectedItemIndex];
      this.props.navigation.navigate('ConfirmationPage', { provider: [provider] })
    }
  }

  selectProviderHandler = (index) => {

    if (this.state.selectedItemIndex == index) {

      this.setState(state => {
        const providers = this.state.providers.map((item, i) => {
          if (item.isClicked) {
            item.isClicked = false;
          }
          return item
        });

        return {
          providers,
        };

      });
      this.setState({ isSelected: false })
      this.setState({ selectedItemIndex: null })

    } else {

      this.setState(state => {
        const providers = this.state.providers.map((item, i) => {

          item.isClicked = false;
          if (index == i) {
            item.isClicked = true;
          }
          return item
        });

        return {
          providers,
        };

      });

      this.setState({ isSelected: true })
      this.setState({ selectedItemIndex: index })
    }
  }


  renderProviders = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.providerList,
        item.isClicked ? { backgroundColor: '#59b5f9' } : { backgroundColor: '#fff' }]}
        onPress={() => this.selectProviderHandler(item.index)}>

        <Text style={styles.providerBox}>{item.address}</Text>

        <Text style={styles.providerBox}>{item.startTime} - {item.endTime}</Text>

        <Text style={styles.providerBox}>{item.speed}</Text>

      </TouchableOpacity>
    )
  }


  componentDidMount() {
    this.setState({ providers: this.props.route.params.provider })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ccc",

        }}
      />
    );
  }

  FlatListHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          height: 60
        }}>
        <Text style={styles.providerBox}>Location</Text>
        <Text style={styles.providerBox}>Time</Text>
        <Text style={styles.providerBox}>Speed</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        { this.state.providers.length > 0 ?

          <FlatList
            enableEmptySections={true}
            data={this.state.providers}
            renderItem={this.renderProviders}
            keyExtractor={provider => provider.index.toString()}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            ListHeaderComponent={this.FlatListHeader}
            ListFooterComponent={this.FlatListItemSeparator}
          />

          :

          <View>
            <Text> Sorry now providers available </Text>
            <Text> try refreshing the app or </Text>
            <Text> check check your connection  </Text>
          </View>

        }


        <View style={stylesSheet.centerButton} >
          <TouchableOpacity
            style={[stylesSheet.button, this.state.isSelected ? { backgroundColor: '#59b5f9' } : { backgroundColor: 'gray' }]}
            onPress={this.bookNowHandler}
          >
            <Text style={stylesSheet.text}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>

      </View>

    );

  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30%',
  },

  providerBox: {
    width: '100%',
    flexShrink: 1,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 2,
    alignSelf: 'center'
  },

  providerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }

});

export default AvailabilityList