import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Homepage from './Homepage';

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage/>
      <StatusBar style="auto" />
    </View>
  );
}

const cardData = [    
  { id: 1, title: 'Exercise', subtitle: '12 Tasks', image: require('./exercise.png') },
  { id: 2, title: 'Study', subtitle: '12 Tasks', image: require('./study.png') },
  { id: 3, title: 'Code', subtitle: '8 Tasks' },
  { id: 4, title: 'Cook', subtitle: '8 Tasks' },
  { id: 5, title: 'Read', subtitle: '8 Tasks' },
  { id: 6, title: 'Creative', subtitle: '8 Tasks' },
  { id: 7, title: 'Personal Development', subtitle: '8 Tasks' },
  { id: 8, title: 'Household Chores', subtitle: '8 Tasks' },  
  ];
const listData = [    
  { id: 1, title: 'Mobile App Development',  },
  { id: 2, title: 'Web Development',  },
  { id: 3, title: 'Play Chess',  },
  { id: 4, title: 'Complete Assignments',  },
  { id: 5, title: 'Practice Guitar',  },
  { id: 6, title: 'Watch Anime',  },
  { id: 7, title: 'Play Games',  },
  { id: 8, title: 'Study for Exams',  },
  { id: 9, title: 'Solve Math Problems',  },
  { id: 10, title: 'Watch Football',  },
  { id: 11, title: 'Go for a Run',  },
  { id: 12, title: 'Relax',  },
    { id: 13, title: 'Workout',  },
    { id: 14, title: 'Practice Guitar', },
    { id: 15, title: 'Meditate',  },
]; 

const CardComponent = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card1}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {image && <Image source={image} style={{ width: "75%", height: 110, borderRadius: 50, marginRight: 0, }} />}
      </View>
    </View>
  );
};

const ListComponent = ({ title }) => {
  return (
    <View style={styles.card2}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingHorizontal: 16,
    paddingTop: 40,
},
headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingTop: 6,
    paddingBottom: 10,
},
headerTextContainer: {
    flex: 1,
},
headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
},
profileImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 16,

},
subheaderText: {
    fontSize: 12,
    color: '#666',
},
svgContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
},
svg: {
    width: 32,
    height: 32,
},
searchAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
},
searchContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 16,
},
searchIcon: {
    marginRight: 8,
    color: '#999',
},
searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
},
tuneIconContainer: {
    padding: 8,
    width: '11%',
    backgroundColor: 'green',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
},
tuneIcon: {
    color: '#ccc',
},
card1: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
    width: 180,
    height: 180,
},
card2: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginHorizontal: 9,
    marginVertical: 8,
    display: 'flex',
    width: "96%",
    flexWrap: 'wrap',
    height: 128,
},
cardContent: {
    padding: 16,
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    
},
subtitle: {
    fontSize: 14,
    color: '#666',
    
}, cardContainer: {
    paddingTop: 6,
}
});

export { styles };
export { ListComponent };
export { CardComponent };
export { listData };
export { cardData };