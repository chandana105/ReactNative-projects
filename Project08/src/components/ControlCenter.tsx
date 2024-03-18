import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

export default function ControlCenter() {
  const playbackState = usePlaybackState();
  // previous btn
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  //   we ll toggle based on whether there is current track or not
  // if curent trakc is paused and  or its ready then play it else pause it

  //   we ll get the state of playback using State fro mtrackplaye
  const togglePlayback = async (playback?: State) => {
    if (!playback) {
      return;
    }
    const currentTrack = await TrackPlayer.getActiveTrackIndex();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  //   TODO: DONE SOME CHANGES HERE

  //   next btn
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  return (
    <View>
      <Pressable onPress={skipToPrevious}>
        <Icon name="skip-previous" size={40} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playbackState.state)}>
        <Icon
          name={playbackState.state === State.Playing ? 'pause' : 'play-arrow'}
          size={40}
          style={styles.icon}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" size={40} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

// here i think acc to my understanding
// we ll buil dthe ocntrol center , prevous, play/pause and next btn
// and unpr clcik krke, we need to pass a fxn , of skip to next , previous so vo trackplaye vlaa hoga, same which we have usied in palcbakc servidce
// here we need to use it

/**
 *
 */
