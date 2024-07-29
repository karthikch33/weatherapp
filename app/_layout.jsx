import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import LoginScreen from "../components/LoginScreen";

export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/OpenSans_Condensed-SemiBold.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen/>
    </SignedOut>
    </ClerkProvider>
  );
}
