"use client";
import { CacheProvider } from "@emotion/react";
import { theme } from "@frame/ui";
import { Button, createEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const cache = createEmotionCache({ key: "my" });
cache.compat = true;

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  console.log("🎯 #19-apps/shell/app/page.tsx", process.env.NODE_ENV === "development" ? "dev" : "prod");

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        theme={theme}
        emotionCache={cache}
        withGlobalStyles
        withNormalizeCSS
      >
        <Button>Click me!</Button>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
};
