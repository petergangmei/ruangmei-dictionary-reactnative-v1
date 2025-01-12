import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { createStyles } from './styles'
import { useTheme } from '../../../config/context/ThemeContext'
import NavBar from '../../../components/common/navigation/navBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SearchScreen = () => {
  const { theme } = useTheme()
  const styles = createStyles(theme)

  const [searchQuery, setSearchQuery] = useState('')
  const [data] = useState([
    { id: '1', title: 'A (1)' },
    { id: '2', title: 'A (2)' },
    { id: '3', title: 'a (1)' },
    { id: '4', title: 'a (2)' },
    { id: '5', title: 'a- (1)' },
    { id: '6', title: 'a- (2)' },
  ])

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      {/* Navigation Bar */}
      <NavBar backEnabled={true} />

      <View style={styles.container}>
        {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={wp('6%')}  style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={theme.colors.textLight}
          value={searchQuery}
          autoFocus={true}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>


      {/* Results List */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    </>
  )
}

export default SearchScreen
