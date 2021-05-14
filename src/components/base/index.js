import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../icon';
import { icons } from '../../assets';
import { stylePropType } from '../../utils/prop-types';
import styles, { HEIGHT } from './styles';

function BaseToast({
  leadingIcon,
  trailingIcon,
  title,
  text,
  onPress,
  onLeadingIconPress,
  onTrailingIconPress,
  style,
  leadingIconContainerStyle,
  trailingIconContainerStyle,
  leadingIconStyle,
  trailingIconStyle,
  contentContainerStyle,
  titleStyle,
  textStyle,
  icon,
  activeOpacity,
  titleNumberOfLines,
  textNumberOfLines
}) {
  return (
    <TouchableOpacity
      testID='rootView'
      style={[styles.base, styles.borderLeft, style]}
      onPress={onPress}
      activeOpacity={onPress ? activeOpacity : 1}>
      {leadingIcon && (
        <TouchableOpacity
          testID='leadingIcon'
          style={[styles.leadingIconContainer, leadingIconContainerStyle]}
          onPress={onLeadingIconPress}
          activeOpacity={onLeadingIconPress ? activeOpacity : 1}>
          <Icon
            style={{ ...styles.leadingIcon, ...leadingIconStyle }}
            source={leadingIcon}
          />
        </TouchableOpacity>
      )}

      <View
        testID='contentContainer'
        style={[styles.contentContainer, contentContainerStyle]}>
        {title?.length > 0 && (
          <View>
            <Text
              testID='title'
              style={[styles.title, titleStyle]}
              numberOfLines={titleNumberOfLines}>
              {title}
            </Text>
          </View>
        )}
        {text?.length > 0 && (
          <View>
            <Text
              testID='text'
              style={[styles.text, textStyle]}
              numberOfLines={textNumberOfLines}>
              {text}
            </Text>
          </View>
        )}
      </View>

      {trailingIcon && (
        <TouchableOpacity
          testID='trailingIcon'
          style={[styles.trailingIconContainer, trailingIconContainerStyle]}
          onPress={onTrailingIconPress}
          activeOpacity={onTrailingIconPress ? activeOpacity : 1}>
          <Icon
            style={{ ...styles.trailingIcon, ...trailingIconStyle }}
            source={trailingIcon}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

BaseToast.HEIGHT = HEIGHT;

BaseToast.propTypes = {
  leadingIcon: Icon.propTypes.source,
  trailingIcon: Icon.propTypes.source,
  title: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  onTrailingIconPress: PropTypes.func,
  onLeadingIconPress: PropTypes.func,
  style: stylePropType,
  leadingIconContainerStyle: stylePropType,
  trailingIconContainerStyle: stylePropType,
  leadingIconStyle: stylePropType,
  trailingIconStyle: stylePropType,
  contentContainerStyle: stylePropType,
  titleStyle: stylePropType,
  textStyle: stylePropType,
  activeOpacity: PropTypes.number,
  titleNumberOfLines: PropTypes.number,
  textNumberOfLines: PropTypes.number
};

BaseToast.defaultProps = {
  leadingIcon: undefined,
  trailingIcon: icons.close,
  title: undefined,
  text: undefined,
  onPress: undefined,
  onLeadingIconPress: undefined,
  onTrailingIconPress: undefined,
  style: undefined,
  leadingIconContainerStyle: undefined,
  trailingIconContainerStyle: undefined,
  leadingIconStyle: undefined,
  trailingIconStyle: undefined,
  contentContainerStyle: undefined,
  titleStyle: undefined,
  textStyle: undefined,
  activeOpacity: 0.8,
  titleNumberOfLines: 1,
  textNumberOfLines: 3
};

export default BaseToast;
