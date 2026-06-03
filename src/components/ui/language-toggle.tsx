"use client";

import { Languages } from "lucide-react";
import { useParams } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLanguage = (locale: string) => {
    router.replace(pathname, { locale });
  };

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case "en":
        return "English";
      case "es":
        return "Español";
      default:
        return locale.toUpperCase();
    }
  };

  const getLanguageFlag = (locale: string) => {
    switch (locale) {
      case "en":
        return "🇺🇸";
      case "es":
        return "🇪🇸";
      default:
        return "🌍";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className={currentLocale === "en" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("es")}
          className={currentLocale === "es" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇪🇸</span>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
