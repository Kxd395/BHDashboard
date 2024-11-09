import { Calendar, Table2, LineChart, Share2, BellRing } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="h-16 border-b bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg">Facility Overview</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Table2 className="mr-2 h-4 w-4" />
            List View
          </Button>
          <Button variant="ghost" size="sm">
            <LineChart className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Availability
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <BellRing className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share Report
        </Button>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Admin User</span>
            <span className="text-xs text-muted-foreground">Healthcare Provider</span>
          </div>
        </div>
      </div>
    </header>
  );
}