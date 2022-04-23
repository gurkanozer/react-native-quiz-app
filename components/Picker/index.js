import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import ModalPicker from "./ModalPicker";
import colors from "../../constants/colors";

const Picker = ({ title, setSelectedOption, selectedOption, options }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibilty = (isVisible) => {
    setIsModalVisible(isVisible);
  };
  const setData = (data) => {
    setSelectedOption(data);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={{ color: colors.white }}>{title}</Text>
      <TouchableOpacity
        style={styles.pickerContainer}
        onPress={() => changeModalVisibilty(true)}
      >
        <Text style={styles.selectedOption}>{selectedOption.name}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibilty(false)}
      >
        <ModalPicker
          changeModalVisibilty={changeModalVisibilty}
          options={options}
          setData={setData}
          selectedOption={selectedOption}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerContainer: {
    backgroundColor: colors.white,
    width: 156,
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    fontSize: 12,
  },
});

export default Picker;
