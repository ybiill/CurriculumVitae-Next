"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export default function PrintButton() {
  const { language } = useLanguage()

  const handlePrint = () => {
    window.print()
  }

  return (
    <Button onClick={handlePrint} variant="outline" size="sm">
      <Printer className="mr-2 h-4 w-4" />
      {language === "id" ? "Cetak" : "Print"}
    </Button>
  )
}

