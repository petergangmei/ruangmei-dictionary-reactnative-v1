import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const SignInBottomSheet = ({show=false}) => {
    // bottom sheet ref
      const bottomSheetRef = useRef(null);
    
      const snapPoints = useMemo(() => [900,1000]);
    
      // callback for changes in bottom sheet position
      const handleSheetChanges = useCallback((index) => {
        console.log('BottomSheet onChange -> index:', index);
      }, []);
    
      useEffect(() => {
        console.log('----> show: ', show)
        if(show){
            // bottomSheetRef.current?.snapToIndex(1)
            setTimeout(() => {
                // bottomSheetRef.current?.snapToIndex(1)
            }, 1000);
        }
      }, [show])

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0)'}}>
      <Text>SignInBottomSheet</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )
}

export default SignInBottomSheet

const styles = StyleSheet.create({})