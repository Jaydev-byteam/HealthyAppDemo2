import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StepperFooterStyles';
import {styleConstants} from '../../_constants/StyleConstants';

// Create a function to determine whether the previous button is hidden
// const isButtonHidden = position => {
//   const defaultStyle = [styles.footerButton];
//   if (position === 0) {
//     defaultStyle.push({visibility: 'hidden'});
//   }
//   return defaultStyle;
// };

const getIconSize = (position, currentPosition) =>
  position === currentPosition ? 15 : 10;

const getIconColor = (position, currentPosition) =>
  position === currentPosition
    ? styleConstants.progress_color
    : styleConstants.sleep_subhead;

const StepperFooter = ({onPrevPress, onNextPress, position}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={position !== 0 ? styles.footerButton : styles.hiddenButton}
      onPress={onPrevPress}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}
      accessibilityLabel="Back"
      accessibilityHint="Navigate to the next page"
      accessibilityRole="button">
      <Text
        style={position !== 0 ? styles.smallText : styles.hiddenText}
        allowFontScaling={false}>
        Back
      </Text>
    </TouchableOpacity>
    <View
      style={styles.paginationContainer}
      accessible
      accessibilityLabel={`pagination position ${position + 1}`}>
      <Icon
        name={'circle'}
        color={getIconColor(0, position)}
        style={styles.paginationDot}
        size={getIconSize(0, position)}
      />
      <Icon
        name={'circle'}
        color={getIconColor(1, position)}
        style={styles.paginationDot}
        size={getIconSize(1, position)}
      />
      <Icon
        name={'circle'}
        color={getIconColor(2, position)}
        style={styles.paginationDot}
        size={getIconSize(2, position)}
      />
      <Icon
        name={'circle'}
        color={getIconColor(3, position)}
        style={styles.paginationDot}
        size={getIconSize(3, position)}
      />
      <Icon
        name={'circle'}
        color={getIconColor(4, position)}
        style={styles.paginationDot}
        size={getIconSize(4, position)}
      />
    </View>
    <TouchableOpacity
      style={styles.footerButton}
      onPress={onNextPress}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}
      accessibilityLabel="Next"
      accessibilityHint="Navigate to the next page"
      accessibilityRole="button">
      <Text style={styles.smallText} allowFontScaling={false}>
        Next
      </Text>
    </TouchableOpacity>
  </View>
);

export default StepperFooter;
