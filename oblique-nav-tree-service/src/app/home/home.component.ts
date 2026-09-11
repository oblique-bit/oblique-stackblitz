import {
  Component,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ObNavTreeItemModel } from "@oblique/oblique";
import { map, Observable, of } from "rxjs";
import { DataService } from "./data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class HomeComponent implements OnInit {
  items$: Observable<ObNavTreeItemModel[]>;
  private readonly dataService = inject(DataService);

  ngOnInit(): void {
    this.items$ = this.dataService
      .getData()
      .pipe(map((data) => data.map((item) => new ObNavTreeItemModel(item))));
  }
}
