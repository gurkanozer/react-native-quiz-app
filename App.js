import { useFonts } from "@expo-google-fonts/inter";
import Navigation from "./screens/Navigation";
import Loading from "./components/Loading";
import { GlobalProvider } from "./context/globalState";

export default function App() {
  let [fontsLoaded] = useFonts({
    "font-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "font-bold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "font-indie": require("./assets/fonts/IndieFlower-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
}
