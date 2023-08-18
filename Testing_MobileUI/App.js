import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [scannedData, setScannedData] = useState([]);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    if (!scanned) {
      setScanned(true);

      const lines = data.split('\n');
      const pointsLine = lines.find(line => line.startsWith('Points:'));

      if (pointsLine) {
        const pointsStartIndex = pointsLine.indexOf(':') + 1;
        const points = parseInt(pointsLine.substring(pointsStartIndex).trim());

        setTotalPoints(prevTotalPoints => prevTotalPoints + points);

        setScannedData([
          ...scannedData,
          {
            key: Date.now().toString(),
            date: new Date().toLocaleString(),
            details: data,
          },
        ]);

        storeScannedData();
      }
    }

    setShowScanner(false);
  };

  const storeScannedData = async () => {
    try {
      await AsyncStorage.setItem('scannedData', JSON.stringify(scannedData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalPointsText}>Total points: {totalPoints}</Text>
      <Button title="Scan" onPress={() => setShowScanner(true)} />
      {showScanner && (
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={styles.scanner}
          />
          <Button title="Close Scanner" onPress={() => setShowScanner(false)} />
        </View>
      )}
      <FlatList
        data={scannedData}
        renderItem={({ item }) => (
          <Text style={styles.scannedDataText}>
            {item.date}: {item.details}
          </Text>
        )}
      />
      {hasPermission === false && (
        <Text style={styles.errorText}>No access to camera</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  totalPointsText: {
    fontSize: 20,
    marginBottom: 10,
  },
  scannerContainer: {
    flex: 1,
    position: 'relative',
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
  },
  scannedDataText: {
    fontSize: 14,
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
