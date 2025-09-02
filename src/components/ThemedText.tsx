// src/components/ThemedText.tsx
import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { theme } from "../themes/theme";


type Variant = keyof typeof theme.textVariants;

interface Props extends TextProps {
    variant?: Variant;
}

export function ThemedText({ variant = "body", style, ...props }: Props) {
    return (
        <RNText
            {...props}
            style={StyleSheet.flatten([theme.textVariants[variant], style])}
        />
    );
}
