import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  protected readonly showMore = signal(false);
  protected readonly visibleBlocks = computed(() =>
    this.showMore() ? this.blocks : [],
  );
  private readonly blocks = Array.from(
    { length: 30 },
    (unused, index) => index + 1,
  );
}
