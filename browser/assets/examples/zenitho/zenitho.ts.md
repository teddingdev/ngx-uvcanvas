> Standalone Component
```typescript
import { ZenithoComponent } from "ngx-uvcanvas/ui";
@Component({
  selector: "app-example",
  standalone: true,
  templateUrl: "./example.component.html",
  styleUrl: "./example.component.scss",
  imports: [ ZenithoComponent ],
})
export class ExampleComponent {}
```

> Traditional Module

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleComponent } from "./example.component.ts";

@NgModule({
  imports: [CommonModule, ZenithoComponent],
  declarations: [ ExampleComponent ],
})
export class ExampleModule {}
```
