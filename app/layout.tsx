import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alex Ellis - Cloud Native Consultant",
  description: "Connect with Alex Ellis, founder of OpenFaaS, Actuated, and Inlets",
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

