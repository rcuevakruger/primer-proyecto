import { Component } from "@angular/core";

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styles: [
        `
            p {
                padding: 20px;
                background-color: pink;
                border: 1px solid red;
            }
        `
    ]
})
export class WarningComponent {
}