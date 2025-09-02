import { Ionicons } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../src/screens/HomeScreen";
import MovementsCalendarScreen from "../src/screens/MovementsCalendarScreen";



const BottomNavigation = () => {

    interface TabI {
        name: string;
        component: React.ComponentType<any>;
        icon: keyof typeof Ionicons.glyphMap;
    }

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const tabs: TabI[] = [
        { name: "Home", component: HomeScreen, icon: "albums-outline" },
        { name: "Settings", component: MovementsCalendarScreen, icon: "settings" },
    ];

    const Tabs = () => {
        return <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    return <Ionicons
                        name={tabs.find((i) => i.name === route.name)?.icon || "albums-outline"}
                        size={32}
                        color="green"
                    />
                }
            })}
        >
            {tabs.map((tab, index) => (
                <Tab.Screen key={index} name={tab.name} component={tab.component} />
            ))}
        </Tab.Navigator>;
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    )

};

export default BottomNavigation;