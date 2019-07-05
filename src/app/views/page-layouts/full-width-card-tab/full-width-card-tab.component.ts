import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-full-width-card-tab',
    templateUrl: './full-width-card-tab.component.html',
    styleUrls: ['./full-width-card-tab.component.scss']
})
export class FullWidthCardTabComponent implements OnInit {

    todo: any = [
        'Paris',
        'Berlin',
        'Copenhagen',
        'Zurich'
    ];

    done: any = [
        'London',
        'Amsterdam',
        'Malta'
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    constructor() {
    }

    ngOnInit() {
    }

    removeItem(index: number) {
        this.done.splice(index, 1);
    }
}
