> Standalone Component
```typescript
import { LibTestComponent } from "ngx-uvcanvas/ui";
@Component({
  selector: "app-example",
  standalone: true,
  templateUrl: "./example.component.html",
  styleUrl: "./example.component.scss",
  imports: [ LibTestComponent ],
})
export class ExampleComponent {}
```

> Traditional Module

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleComponent } from "./example.component.ts";

@NgModule({
  imports: [CommonModule, LibTestComponent],
  declarations: [ ExampleComponent ],
})
export class ExampleModule {}
```
