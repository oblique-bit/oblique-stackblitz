import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from "@angular/core";
import {ObNavTreeItemModel} from "@oblique/oblique";
import {type Observable, map} from "rxjs";
import {DataService} from "./data.service";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HomeComponent {
  items$: Observable<ObNavTreeItemModel[]>;
  private readonly dataService = inject(DataService);

  constructor() {
    this.items$ = this.dataService
      .getData()
      .pipe(map((data) => data.map((item) => new ObNavTreeItemModel(item))));
  }
}

