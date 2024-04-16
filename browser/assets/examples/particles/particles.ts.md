> Standalone Component
```typescript
import { ParticlesComponent } from "ngx-uvcanvas/ui";
@Component({
  selector: "app-example",
  standalone: true,
  templateUrl: "./example.component.html",
  styleUrl: "./example.component.scss",
  imports: [ ParticlesComponent ],
})
export class ExampleComponent {}
```

> Traditional Module

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParticlesComponent } from "ngx-uvcanvas/ui";
import { ExampleComponent } from "./example.component.ts";

@NgModule({
  imports: [CommonModule, ParticlesComponent],
  declarations: [ ExampleComponent ],
})
export class ExampleModule {}
```
