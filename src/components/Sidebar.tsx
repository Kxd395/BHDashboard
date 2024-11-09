import { Inbox, Settings, HelpCircle, Plus, LayoutGrid, Map, BookMarked, PieChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  return (
    <div className="w-72 border-r bg-card p-4 flex flex-col h-screen">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-8 w-8 bg-primary rounded-lg"></div>
        <div className="flex flex-col">
          <span className="font-semibold text-lg">Resource Dashboard</span>
          <span className="text-xs text-muted-foreground">Find the Right Care, Right Now</span>
        </div>
      </div>

      <nav className="space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <LayoutGrid className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Map className="mr-2 h-4 w-4" />
          Facility Map
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BookMarked className="mr-2 h-4 w-4" />
          Saved Resources
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <PieChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
      </nav>

      <Separator className="my-4" />

      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">ASAM Levels of Care</h3>
              <div className="space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Level 3.5 - Rehabilitation
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Level 3.7 - Medical Monitoring
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Level 4.0 - Medical Management
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Service Types</h3>
              <div className="space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Detox Services
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Rehabilitation
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Co-occurring Services
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Insurance</h3>
              <div className="space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Medicare
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Medicaid
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  Private Insurance
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      <div className="mt-auto space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help Center
        </Button>
      </div>
    </div>
  );
}