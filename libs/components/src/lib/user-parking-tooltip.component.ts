import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    firstTruthyValueFrom,
    i18n,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { TranslatePipe } from './translate.pipe';
import { ParkingToolTipMenu } from "./user-parking-tooltip-cust-kj.component";

@Component({
    selector: 'user-parking-tooltip',
    template: `
        <div
            class="min-w-[20rem] space-y-2 rounded-md border border-base-300 bg-base-100 p-2"
        >
            <h3 class="border-b border-base-300 text-lg font-medium">
                {{ 'COMMON.CONTROLS_PARKING' | translate }}
            </h3>
            <app-user-parking-tooltip-cust-kj 
                [plateDetailsString]="plate_number()"
                (plateDetailsChange)="handlePlateDetails($event)" 
                (isValidChange)="handleValidationStatus($event)"
            />
            <button btn matRipple class="w-full" (click)="save()" [disabled]="!isLicensePlateFormValid">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </div>
    `,
    styles: [``],
    imports: [MatFormFieldModule, MatInputModule, TranslatePipe, FormsModule, ParkingToolTipMenu],
})
export class UserParkingTooltipComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _tooltip = inject(CustomTooltipData, { optional: true });

    public readonly plate_number = signal('');

    public async ngOnInit() {
        await firstTruthyValueFrom(this._settings.initialised);
        this.plate_number.set(this._settings.get('plate_number') || '');
    }

    public save() {
        if (this.plate_number()) {
            this._settings.saveUserSetting('plate_number', this.plate_number());
        }
        notifySuccess(i18n('COMMON.PARKING_SETTINGS_SAVE'));
        this._tooltip?.close();
    }

    // ------------------------KJ Tech Nestle Code Base----------------------

    isLicensePlateFormValid: boolean = false;

    handlePlateDetails(plateString: string): void {
        console.log('Plate details:', plateString);
        this.plate_number.set(plateString || '');
    }

    handleValidationStatus(isValid: boolean): void {
        this.isLicensePlateFormValid = isValid;
        console.log('Form is valid:', isValid);
    }

}
