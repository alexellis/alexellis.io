import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alex Ellis - Cloud Native Consultant",
  description: "Personal website of Alex Ellis, CNCF Ambassador and founder of OpenFaaS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  )
}

