// Import CommonModule for common Angular directives
import { CommonModule } from '@angular/common';
// Import Component decorator from Angular core
import { Component } from '@angular/core';

/**
 * CounterComponent is a simple Angular component that provides
 * increment and decrement functionality for a counter value.
 * It also returns a status string based on the counter's value.
 */
@Component({
  // Selector used to embed this component in templates
  selector: 'app-counter',
  // Import CommonModule for use in this component
  imports: [CommonModule],
  // Path to the component's HTML template
  templateUrl: './counter.component.html',
  // Path to the component's SCSS styles
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  /**
   * The current value of the counter. Initialized to 5.
   */
  counter: number = 5;

  /**
   * Increments the counter value by 1.
   */
  increment() {
    this.counter++;
  }

  /**
   * Decrements the counter value by 1.
   */
  decrement() {
    this.counter--;
  }

  /**
   * Returns the status of the counter as a string:
   * - 'positive' if counter > 0
   * - 'neutral' if counter == 0
   * - 'negative' if counter < 0
   */
  getCounterStatus(): string {
    if (this.counter > 0) {
      return 'positive';
    } else if (this.counter === 0) {
      return 'neutral';
    } else {
      return 'negative';
    }
  }
}
