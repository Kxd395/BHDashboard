import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TaskList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">In Progress</Badge>
        <span className="text-sm text-muted-foreground">2</span>
      </div>

      <div className="space-y-2">
        {[1, 2].map((task) => (
          <div key={task} className="bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="font-medium">Design System Components</span>
              </div>
              <Badge>High Priority</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Due Feb 28</span>
              </div>
              <Progress value={45} className="w-[100px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}