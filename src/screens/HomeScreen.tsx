import { View, Text } from "react-native";
import WalletCard from "../components/WalletCard";

const HomeScreen = () => {
    return (
        <View>
            <WalletCard
                walletName="Nequi"
                walletType="bankAccount"
                balance={120000}
                interestRate={1.5}
                accumulatedInterest={1500}
                onPress={() => console.log('Wallet pressed')}
            />
        </View>
    )
}

export default HomeScreen;
