import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BadgeIcon as Certificate, MessageSquare, Bell } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Datos de ejemplo para el dashboard
  const recentCourses = [
    {
      id: 1,
      title: "Comunicación efectiva con personas autistas",
      progress: 75,
      lastAccessed: "Hace 2 días",
      imageUrl: "/placeholder.svg?height=100&width=200",
      slug: "comunicacion-efectiva-autismo",
    },
    {
      id: 2,
      title: "Manejo del estrés para cuidadores",
      progress: 30,
      lastAccessed: "Hace 1 semana",
      imageUrl: "/placeholder.svg?height=100&width=200",
      slug: "manejo-estres-cuidadores",
    },
    {
      id: 3,
      title: "Guía de estimulación sensorial",
      progress: 10,
      lastAccessed: "Hace 2 semanas",
      imageUrl: "/placeholder.svg?height=100&width=200",
      slug: "guia-estimulacion-sensorial",
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "Fundamentos de comunicación aumentativa",
      date: "10 Abril, 2025",
      slug: "fundamentos-comunicacion-aumentativa",
    },
    {
      id: 2,
      title: "Primeros auxilios para cuidadores",
      date: "15 Marzo, 2025",
      slug: "primeros-auxilios-cuidadores",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Nuevo curso disponible",
      message: "Se ha publicado un nuevo curso sobre técnicas de relajación",
      date: "Hace 1 día",
    },
    {
      id: 2,
      title: "Recordatorio de webinar",
      message: "No olvides el webinar de mañana sobre inclusión educativa",
      date: "Hace 2 días",
    },
    {
      id: 3,
      title: "Certificado disponible",
      message: "Tu certificado de 'Comunicación efectiva' está listo para descargar",
      date: "Hace 3 días",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vista General</TabsTrigger>
          <TabsTrigger value="courses">Mis Cursos</TabsTrigger>
          <TabsTrigger value="certificates">Certificados</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos en Progreso</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
                <Certificate className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consultas Realizadas</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Notificaciones</CardTitle>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+3 nuevas sin leer</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Cursos Recientes</CardTitle>
                <CardDescription>Continúa donde lo dejaste</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 overflow-hidden rounded">
                      <img
                        src={course.imageUrl || "/placeholder.svg"}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Link href={`/dashboard/cursos/${course.slug}`} className="font-medium hover:underline">
                        {course.title}
                      </Link>
                      <div className="text-xs text-muted-foreground">Último acceso: {course.lastAccessed}</div>
                      <div className="flex items-center space-x-2">
                        <Progress value={course.progress} className="h-2" />
                        <span className="text-xs text-muted-foreground">{course.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Notificaciones Recientes</CardTitle>
                <CardDescription>Mantente al día con las últimas novedades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex flex-col space-y-1 border-b pb-3 last:border-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mis Cursos</CardTitle>
              <CardDescription>Gestiona tus cursos en progreso y completados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4">
                  <div className="w-20 h-20 overflow-hidden rounded">
                    <img
                      src={course.imageUrl || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Link href={`/dashboard/cursos/${course.slug}`} className="text-lg font-medium hover:underline">
                      {course.title}
                    </Link>
                    <div className="text-sm text-muted-foreground">Último acceso: {course.lastAccessed}</div>
                    <div className="flex items-center space-x-2">
                      <Progress value={course.progress} className="h-2 flex-1" />
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="certificates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mis Certificados</CardTitle>
              <CardDescription>Certificados obtenidos por completar cursos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="space-y-1">
                    <h4 className="font-medium">{certificate.title}</h4>
                    <div className="text-sm text-muted-foreground">Obtenido el: {certificate.date}</div>
                  </div>
                  <Link href={`/dashboard/certificados/${certificate.slug}`} className="text-blue-600 hover:underline">
                    Descargar PDF
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Mantente informado sobre novedades y actualizaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{notification.title}</h4>
                    <span className="text-sm text-muted-foreground">{notification.date}</span>
                  </div>
                  <p className="text-muted-foreground">{notification.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
