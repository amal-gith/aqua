import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/aqua1.webp")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: -150 },
                { translateY: 50 },
                { rotate: "-15deg" }
              ]
            }}
          />
         <Image
         source={require("../assets/aqua2.webp")}
         style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            position: "absolute",
            top: 10,
            left:10,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "-5deg" }
            ]
          }}
         />

<Image
         source={require("../assets/aqua3.webp")}
         style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            position: "absolute",
            top: 160,
            left:-250,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "15deg" }
            ]
          }}
         />


<Image
         source={require("../assets/aqua4.webp")}
         style={{
            height: 200,
            width: 200,
            borderRadius: 20,
            position: "absolute",
            top: 150,
            left:-100,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "-15deg" }
            ]
          }}
         />
        </View>

        {/*  content */}

<View style={{
    left:-230,
    paddingHorizontal:50,
    position:"absolute",
    top:450,
    width:"100%",
}}>
    <Text style={{
        fontSize:50,
        fontWeight:800,
        color:COLORS.white 
        }}>Let's Get  </Text>
        <Text style={{
      fontSize:46,
      fontWeight:800,
      color:COLORS.white
        }}>Started</Text>
        <View style={{marginVertical:22}}>
            <Text style={{fontSize:16,
                color:COLORS.white,
                marginVertical:4
            }}
            >Dive in with AquaOptim </Text>
        </View>
        <Button
        title="Join Now"
        onPress={()=>navigation.navigate("Login")}
        style={{
            marginTop:-10,
            width:"100%",
            left:20
        }}
        />

        <View style={{
            flexDirection:"row",
            marginTop:50,
            justifyContent:"center"
        }}>

        </View>
</View> 
      </View>
    </LinearGradient>
  );
}

export default Welcome;
