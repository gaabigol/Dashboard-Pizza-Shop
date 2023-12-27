import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderTableFilters() {
  return (
    <form className="flex flex-col sm:flex-row gap-2 w-full">
    <span className="text-sm font-semibold hidden sm:block">Filtros:</span>
    <Input placeholder="ID do pedido" className="h-8 w-full sm:w-auto" />
    <Input placeholder="Nome do cliente" className="h-8 w-full sm:w-[320px]" />
    <Select defaultValue="all">
      <SelectTrigger className="h-8 w-full sm:w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm" type="button" className="w-full sm:w-auto">
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">Filtrar Resultados</span>
      </Button>
      <Button variant="outline" size="sm" type="button" className="w-full sm:w-auto">
        <X className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">Remover Filtros</span>
      </Button>
    </form>
  );
}
