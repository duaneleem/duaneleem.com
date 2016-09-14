import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-timeline-item',
    templateUrl: 'timeline-item.component.html',
    styleUrls: ['timeline-item.component.css']
})
export class TimelineItemComponent {
    @Input() objAchievement;
    
    // Retrieve modal type.
    private getModalType(): string {
        if(this.objAchievement.type == "position") {
            return "warning";
        } else {
            return "primary"
        } // if
    } // getModalType()

    // Retrieve timeline types.
    private getTimeLinePointType(): string {
        if(this.objAchievement.type == "position") {
            return "warning";
        } else {
            return "success"
        } // if
    } // getTimeLinePointType()

    // Disable if no image or description.
    private mtdDisabled_btnView(): string {
        if(this.objAchievement.description_full == null && this.objAchievement.imgSrc == null) {
            return "disabled";
        } else {
            // do nothing
        } // if
    } // isDisabled_btnView()
}

