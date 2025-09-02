import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./navigation/BottomNavigation";
import { Text as RNText, TextProps } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { theme } from "./src/themes/theme";


// Evita que el splash desaparezca hasta que carguen las fuentes
SplashScreen.preventAutoHideAsync();

// Sobrescribir el render global de Text
const customTextRender = (props: TextProps) => {
  return (
    <RNText
      {...props}
      style={[
        { fontFamily: theme.fonts.base, color: theme.colors.text, fontWeight: "400" },
        props.style,
      ]}
    />
  );
};
// @ts-ignore
(RNText as any).render = customTextRender;

export default function App() {
  const [loaded] = useFonts({
    NunitoSans: require("./assets/fonts/NunitoSans-VariableFont.ttf"),
    NunitoSansItalic: require("./assets/fonts/NunitoSans-Italic-VariableFont.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
