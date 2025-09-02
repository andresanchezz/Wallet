// src/theme/theme.ts

export const colors = {
    primary: "#2563EB",
    secondary: "#9333EA",
    background: "#FFFFFF",
    text: "#111827",
    muted: "#6B7280",
    success: "#16A34A",
    error: "#DC2626",
};

export const fonts = {
    base: "NunitoSans",         // variable font
    italic: "NunitoSansItalic", // variable font
};

export const textVariants = {
    body: {
        fontFamily: fonts.base,
        fontWeight: "400" as const,
        fontSize: 16,
        color: colors.text,
    },
    title: {
        fontFamily: fonts.base,
        fontWeight: "700" as const,
        fontSize: 20,
        color: colors.text,
    },
    caption: {
        fontFamily: fonts.base,
        fontWeight: "400" as const,
        fontSize: 12,
        color: colors.muted,
    },
};

export type Theme = {
    colors: typeof colors;
    fonts: typeof fonts;
    textVariants: typeof textVariants;
};

export const theme: Theme = {
    colors,
    fonts,
    textVariants,
};
