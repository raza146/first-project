import { StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react' 6.9k (gzipped: 2.7k)
import Ionicons  from "react-native-vector-icons/Ionicons";
import  Ionicons  from "react-native-vector-icons/SimpleLineIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-web";
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { colors } from './src/screen/utils/colors';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntry,serSecureEntry]=useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name={"arrow-back-outline"} color={Colors.primary} 
        size={25}/>
      </TouchableOpacity>
      <View style={styles.textContainer}/>
        <Text style={styles.headingText}>Create your account now</Text>
      <View/>
      {/* from */}
      <View style={styles.formContainer}/>
        <View style={styles.inputContainer}/>
          <Ionicons name={"mail-outline"} size={30} color={Colors.secondary} />
          <TextInput style={styles.TextInput}
          placeholder="Enter your email"
          placeholderTextColor={Colors.secondary}
          keyboardType="email-address"/>
          <View/>
          <View style={styles.inputContainer}/>
          <Ionicons name={"lock"} size={30} color={Colors.secondary} />
          <TextInput style={styles.TextInput}
          placeholder="Enter your phone no"
          placeholderTextColor={Colors.secondary}
          secureTextEntry={secureEntry}
          keyboardType='phone-pad'/>
          <TouchableOpacity onPress={() => {
            setSecureEntry((prev) => !prev);
          }}/>
          <SimpleLineIcons name={"eye"} size={20} color={colors.secondary}/>
          <TouchableOpacity/>
          <View/>
          <TouchableOpacity/>
          <View style={styles.inputContainer}/>
           <SimpleLineIcons name={'screen-smartphone'}size={30}color={colors.scondary}/>
          <View/>
          <TouchableOpacity style={styles.loginButtonWrapper}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.continueText}>or continue with</Text>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <Image source={require("../assets/google.png")}style={styles.googleImage}/>
            <Text style={style.googleText}>Google</Text>
          </TouchableOpacity>
          <view style={styles.footerContainer}>
            <Text style={style.accountText}>Already have an account</Text>
            <Text style={styles.signupText}>Login</Text>
          </view>
          <View/>
    <View/>
  );
};
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: Colors. gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer:{
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color:Colors.primary,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: color.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors. primary,
    borderRadius: 100,
    marginVertical: 20,
  },
  loginText:{
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleButtonContainer:{
    flexDirection:"row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 18,
    width: 17,
  },
  googleText:{
    fontSize: 20,
    fontFamily: fonts.SemiBold,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.primary,
    fontsFamily: Fonts.Bold,
  },
});