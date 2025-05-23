import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, MessageSquare } from "lucide-react"
import Link from "next/link"

export function WorkshopsSection() {
  const workshops = [
    {
      id: 1,
      title: "Estrategias de comunicación para niños con TEA no verbales",
      date: "15 de junio, 2025",
      time: "18:00 - 19:30",
      participants: 25,
      image:
        "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      instructor: "Dra. María Rodríguez",
    },
    {
      id: 2,
      title: "Manejo de conductas desafiantes en el hogar para niños con TEA",
      date: "22 de junio, 2025",
      time: "17:00 - 19:00",
      participants: 30,
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      instructor: "Lic. Carlos Méndez",
    },
    {
      id: 3,
      title: "Autocuidado para padres y cuidadores de personas con TEA",
      date: "29 de junio, 2025",
      time: "18:00 - 19:30",
      participants: 20,
      image:
        "https://images.unsplash.com/photo-1469571486292-b53601010b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      instructor: "Lic. Pedro Gómez",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Talleres</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Aprende con expertos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Talleres prácticos diseñados específicamente para familias y cuidadores de personas con TEA
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-2 text-xl">{workshop.title}</CardTitle>
                <CardDescription>Por {workshop.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Máximo {workshop.participants} participantes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Suscríbete a nuestros planes mensuales o anuales
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/talleres">
            <Button variant="outline">Ver Todos los Talleres</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
