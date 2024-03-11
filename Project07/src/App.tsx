import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

export default function App() {
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));
  const [gameWinner, setGameWinner] = useState<string>('');
  const [isCross, setIsCross] = useState<boolean>(false);

  const changeItem = (itemNumber: number) => {
    // first we wil see on click of any item or sqaure box , ki is game over ? or not ie kya koi game winer hai
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      });
    }

    // 3rd index pr click kiya agr vo empty hai toh proceed kro , nhi toh move to else part
    // gameState[3]
    if (gameState[itemNumber] === 'empty') {
      console.log({isCross});
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: '#FFF',
      });
    }

    // toh ye sab hine ke baad, phir se winner check kro
    checkWinner();
  };

  const checkWinner = () => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2]
    ) {
      setGameWinner(`${gameState[0]} won the game 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  };

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  return (
    <SafeAreaView>
      <StatusBar />
      {/* header info status */}

      <View
        style={[
          styles.gameStatusHeading,
          gameWinner
            ? styles.gameWinner
            : isCross
            ? styles.crossTurn
            : styles.circleTurn,
        ]}>
        <Text style={styles.gameStatusText}>
          {gameWinner
            ? gameWinner
            : isCross
            ? "Player X's turn"
            : "Player 0's turn"}
        </Text>
      </View>

      {/* the game structure */}
      {/* in flatlist u can have keyExtrsactor or key in the rendering comp */}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.gameGrid}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            onPress={() => changeItem(index)}
            style={[
              styles.gameItem,
              index === 0 || index === 1 || index === 2
                ? styles.borderTopZero
                : null,
              index === 0 || index === 3 || index === 6
                ? styles.borderLeftZero
                : null,
              index === 2 || index === 5 || index === 8
                ? styles.borderRightZero
                : null,
              index === 6 || index === 7 || index === 8
                ? styles.borderBottomZero
                : null,
            ]}>
            <Icons name={item} />
          </Pressable>
        )}
      />

      {/* the button , for start or reload the game */}
      <Pressable style={styles.gameButton} onPress={reloadGame}>
        <Text style={styles.gameButtonText}>
          {gameWinner ? 'Start a New Game' : 'Reload game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gameStatusHeading: {
    backgroundColor: '#2ecc72',
    padding: 10,
    margin: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  crossTurn: {
    backgroundColor: '#38CC77',
  },
  circleTurn: {
    backgroundColor: '#F7CD2E',
  },
  gameWinner: {
    backgroundColor: '#26ae60',
  },
  gameStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  gameGrid: {
    margin: 14,
  },
  gameItem: {
    height: 100,
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
  },
  borderTopZero: {
    borderTopWidth: 0,
  },

  borderLeftZero: {
    borderLeftWidth: 0,
  },

  borderRightZero: {
    borderRightWidth: 0,
  },

  borderBottomZero: {
    borderBottomWidth: 0,
  },
  gameButton: {
    backgroundColor: '#8D3DAF',
    padding: 10,
    margin: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  gameButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

// https://medium.com/clarusway/setting-up-react-native-vector-icons-for-ios-a5d57e78cdb2
