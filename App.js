import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const DATA = [
    {
      id: '1',
      name: 'Nguyễn Linh',
      img: require('./src/assets/images/hinh1.jpg'),
      time: '47w',
      follow: 'followed by 15k',
    },
    {
      id: '2',
      name: 'Linh Anna',
      img: require('./src/assets/images/hinh2.jpg'),
      time: '47w',
      follow: '',
    },
    {
      id: '3',
      name: 'Nguyễn Bá Tước',
      img: require('./src/assets/images/hinh3.webp'),
      time: '47w',
      follow: '',
    },
    {
      id: '4',
      name: 'Tên Giả Định',
      img: require('./src/assets/images/hinh4.webp'),
      time: '47w',
      follow: '',
    },
    {
      id: '5',
      name: 'Mây Lang Thang',
      img: require('./src/assets/images/hinh5.jpg'),
      time: '47w',
      follow: '',
    },
    {
      id: '6',
      name: 'Nguyễn Bá Tước',
      img: require('./src/assets/images/hinh1.jpg'),
      time: '47w',
      follow: '',
    },
    {
      id: '7',
      name: 'Nguyễn Bá Tước',
      img: require('./src/assets/images/hinh2.jpg'),
      time: '47w',
      follow: '',
    },
    {
      id: '8',
      name: 'Nguyễn Bá Tước',
      img: require('./src/assets/images/hinh5.jpg'),
      time: '47w',
      follow: '',
    },
  ];
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={{color: 'black', fontSize: 25}}>Friends</Text>
          <Image
            style={styles.iconSearch}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
            }}
          />
        </View>
        <View style={styles.viewBotton}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color: 'black', fontSize: 15}}>suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color: 'black', fontSize: 15}}>Your Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={Header}
      // numColumns={1}
      data={DATA}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Image style={styles.imgCard} source={item.img} />
          <View style={styles.rightCard}>
            <View style={styles.titleCard}>
              <Text style={styles.nameCard}>{item.name}</Text>
              <Text style={styles.timeCard}>{item.time}</Text>
            </View>
            <Text style={styles.followCard}>{item.follow}</Text>
            <View style={styles.buttonCard}>
              <TouchableOpacity style={styles.button_left}>
                <Text style={styles.word_button_left}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_right}>
                <Text style={styles.word_button_right}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}

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
  card: {
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  imgCard: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 10,
  },
  rightCard: {
    margin: 10,
  },
  titleCard: {
    flexDirection: 'row',
  },
  nameCard: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: 'black',
    width: 190,
  },
  timeCard: {
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  followCard: {
    fontSize: 18,
  },
  buttonCard: {
    flexDirection: 'row',
  },
  button_left: {
    width: 110,
    alignItems: 'center',
    backgroundColor: '#3982E4',
    padding: 10,
    borderRadius: 10,
  },
  button_right: {
    width: 110,
    alignItems: 'center',
    backgroundColor: '#C9CCD1',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  word_button_left: {
    fontWeight: 'bold',
    color: 'white',
  },
  word_button_right: {
    fontWeight: 'bold',
    color: 'black',
  },
});
export default App;
