import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function SearchBar() {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search facilities, services, or providers..." className="pl-8 w-[400px]" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Advanced
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Badge variant="secondary">ASAM Level 3.5</Badge>
        <Badge variant="secondary">Co-occurring Services</Badge>
        <Badge variant="secondary">Medicaid</Badge>
        <Button variant="ghost" size="sm" className="text-xs">
          Clear All
        </Button>
      </div>
    </div>
  );
}