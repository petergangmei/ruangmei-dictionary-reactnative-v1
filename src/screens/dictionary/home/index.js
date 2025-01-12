import React, { useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavBar from '../../../components/common/navigation/navBar';
import { createStyles } from './style';
import { useTheme } from '../../../config/context/ThemeContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../../../components/common/navigation/bottomNav';

// 1) Import GestureHandlerRootView from react-native-gesture-handler
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// 2) Import BottomSheet and BottomSheetView from @gorhom/bottom-sheet
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import AccountScreenComponent from '../../../components/common/bottomSheets/account';

const DictionaryScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // bottom sheet ref
  const bottomSheetRef = useRef(null);


  const recentSearches = [
    { id: '1', word: 'love', flag: '🇬🇧' },
    { id: '2', word: 'peace', flag: '🇬🇧' },
    { id: '3', word: 'hope', flag: '🇬🇧' },
  ];

  return (
    // 3) Wrap your entire screen in GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavBar clickProfile={()=>bottomSheetRef.current?.snapToIndex(1)} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.header}>Ruangmei Dictionary</Text>
        <Text style={styles.subHeader}>+ love</Text>

        {/* Search Bar */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={wp('6%')}
              color="#888"
              style={styles.icon}
            />
            <Text style={styles.searchInput}>Search</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Word of the Day */}
        <Text style={styles.sectionHeader}>Word of the Day</Text>
        <View style={styles.wordContainer}>
          <Text style={styles.date}>06.01.25</Text>
          <Text style={styles.word}>flawless</Text>
          <Text style={styles.definition}>
            without any imperfections or defects; perfect
          </Text>
        </View>

        {/* Offline Mode Banner */}
        <TouchableOpacity style={styles.banner}>
          <View style={{ marginRight: wp('5%'), alignSelf: 'center' }}>
            <Ionicons
              name="cloud-offline-outline"
              size={wp('8%')}
              color={theme.colors.textPrimary}
            />
          </View>
          <View>
            <Text style={styles.bannerText}>Offline and Fast Mode</Text>
            <Text style={styles.bannerSubText}>
              Faster search and offline access
            </Text>
          </View>
          <View
            style={{ marginLeft: wp('7%'), marginRight: wp('2%'), alignSelf: 'center' }}
          >
            <Ionicons
              name="arrow-forward-outline"
              size={wp('7%')}
              color={theme.colors.textPrimary}
            />
          </View>
        </TouchableOpacity>

        {/* Recent Searches */}
        <View style={styles.seactionHeaderContainer}>
          <Text style={styles.sectionHeader}>Recent</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        {recentSearches.map((item) => (
          <View key={item.id} style={styles.recentItem}>
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.recentWord}>{item.word}</Text>
          </View>
        ))}

        {/* Footer */}
        <Text style={styles.sectionHeader}>Get more from Oxford Dictionary</Text>
        <TouchableOpacity style={styles.dictionaryBanner}>
          <Text style={styles.bannerText}>Explore all Dictionaries</Text>
          <Text style={styles.bannerSubText}>
            Choose between numerous Oxford dictionaries and Thesauruses. Learn Spanish,
            French, Chinese, Japanese and many more.
          </Text>
        </TouchableOpacity>

      </ScrollView>

      {/* 4) The BottomSheet component with onChange & BottomSheetView */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        handleComponent={null}
        snapPoints={[830]}
      >
        <BottomSheetView>
          <AccountScreenComponent closeProfileSheet={()=> bottomSheetRef.current?.snapToIndex(0)} />
        </BottomSheetView>
      </BottomSheet>

      <BottomNavigation active={0} />
    </GestureHandlerRootView>
  );
};

export default DictionaryScreen;
