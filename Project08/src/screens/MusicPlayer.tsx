import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';
import {playlistData} from '../constants';

const {width} = Dimensions.get('window');

export default function MusicPlayer() {
  const [track, setTrack] = useState<Track | null>();

  //   now here if one music ends , i wnat another musicstarts playing automaticly
  //   need ot write lifcycle

  //   TODO : changed here
  //   HERE, PLAYBACKTRACKCHANGED GOT DEPRECETED
  //   const events = [Event.PlaybackTrackChanged];

  //   useTrackPlayerEvents(events, async event => {
  //     switch (event.type) {
  //       case Event.PlaybackTrackChanged:
  //         if (event.nextTrack !== null) {
  //           const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
  //           setTrack(playingTrack);
  //         }
  //         break;
  //     }
  //   });

  //   useEffect(() => {
  //     // Set up event listener for track changes
  //     const listener = TrackPlayer.addEventListener(
  //       Event.PlaybackActiveTrackChanged,
  //       async data => {
  //         if (data.track !== undefined) {
  //           setTrack(data.track); // Set the track provided in the event directly
  //         }
  //       },
  //     );

  //     // Clean up event listener when component unmounts
  //     return () => listener.remove();
  //   }, []);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        if (event.track !== undefined) {
          setTrack(event.track);
        }
        break;
      // Add more cases for other events if needed
      default:
        break;
    }
  });

  console.log({track}, 'here');

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{
                uri: track?.artwork.toString(),
              }}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playlistData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

// here u got to have sth called Dimesnions (whichgives the thing that how wide ur phone is)
// and u ca nwrite get on it and window :- u can get window dimentsiosn out of it
/**
 * and it is an obj and can grab width and heigt of it
 */
