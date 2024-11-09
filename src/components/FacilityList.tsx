import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Users } from 'lucide-react';

export function FacilityList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Available Facilities</h2>
          <Badge variant="secondary">8 matches</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button variant="ghost" size="sm">Availability</Button>
          <Button variant="ghost" size="sm">Distance</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3].map((facility) => (
          <Card key={facility} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Recovery Center {facility}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>Philadelphia, PA</span>
                  <span className="text-xs">•</span>
                  <span>2.5 miles away</span>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Available Now</Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="space-y-1">
                <div className="text-sm font-medium">ASAM Levels</div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">3.5</Badge>
                  <Badge variant="outline">3.7</Badge>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Services</div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Detox</Badge>
                  <Badge variant="outline">Co-occurring</Badge>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Insurance</div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Medicaid</Badge>
                  <Badge variant="outline">Medicare</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">12 beds available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Updated 5m ago</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm">View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}