import "@storybook/addon-console";

import { theme } from "@frame/ui";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useDarkMode } from "storybook-dark-mode";

function ThemeWrapper(props: { children: React.ReactNode }) {
  const colorScheme = useDarkMode() ? "dark" : "light";

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={() => {}}
    >
      <MantineProvider
        theme={theme}
        withGlobalStyles
        withNormalizeCSS
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
