import { StyleSheet, View } from 'react-native';

import { Text } from './text';

const VIEWFINDER_SIZE = 260;
const BRACKET_SIZE = 28;
const BRACKET_WIDTH = 3;

type ScannerViewfinderProps = {
  instruction?: string;
};

export const ScannerViewfinder = ({ instruction }: ScannerViewfinderProps) => (
  <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
    <View style={styles.darkZone} />
    <View style={styles.middleRow}>
      <View style={styles.darkZone} />
      <View style={styles.window}>
        <View style={[styles.bracket, styles.topLeft]} />
        <View style={[styles.bracket, styles.topRight]} />
        <View style={[styles.bracket, styles.bottomLeft]} />
        <View style={[styles.bracket, styles.bottomRight]} />
      </View>
      <View style={styles.darkZone} />
    </View>
    <View style={[styles.darkZone, styles.bottomZone]}>
      {instruction ? (
        <Text className="text-center text-base text-white">{instruction}</Text>
      ) : null}
    </View>
  </View>
);

const styles = StyleSheet.create({
  darkZone: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  middleRow: {
    flexDirection: 'row',
    height: VIEWFINDER_SIZE,
  },
  window: {
    width: VIEWFINDER_SIZE,
  },
  bottomZone: {
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 40,
  },
  bracket: {
    position: 'absolute',
    width: BRACKET_SIZE,
    height: BRACKET_SIZE,
    borderColor: 'white',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: BRACKET_WIDTH,
    borderLeftWidth: BRACKET_WIDTH,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: BRACKET_WIDTH,
    borderRightWidth: BRACKET_WIDTH,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: BRACKET_WIDTH,
    borderLeftWidth: BRACKET_WIDTH,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: BRACKET_WIDTH,
    borderRightWidth: BRACKET_WIDTH,
  },
});
