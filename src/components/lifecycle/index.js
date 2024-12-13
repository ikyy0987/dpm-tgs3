import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [isCounting, setIsCounting] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update: Count berubah menjadi", count);
    setHistory((prevHistory) => [...prevHistory, count]);
  }, [count]);

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting]);

  const changeCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
    setHistory([]);
    setElapsedTime(0);
  };

  const toggleCounting = () => {
    setIsCounting(!isCounting);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Cycle Component</Text>
      <Button title="Update Count" onPress={changeCount} />
      <Button title="Reset Count" onPress={resetCount} />
      <Button
        title={isCounting ? "Stop Timer" : "Start Timer"}
        onPress={toggleCounting}
      />
      <Text style={[styles.countText, { color: count > 10 ? "green" : "black" }]}>
        Count: {count}
      </Text>
      <Text style={styles.timerText}>Elapsed Time: {elapsedTime} seconds</Text>
      <Text style={styles.historyTitle}>History:</Text>
      <ScrollView style={styles.historyContainer}>
        {history.map((value, index) => (
          <Text key={index}>Count was: {value}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  countText: {
    fontSize: 16,
    marginTop: 10,
  },
  timerText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  historyContainer: {
    maxHeight: 100, 
    borderWidth: 1,
    borderColor: "lightblue",
    marginTop: 10,
    padding: 5,
  },
});

export default Lifecycle;