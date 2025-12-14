"use client"

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  variant?: "ghost" | "outline" | "default";
  size?: "default" | "sm" | "lg";
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  variant = "ghost",
  size = "sm",
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={cn(showLabel ? '' : "w-8 h-8 p-0", className)}
        disabled
        aria-label="Toggle theme"
      >
        <Sun className="w-4 h-4" />
        {showLabel && <span className="ml-2">Theme</span>}
      </Button>
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(showLabel ? '' : "w-8 h-8 p-0", className)}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {showLabel && (
        <span className="ml-2 capitalize">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      )}
    </Button>
  )
}
