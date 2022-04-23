import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";

const ModalPicker = ({
  changeModalVisibilty,
  setData,
  options,
  selectedOption,
}) => {
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = 44 * options.length < 400 ? 44 * options.length : 400;
  const onPressItem = (data) => {
    changeModalVisibilty(false);
    setData(data);
  };
  const optionList = options.map((op) => (
    <TouchableOpacity
      style={[styles.option, selectedOption.id === op.id && styles.selected]}
      key={op.id}
      onPress={() => onPressItem(op)}
    >
      <Text style={styles.text}>{op.name}</Text>
    </TouchableOpacity>
  ));
  return (
    <TouchableOpacity
      onPress={() => changeModalVisibilty(false)}
      style={styles.container}
    >
      <View
        style={[
          styles.modal,
          {
            width: WIDTH - 20,
            height: HEIGHT,
          },
        ]}
      >
        <ScrollView>{optionList}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 6,
  },
  option: {
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  selected: {
    backgroundColor: colors.lightBlue,
  },
  text: {
    lineHeight: 44,
    fontFamily: "font-regular",
    fontSize: 16,
  },
});
