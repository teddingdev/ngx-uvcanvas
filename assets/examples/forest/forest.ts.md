> Standalone Component
```typescript
import { ForestComponent } from "ngx-uvcanvas/ui";
@Component({
  selector: "app-example",
  standalone: true,
  templateUrl: "./example.component.html",
  styleUrl: "./example.component.scss",
  imports: [ ForestComponent ],
})
export class ExampleComponent {}
```

> Traditional Module

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForestComponent } from "ngx-uvcanvas/ui";
import { ExampleComponent } from "./example.component.ts";

@NgModule({
  imports: [CommonModule, ForestComponent],
  declarations: [ ExampleComponent ],
})
export class ExampleModule {}
```
