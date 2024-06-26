import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook here

// Importer l'image de fond depuis votre dossier assets
const background = require('../assets/background.png');

const Login = () => {
  const navigation = useNavigation(); // Use useNavigation hook here
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <View style={{ flex: 1, marginHorizontal: 22, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.black,
            textAlign: 'center',
            marginTop: 20,
          }}>Login</Text>
        </View>

        {/* Email Address input */}
        <View style={{ marginBottom: 12, alignItems: 'center' }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 8,
            textAlign: 'left',
            width: '80%',
          }}>Email Address</Text>
          <View style={{
            width: "80%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 22,
          }}>
            <TextInput
              placeholder="Enter your Email Address"
              placeholderTextColor={COLORS.grey}
              keyboardType='email-address'
              style={{
                flex: 1,
              }}
            />
          </View>
        </View>

        {/* Password input */}
        <View style={{ marginBottom: 12, alignItems: 'center' }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 8,
            textAlign: 'left',
            width: '80%',
          }}>Password</Text>
          <View style={{
            width: "80%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 22,
          }}>
            <TextInput
              placeholder="Enter your Password"
              placeholderTextColor={COLORS.grey}
              secureTextEntry={!isPasswordShown}
              style={{
                flex: 1,
              }}
            />
            {/* Password visibility toggle */}
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Login button */}
        <Button
          title="Login"
          onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard screen
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
            width: '50%',
            alignSelf: 'center'
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
