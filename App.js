import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

const App = () => {
  const [phone, setPhone] = useState('Phone');
  const [shippingAddrOne, setShippingAddrOne] = useState('Shipping Address 1');
  const [shippingAddrTwo, setShippingAddrTwo] = useState('Shipping Address 2');
  const [city, setCity] = useState('City');
  const [zipCode, setZipCode] = useState("Zip Code");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <ScrollView style={styles.container} testID='scrollView'>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text testID="pageTitle" style={styles.pageTitle}>
          Shipping Address
        </Text>
      </View>

      <View style={styles.content}>
        <TextInput
          testID={'phone'}
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
        />
      </View>

      <View style={styles.content}>
        <TextInput
          testID={'shippingAddrOne'}
          style={styles.input}
          onChangeText={setShippingAddrOne}
          value={shippingAddrOne}
        />
      </View>

      <View style={styles.content}>
        <TextInput
          testID={'shippingAddrTwo'}
          style={styles.input}
          onChangeText={setShippingAddrTwo}
          value={shippingAddrTwo}
        />
      </View>

      <View style={styles.content}>
        <TextInput
          testID={'city'}
          style={styles.input}
          onChangeText={setCity}
          value={city}
        />
      </View>


      <View style={styles.content}>
        <TextInput
          testID={'zipCode'}
          style={styles.input}
          onChangeText={setZipCode}
          value={zipCode}
        />
      </View>

      {isSubmitted && (
        <View style={styles.message}>
          <Text>isSubmitted Successfully</Text>
        </View>
      )}

      <View style={styles.btnContainer}>
        <Pressable
          onPress={onSubmit}
          style={styles.pressable}
          testID={'submitButton'}>
          <View style={styles.btnTextWrapper}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000'
  },

  optionText: {
    fontSize: 20,
    color: 'gray',
  },
  content: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#E5E5E5',
    marginVertical: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    borderColor: '#3C48FC',
  },
  label: {
    fontSize: 20,
    marginBottom: 1,
    marginLeft: 5,
    color: 'gray',
  },
  message: { justifyContent: 'center', alignItems: 'center' },
  btnContainer: {
    justifyContent: 'center',
    marginTop: 52,
    paddingHorizontal: 16,
  },
  pressable: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: '100%',
    height: 48,
    backgroundColor: '#3C48FC',
  },
  btnTextWrapper: { justifyContent: 'center', alignItems: 'center' },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
});

export default App;