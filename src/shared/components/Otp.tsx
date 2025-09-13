import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, StyleSheet, StyleProp, TextStyle } from "react-native";
import { scale } from "../helpers/ScaleHelper";

interface OtpInputProps {
  numberOfDigits?: number;
  onTextChange?: (text: string) => void;
  onFilled?: (text: string) => void;
  secureTextEntry?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  focusStyle?: StyleProp<TextStyle>; // style khi focus
}

const OtpInput: React.FC<OtpInputProps> = ({
  numberOfDigits = 6,
  onTextChange,
  onFilled,
  secureTextEntry = false,
  inputStyle,
  focusStyle,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(numberOfDigits).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputsRef = useRef<TextInput[]>([]);

  const onTextChangeRef = useRef(onTextChange);
  const onFilledRef = useRef(onFilled);

  useEffect(() => {
    onTextChangeRef.current = onTextChange;
    onFilledRef.current = onFilled;
  }, [onTextChange, onFilled]);

  useEffect(() => {
    const joined = otp.join("");
    onTextChangeRef.current?.(joined);
    if (joined.length === numberOfDigits) {
      onFilledRef.current?.(joined);
    }
  }, [otp, numberOfDigits]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      text = text.charAt(text.length - 1);
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < numberOfDigits - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(numberOfDigits)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputsRef.current[index] = ref;
            }}
            value={otp[index]}
            onChangeText={
              (text) => {
                const digitsOnly = text.replace(/[^0-9]/g, '');
                handleChange(digitsOnly, index)
            }}
            onKeyPress={(e) => handleKeyPress(e, index)}
            style={[
              styles.input,
              inputStyle,
              focusedIndex === index && focusStyle,
            ]}
            keyboardType="number-pad"
            maxLength={1}
            secureTextEntry={secureTextEntry}
            textAlign="center"
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            textContentType="oneTimeCode"
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: scale(20),
    gap:scale(10)
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 50,
    height: 50,
    fontSize: 20,
  }
});

export default OtpInput;