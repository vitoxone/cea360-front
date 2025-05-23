"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulación de registro
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Crear una cuenta</CardTitle>
            <CardDescription className="text-center">
              Regístrate para acceder a todos los recursos de CEA360
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="social">Redes Sociales</TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" required aria-describedby="firstName-error" />
                      <p id="firstName-error" className="text-sm text-red-500 hidden">
                        Por favor, introduce tu nombre
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" required aria-describedby="lastName-error" />
                      <p id="lastName-error" className="text-sm text-red-500 hidden">
                        Por favor, introduce tu apellido
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      aria-describedby="email-error"
                    />
                    <p id="email-error" className="text-sm text-red-500 hidden">
                      Por favor, introduce un email válido
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required minLength={8} aria-describedby="password-error" />
                    <p id="password-error" className="text-sm text-red-500 hidden">
                      La contraseña debe tener al menos 8 caracteres
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                    <Input id="confirmPassword" type="password" required aria-describedby="confirmPassword-error" />
                    <p id="confirmPassword-error" className="text-sm text-red-500 hidden">
                      Las contraseñas no coinciden
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required aria-describedby="terms-error" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto los{" "}
                      <Link href="/terminos" className="text-blue-600 hover:underline">
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                  <p id="terms-error" className="text-sm text-red-500 hidden">
                    Debes aceptar los términos y condiciones
                  </p>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="social" className="space-y-4 mt-4">
                <Button variant="outline" className="w-full" disabled={isLoading}>
                  Registrarse con Google
                </Button>
                <Button variant="outline" className="w-full" disabled={isLoading}>
                  Registrarse con Facebook
                </Button>
                <Button variant="outline" className="w-full" disabled={isLoading}>
                  Registrarse con Instagram
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm mt-2">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Iniciar Sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
