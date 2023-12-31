import { Component } from '@angular/core';
import { interval } from 'rxjs';
import pwc from 'pretty-web-console';
import { ColorsService } from 'src/app/shared/colors.service';
import { DatePipe } from '@angular/common';

@Component({
  template: `
    <h2>Teste 3 - Teste Componente sem Unsubscribe</h2>
    <div class="box">
      <h2 class="title">Title3 Component</h2>
      <div class="content">
        <p>Counter: {{ counter }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class Teste3Component {
  counter = 0;

  private subscription: any;

  constructor(
    private colorsService: ColorsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const darkColor = this.colorsService.getDarkColor();
    const brightColor = this.colorsService.getBrightColor();
    const time = this.datePipe.transform(new Date(), 'HH:mm:ss.SSS');

    const logger = pwc()
      .bg(darkColor)
      .color(brightColor)
      .weight('bold')
      .padding('15px 20px');

    this.subscription = interval(1000).subscribe((value) => {
      this.counter = value;
      logger.log(`Teste3Component [${time}]: ${value}`);
    });
  }
}
