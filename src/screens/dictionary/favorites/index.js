import React, { useState } from 'react'
import { ScrollView, Text, View, TextInput, Image } from 'react-native'
import { useTheme } from '../../../config/context/ThemeContext'
import { createStyles } from './styles'
import NavBar from '../../../components/common/navigation/navBar'
import BottomNavigation from '../../../components/common/navigation/bottomNav'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const FavoriteScreen = () => {
    const { theme } = useTheme()
    const styles = createStyles(theme)

    const [favorites, setFavorites] = useState([]) // Empty favorites list

    return (
        <>
            <NavBar />
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.headerText}>Favorites</Text>
                <View style={styles.searchBarContainer}>
                    <Ionicons name="search" size={wp('6%')} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor={theme.colors.placeholder}
                    />
                </View>

                {/* Empty State View */}
                {favorites.length === 0 && (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="document-text-outline" size={wp('20%')} style={styles.emptyIcon} />
                        <Text style={styles.emptyText}>Your Favourites list is empty</Text>
                        <Text style={styles.emptySubText}>
                            Search for definitions and tap {' '}
                            <Ionicons name="heart-outline" size={wp('4%')} /> icon to show them here.
                        </Text>
                    </View>
                )}
            </ScrollView>
            <BottomNavigation active={1} />
        </>
    )
}

export default FavoriteScreen
