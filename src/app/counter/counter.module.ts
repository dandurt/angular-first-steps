import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [CounterComponent, ExampleComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
