import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StepperFooterStyles';
import {styleConstants} from '../../_constants/StyleConstants';

// Add opacity to paginationDot when not in current page
const getIconStyle = (position, currentPosition) => {
  const defaultStyle = [styles.paginationDot];
  if (currentPosition !== position) {
    defaultStyle.push({opacity: 0.8});
  }
  return defaultStyle;
};

const getIconSize = (position, currentPosition) =>
  position === currentPosition ? 15 : 10;

const StepperFooter = ({text, onPress, position}) => (
  <View style={styles.container}>
    {/*Dummy invisible button to balance the button on the right*/}
    <TouchableOpacity
      style={styles.dummyButton}
      >
      <Text style={styles.smallText} allowFontScaling={false}>
        {text}
      </Text>
    </TouchableOpacity>
    <View
      style={styles.paginationContainer}
      accessible
      accessibilityLabel={`pagination position ${position + 1}`}>
      <Icon
        name={'circle'}
        color={styleConstants.progress_color}
        style={getIconStyle(0, position)}
        size={getIconSize(0, position)}
      />
      <Icon
        name={'circle'}
        color={styleConstants.progress_color}
        style={getIconStyle(1, position)}
        size={getIconSize(1, position)}
      />
      <Icon
        name={'circle'}
        color={styleConstants.progress_color}
        style={getIconStyle(2, position)}
        size={getIconSize(2, position)}
      />
      <Icon
        name={'circle'}
        color={styleConstants.progress_color}
        style={getIconStyle(3, position)}
        size={getIconSize(3, position)}
      />
    </View>
    <TouchableOpacity
      style={styles.footerButton}
      onPress={onPress}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}
      accessibilityLabel={text}
      accessibilityHint="Navigate to the next page"
      accessibilityRole="button">
      <Text style={styles.smallText} allowFontScaling={false}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default StepperFooter;
