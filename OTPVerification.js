import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS ,SIZES,FONTS,images} from '.../context'
import { StatusBar } from 'expo-status-bar'
import {OtpInput} from 'react-native-otp-entry'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-web'
const OTPVerification = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: COLORS.white}}>
        <View style={{ flex:1,backgroundColor:COLORS.white,padding:16,alignItems:"center"}}>
            <statusbar hidden/>
            <Image
            source={ images.certification}
            resizeMode="center"
            style={{
                width:SIZES.width*0.8,
                height:SIZES.width*0.8,
                marginBottom: 16,
            }}
            />
            <Text style={{...FONTS.h3,marginVertical:12}}>Enter verification code</Text>
            <Text style={{...FONTS.body4}}>we are authenticaly detecting SMS</Text>
            <Text style={{...FONTS.body4}}> send to your mobile phone number</Text>
            <View style={{
                marginVertical: 22,
                width:SIZES.width-72
            }}>
              <OtpInput
              numberOfDigits={4}
              onTextChnage={(text)=>console.log(text)}
              focusColor={COLORS.primary}
              focusStickBlinkingDurtion={400}
              theme={{
                pincodeCtainerStyle: {
                    backgroundColor:COLORS.white,
                    width:58,
                    height:58,
                    borderRadius: 12,
                }
              }}
              />
            </View>
            <view style={{
                flexDirection:"row",
                alignItems: "center",
            }}>
                <Text style={{...FONTS.body4}}>Dont recive the code</Text>
                <TouchableOpacity>
                    <Text style={{...FONTS.h4, color:COLORS.primary}}>("")Resend code</Text>
                </TouchableOpacity>
            </view>
            <Button
            title="OKAY"
            onPress={()=>NavigationPreloadManager.navigate("phoneNumber")}
            style={{
                width: SIZES.width-64,
                marginVertical:64,
            }}
            />
        </View>
    </SafeAreaView>
    

  )
}

export default OTPVerification

const styles = StyleSheet.create({})