import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello App Pro
        </Text>
        <Text>color scheme choosen by user : {colorScheme}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;

// in web : alig nitems or justify content :- it works from left to right
// as screen is wided
// in mob dev :- axis works from top to bottoms,

// so here , align items :- works let orgiht
// justifyocntet : -top tp bottoms

// lets use the colorscheme for light nad dark mode

// by changing here usecolorschem ot dark and light, it doens t change the bg of mob devices as it is based on thmee whcih user chooses for its phien
// else styles are getting applied

/**
 * const AppPro = () this metohd should always retrtu na jsx eleemnt
 *
 * alignitems works on the principal of main axis and secondaryaxis
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 * alig  iems in case of mob it owrks diff than in web
 *
 * here justiofycntet : top to bootm
 * aligitmes : -l to r
 */
