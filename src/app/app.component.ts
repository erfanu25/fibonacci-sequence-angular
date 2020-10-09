import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fibonacci-sequence-angular';

  nthNum: number;
  tempNum: number;
  result: number;
  counter = 2;
  message: string;

  ngOnInit(): void {
  }

  generate(): any {
    if (this.nthNum) {
      this.tempNum = this.nthNum;
      this.result = 1;
      if (this.tempNum !== 1) {
        const intr =  setInterval(() => {
          this.result = this.fib(this.counter++);
          if (--this.tempNum === 1) {
            clearInterval(intr);
          }
        }, 3000);
      }
    } else {
      this.message = 'Please Enter a Number';
    }
  }

  fib(n: number): number {
    if (n <= 1) {
      return n;
    } else {
      return this.fib(n - 1) + this.fib(n - 2);
    }
  }

  clear(): void {
    this.result = null;
    this.counter = 2;
    this.tempNum = null;
  }
}
