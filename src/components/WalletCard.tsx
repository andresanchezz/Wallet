import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../themes/theme";
import { ThemedText } from "./ThemedText";

type WalletType = 'creditCard' | 'bankAccount';

interface WalletCardI {
    walletName: string;
    walletType: WalletType;
    balance: number;
    interestRate: number;
    accumulatedInterest: number;
    onPress: () => void;
}

const WalletCard: React.FC<WalletCardI> = ({
    walletName,
    walletType,
    balance,
    interestRate,
    accumulatedInterest,

    onPress
}) => {

    return (
        <TouchableOpacity style={styles.container}>

            <View>
                <ThemedText variant="title">{walletName}</ThemedText>
                <Text>{interestRate}% E.A</Text>
                <Text>{walletType === 'creditCard' ? 'Credit card' : 'Bank account'}</Text>
            </View>


            <View>
                <Text>{balance}</Text>
                <Text>+{accumulatedInterest} COP</Text>
            </View>


        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
    }
})

export default WalletCard;