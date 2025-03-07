"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button onClick={() => setLanguage(language === "en" ? "id" : "en")} variant="outline" size="sm">
      {language === "en" ? "ID" : "EN"}
    </Button>
    
  )
}

