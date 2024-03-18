import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Track} from 'react-native-track-player';

// the track which ll come can be of type TRack, null or undef
type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

export default function SongInfo({track}: SongInfoProps) {
  console.log({track});

  if (!track) {
    return null; // Render nothing if track is undefined
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{track?.title}</Text>
      </View>
      <View>
        <Text style={styles.artist}>
          {track?.artist} . {track?.album}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 18,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',

    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
});
