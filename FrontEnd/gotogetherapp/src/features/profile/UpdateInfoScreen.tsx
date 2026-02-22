import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AVATAR } from '../../assets';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/color';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const UpdateInfoScreen = () => {
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation<any>();

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleSkip = () => {
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cập nhật thông tin</Text>
      <View style={styles.containerAvatar}>
        <Image style={styles.avatar} source={AVATAR.AVATAR} />
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TextInput style={styles.input} placeholder="Tên của bạn" />
      </View>
      <View style={styles.containerGender}>
        <TouchableOpacity
          style={styles.boxRegister}
          onPress={() => setGender('male')}
        >
          <View
            style={[styles.circle, gender === 'male' && styles.selectedCircle]}
          ></View>
          <Text>NAM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxRegister}
          onPress={() => setGender('female')}
        >
          <View
            style={[
              styles.circle,
              gender === 'female' && styles.selectedCircle,
            ]}
          ></View>
          <Text>NỮ</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          style={styles.dateInputContainer}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>{formatDate(date)}</Text>
          <Text style={styles.calendarIcon}>📅</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
            maximumDate={new Date()}
          />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Cập nhật thông tin" onPress={handleSkip}></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
  containerAvatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    width: 350,
    height: 70,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#636363',
    paddingHorizontal: 10,
    opacity: 0.8,
  },
  containerGender: {
    flexDirection: 'row',
    marginTop: 20,
  },
  boxRegister: {
    width: 130,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#636363',
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: SECONDARY_COLOR,
  },
  dateInputContainer: {
    width: 350,
    height: 70,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#636363',
    paddingHorizontal: 10,
    opacity: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  calendarIcon: {
    fontSize: 20,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});
export default UpdateInfoScreen;
