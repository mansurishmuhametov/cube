import { Component, OnInit } from '@angular/core';
import { AutoCenterService } from '../../../http/auto-center/auto-center.service';
import { IAutoCenter } from '../../../http/auto-center/auto-center';
import { IContacts } from './contacts';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    public contacts: IContacts;

    constructor(private _autoCenterService: AutoCenterService) { }

    ngOnInit() {
        this._autoCenterService.get(1)
            .subscribe(center => {
                this.contacts = this.prepare(center);
            });
    }

    prepare(center: IAutoCenter): IContacts {
        const workTime = 'workTime';

        const contacts = {
            phone: center.phone,
            location: center.location,
            workTime
        };

        return contacts;
    }
}