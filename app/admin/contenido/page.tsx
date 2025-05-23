"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Plus, Search, Edit, Trash, Eye } from "lucide-react"

export default function AdminContentPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Datos de ejemplo para el contenido
  const contentItems = [
    {
      id: 1,
      title: "Técnicas de comunicación efectiva con personas autistas",
      category: "Comunicación",
      status: "Publicado",
      author: "María Rodríguez",
      date: "15/05/2025",
      views: 245,
      comments: 12,
    },
    {
      id: 2,
      title: "Manejo del estrés para cuidadores",
      category: "Autocuidado",
      status: "Publicado",
      author: "Juan Pérez",
      date: "10/05/2025",
      views: 189,
      comments: 8,
    },
    {
      id: 3,
      title: "Guía de estimulación sensorial",
      category: "Intervención",
      status: "Publicado",
      author: "Ana Gómez",
      date: "05/05/2025",
      views: 156,
      comments: 5,
    },
    {
      id: 4,
      title: "Adaptaciones en el hogar para mayor accesibilidad",
      category: "Accesibilidad",
      status: "Borrador",
      author: "Carlos Martínez",
      date: "01/05/2025",
      views: 0,
      comments: 0,
    },
    {
      id: 5,
      title: "Derechos y recursos legales para familias",
      category: "Legal",
      status: "Publicado",
      author: "Laura Sánchez",
      date: "25/04/2025",
      views: 132,
      comments: 7,
    },
    {
      id: 6,
      title: "Transición a la vida adulta: Guía para cuidadores",
      category: "Desarrollo",
      status: "Revisión",
      author: "Pedro López",
      date: "20/04/2025",
      views: 0,
      comments: 0,
    },
  ]

  // Filtrar contenido según el término de búsqueda
  const filteredContent = contentItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestión de Contenido</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Contenido
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center space-x-2 md:w-auto">
          <Input
            placeholder="Buscar contenido..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-[300px]"
          />
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Buscar</span>
          </Button>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="comunicacion">Comunicación</SelectItem>
              <SelectItem value="autocuidado">Autocuidado</SelectItem>
              <SelectItem value="intervencion">Intervención</SelectItem>
              <SelectItem value="accesibilidad">Accesibilidad</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
              <SelectItem value="desarrollo">Desarrollo</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="published">Publicado</SelectItem>
              <SelectItem value="draft">Borrador</SelectItem>
              <SelectItem value="review">Revisión</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Más recientes</SelectItem>
              <SelectItem value="oldest">Más antiguos</SelectItem>
              <SelectItem value="views">Más vistos</SelectItem>
              <SelectItem value="comments">Más comentados</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Título</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="text-right">Vistas</TableHead>
              <TableHead className="text-right">Comentarios</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContent.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      item.status === "Publicado"
                        ? "bg-green-100 text-green-800"
                        : item.status === "Borrador"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.status}
                  </div>
                </TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-right">{item.views}</TableCell>
                <TableCell className="text-right">{item.comments}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Abrir menú</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" /> Ver
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" /> Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm">
          Anterior
        </Button>
        <Button variant="outline" size="sm">
          Siguiente
        </Button>
      </div>
    </div>
  )
}
