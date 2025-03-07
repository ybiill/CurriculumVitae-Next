"use client"

import { useLanguage } from "@/context/LanguageContext"

interface TranslatedTextProps {
  id: string
  en: string
}

export default function TranslatedText({  en, id }: TranslatedTextProps) {
  const { language } = useLanguage()
  return <>{language === "en" ? en : id}</>
}

