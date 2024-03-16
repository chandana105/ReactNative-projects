import {ActivityIndicator, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {setupPlayer, addTrack} from '../musicPlayerServices';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  // since setuplayer is an async fxn , so its result also t obe recorded here as async
  const setup = async () => {
    let isSetup = await setupPlayer();

    if (isSetup) {
      // is player is ready proceed with adding tracks
      await addTrack();
    }

    console.log({isSetup});

    // else humein by defualt isplayerready mein vlaue bhejni resturend from setuplayer
    setIsPlayerReady(isSetup);
  };

  // on the start of app we need the results
  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    <SafeAreaView>
      <ActivityIndicator />
    </SafeAreaView>;
  }

  return (
    <SafeAreaView>
      <Text>App</Text>
      <Icon name="logout" color="#fd0" size={30} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * there are entrie so much steps for playing music
 * u cant say hey play this musc by just using this package
 * there are lot s of events, u need to create an entrie sep service for ti, so that u can actually first setup a player, input music on that player, once the player is ready (coz this is not an instant process)
 * the memory is being setup,thep a,lyer is being setup, the trckis bein loaded on it, manytrack s are beign loaded on ti, then we have towroroy abt ,is this now okay, or should i wait more,
 * once thisis okay,am i listeign to all thevents,
 * like move fwd, move bwd ,or the player controls, there areso mcuh activites tht goes arnd
 *
 * so couple of things u shoukd ask for now :-
 * 1. is my player ready ? (coz just that ur app has been initated doesnt mean ur player is also gone be ready at same time , defiitley it takes osme time for capturing the memory and all of that )
 * 2. aretracks added to the player queue ? (are they areready or in palyer quee as this is going to takre the time)
 * 3.am i listenign to palye events ? (thereare many events )
 */

/**
 * so , now our playback service is set , now we  want to render our music by usng it
 * so  for mausic to get played , we want to things from servie :- is player is ready for m setupplayer fxn and if its reday then we ahve to putthe tracks on it so addTrack needed
 */
