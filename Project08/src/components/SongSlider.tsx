import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';

export default function SongSlider() {
  const {position, duration} = useProgress();
  console.log({position}, {duration});

  //   const formatTime = seconds => {
  //     const hours = Math.floor(seconds / 3600);
  //     const minutes = Math.floor((seconds % 3600) / 60);
  //     const remainingSeconds = Math.floor(seconds % 60);
  //     return `${hours > 0 ? hours.toString().padStart(2, '0') + ':' : ''}${minutes
  //       .toString()
  //       .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  //   };
  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="#fff"
        maximumTrackTintColor="#fff"
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {new Date(position * 1000).toISOString().substring(14, 19)}
          {/* {formatTime(position)} */}
        </Text>
        <Text style={styles.time}>
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(14, 19)}

          {/* {formatTime(duration)} */}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,

    flexDirection: 'row',
  },
  timeContainer: {
    width: 340,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#fff',
  },
});
