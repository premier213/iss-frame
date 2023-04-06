"use client";
import { Button, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <MantineProvider
    theme={{ fontFamily: "Open Sans" }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Button color="red">Click me!</Button>
    {children}
  </MantineProvider>
);
