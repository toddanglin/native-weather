import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Forecast } from "./item";
import { ForecastService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Forecast;

    constructor(
        private itemService: ForecastService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        //this.item = this.itemService.getItem(id);
    }
}
