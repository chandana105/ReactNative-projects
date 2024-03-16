import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playlistData} from './src/constants';

// 1st step :- playback service to create ( which can be likehere a normal fxn)
export const playbackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );

  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
};

/**
 * playback service :- provides u the ability to play pause and all of that
 * how does it owrk ,:- thistrackplayer abovegvies u every such feautere
 * trackplayer nad u can privide here evnet listenr and like is js addEventList(eventname) and this event gives u lot of events ,
 * so to say it liek that thsi is the evnt i m listnetin for and wht shoudl be done , while listneingtothis evnet :- we ll provide a callback and int that call the trackpalter to do wht it wnats to do
 *
 * in some tutorla they simply say ki playbakc sevice mein gye and just do ki trackplayer.pause() :- , sicne we are handling an event :- AND IT CAN HAPPEN FROM ANY DEVICE :- IT CAN BE BLUETOOTH DEVICE , RO FROM UI ITESELF(ORIGNAL PHNE )
 * and so u can provide any funtianly u want here, as it ll be all provided in index.hs 
  * so here doen play, ka pause, and then enxt and previous ka functiomnality people can do here
 read event api

 so in case u want more evnts like this https://rntp.dev/docs/api/events see for mehre 
 */

//  TODO: TRY WRITNG EVNET WITH ONLY TRACKPLAYER.PLAY() LETS SEEE

// 3rd step is SETUP THE PLAYER

export const setupPlayer = async () => {
  let isSetup = false;
  try {
    // TODO: GETCURRENTTRACK IS DEPRECETATED
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
};

/**
 * we can direclty setup a player like in docs :- but this setting of a player takes a little bit of time,
 * this might crash also also more reasons is this is just settig up the player 
await TrackPlayer.setupPlayer() , but the player also beeon need to setup agian, when the tracks are being loaded on to them and so we have to track all these cases also , s owe have t owrap it around try catch block, and also from this fxn , we ll return a flag :- which shows wweather our player is being setup or not
 * 
so in try catch block  we ll use finaly also , ie last catch there ll return the orinal state of lfag issetup :- ie when noth worked up
in try part :- the trackplayer is trying to get the current track (its sayign i m assuming that the palyer is ready and is trying to get the track)
so if the player is able to get the track then obvioulsy it is ready to play 

but what if its th efirst time, playe ri s not ready, the app is getitgn started , obviouldy we ll fall into the catch part of ti ie the eerror is gettign 
in that case we ll try to setup the palyer for the first time 

so we have taken care of both ofthe cases :- THE PLAYER IS NOW READY FOR THE INITAL LAUNCH  AND THE PLAYER IS ALSO READY WHEN THE TRACKS ARE BEIN LOADED ON TO IT, IT CAN GET NEXT TRACK TO PLAY 
AND IF NTH WORKS , IN THE FINALLY WE ARE RETURNIGN ISSETUP FALSE 
 */

/**
 * now we have done many tihngs :-
 * 1. our palybakc service is ready
 * 2. our inital start of the player is ready and weh nthe tracks are laoded ie als oready
 *
 * but now we ll load our entire oplaylsit data into ur palyer
 *
 * Adding Tracks to the Playback Queue
 */

// Adding Tracks to the Playback Queue

export const addTrack = async () => {
  await TrackPlayer.add(playlistData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

/**
 * here, we ll add the tracklist of type Track into the trackplayer , but now addTrack fxn we called , all tracks get palyeed
 * ab iss fxn mein ye h bhi hna chahiye ki ek toh tracks oad hon, phir jb sab khtmb hiayein, dobara se first song sune it should repat
 *
 * wht asbt user has reached ot the end of the palyilsit and he wats to listen to first song agian
 *
 * https://rntp.dev/docs/api/functions/queue#setrepeatmodemode
 *
 * ucan pass into this anytihgn , withe queue ;- ki all palylist trepests , or off (after last sonf, stoped etc)
 */

// and so we have built nice and easy serive reuable , if any rn app has music, just imprt this palybakc serive and wokrds
