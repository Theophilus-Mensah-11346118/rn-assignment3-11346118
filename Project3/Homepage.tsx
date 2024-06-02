import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from './App';
import { ListComponent } from './App';
import { CardComponent } from './App';
import { listData } from './App';
import { cardData } from './App';


export class Homepage extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Hello, Theophilus</Text>
            <Text style={styles.subheaderText}>14 tasks today</Text>
          </View>
          <Image source={require('./person.png')} alt='profilephoto' style={{ width: 40, height: 50, borderRadius: 50, marginRight: 0, }} />
        </View>
        <View style={styles.searchAndFilterContainer}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.tuneIconContainer}>
            <MaterialCommunityIcons name="tune" size={24} color="#ccc" style={styles.tuneIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 700, paddingTop: 6 }}>Categories</Text>
          <View>
            <FlatList
              data={cardData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CardComponent title={item.title} subtitle={item.subtitle} image={item.image}/>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardContainer}
            />

          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 24,
              fontWeight: 700,
              paddingTop: 27,
            }}
          >
            Ongoing Task
          </Text>
          <View>
            <FlatList
              data={listData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <ListComponent title={item.title} />}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Homepage;