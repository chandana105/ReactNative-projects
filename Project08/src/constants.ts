import {Track} from 'react-native-track-player';

// import Portrait from './assets/audio/1Portrait.mpeg';

export const playlistData: Track[] = [
  {
    id: 1,
    title: 'Portrait',
    artist: 'Joe Layne',
    album: 'Happiness OST',
    artwork:
      'https://lh3.googleusercontent.com/KOGuuKrjiK171q1mXoNIKd8T4xVyVUG6IZqAea9Ub7Uo1jc4tAFE7uFzAWupw30GNXQfNO1EozJy40Q=w544-h544-l90-rj',
    url: require('./assets/audio/1Portrait.mpeg'),
  },
  {
    id: 2,
    title: 'Mukhto Kore Dao',
    artist: 'Arijit Singh',
    album: 'Single',
    artwork:
      'https://lh3.googleusercontent.com/uehXYhBrA2347vzsKSA_shozUBvCNUxd7sZwOr_vAYQoTsppAtn41_Z5qL8N1Paqa1HGO6ERNw1jtR-n=w544-h544-l90-rj',
    url: require('./assets/audio/2Mukhtokordeo.mpeg'),
  },
  {
    id: 3,
    title: 'Rewrite the Stars',
    artist: 'Zac Efron, Zendaya',
    album: 'The Greatest Showman',
    artwork:
      'https://lh3.googleusercontent.com/JCSCUL9b2MigEbo6gcGJpjq3TSAxv5QMmiHiBrPZLAQeO8dclmrUu47hq_CH4OaTVvdfy0HMLa1A8sU=w544-h544-l90-rj',
    url: require('./assets/audio/3Rewritethestars.mpeg'),
  },
  {
    id: 4,
    title: 'Hasdi tu Reh Sohniye',
    artist: 'Parmish Verma',
    album: 'Dil Diyan Gallan',
    artwork:
      'https://i.ytimg.com/vi/Xr-lpLs9TgM/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3n9y-AchTOmru05lDvuBnsCMd9ulg',

    url: require('./assets/audio/4Hasditurehsoniye.mpeg'),
  },
  {
    id: 5,
    title: 'Hass Hass',
    artist: 'Diljit Dosanjh, Sia, Greg Kurstin',
    album: 'Single',
    artwork:
      'https://lh3.googleusercontent.com/C1yu1R5glYqTipPC5svpAlmQ0-gQ8VhwCTYB9P34-gnfXoA2PxpBic2u-_AMl0DdPV-X8yzBnmEgPu3COQ=w544-h544-s-l90-rj',
    url: require('./assets/audio/5HassHass.mpeg'),
    // url: require('./assets/audio/Hass Hass - Diljit Dosanjh_320(Ghantalele.com).mp3'),
  },
  {
    id: 6,
    title: 'Doctor Slump OST[1-6]',
    artist: 'Seulgi, Hynn, Chen , Junggigo, Dayoung,Eden, Park Hyngshik ',
    album: 'Doctor Slump',
    artwork:
      'https://lh3.googleusercontent.com/OuauPQzlHe6iVQfEO0jK18-cmAycy0zA7r1mTbftl1NxoLUwYfaMyiOpEFX8ywjSpQwgEpqDk6frDdez=w544-h544-l90-rj',
    url: require('./assets/audio/6DoctorSlumpOST1-6.m4a'),
  },
];

// the data should be of type TRack[] Only the url, title and artist properties are required for basic playback
// can be only id and url
