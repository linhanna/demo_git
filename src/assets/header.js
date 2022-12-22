import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {' '}
      <View style={styles.header}>
        <Text style={{color: 'black', fontSize: 25}}>Friends</Text>{' '}
        <Image
          style={styles.iconSearch}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
          }}
        />{' '}
      </View>
      \{' '}
      <View style={styles.viewBotton}>
        {' '}
        <TouchableOpacity style={styles.headerButton}>
          {' '}
          <Text style={{color: 'black', fontSize: 15}}>suggestion</Text>{' '}
        </TouchableOpacity>{' '}
        <TouchableOpacity style={styles.headerButton}>
          {' '}
          <Text style={{color: 'black', fontSize: 15}}>Your Friends</Text>{' '}
        </TouchableOpacity>{' '}
      </View>{' '}
    </View>
  
};
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  viewBotton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 280,
    padding: 10,
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
  },
  name: {
    paddingTop: 30,
    color: 'black',
    fontSize: 18,
  },
  inforButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  headerContainer: {
    height: 120,
    backgroundColor: 'white',
  },
  headerButton: {
    borderRadius: 50,
    backgroundColor: '#E4E3E8',
    width: 120,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#0077EA',
    borderRadius: 5,
    width: 115,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#E4E3E8',
    borderRadius: 5,
    width: 115,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default header;
