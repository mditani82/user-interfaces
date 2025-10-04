import { DatePipe } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from './translate.pipe';

// Constants for better maintainability
const PLATE_SOURCES = [
    'Abu Dhabi',
    'Ajman',
    'Dubai',
    'Fujairah',
    'Ras Al Khaimah',
    'Sharjah',
    'Umm Al Quwain',
] as const;

const PLATE_CATEGORIES = [
    'Private',
    'Commercial',
    'Government',
    'Diplomatic',
    'Public',
    'Transport',
] as const;

const PLATE_CODES = ['Blue', 'Green', 'Red', 'White'] as const;

type PlateSource = (typeof PLATE_SOURCES)[number] | '';
type PlateCategory = (typeof PLATE_CATEGORIES)[number] | '';
type PlateCode = (typeof PLATE_CODES)[number] | '';

interface IPlateDetails {
    plate_number: string;
    plate_source: PlateSource;
    plate_category: PlateCategory;
    plate_code: PlateCode;
    plate_license_expiry: Date | null;
}

@Component({
    selector: 'app-user-parking-tooltip-cust-kj',
    template: `
        <div class="flex flex-col gap-4">
            <!-- Plate Number -->
            <div class="flex flex-col">
                <label for="plate-number">Plate Number</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        [(ngModel)]="plateDetails.plate_number"
                        (ngModelChange)="onInputChange()"
                        placeholder="Plate Number"
                        data-testid="plate-number-input"
                    />
                </mat-form-field>
            </div>

            <!-- Plate Source -->
            <div class="flex flex-col">
                <label for="plate-source">Plate Source</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        [(ngModel)]="plateDetails.plate_source"
                        (ngModelChange)="onInputChange()"
                        placeholder="Plate Source"
                        data-testid="plate-source-select"
                    >
                        <mat-option value=""></mat-option>
                        @for (source of plateSources; track source) {
                            <mat-option [value]="source">{{
                                source
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>

            <!-- Plate Category -->
            <div class="flex flex-col">
                <label for="plate-category">Plate Category</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        [(ngModel)]="plateDetails.plate_category"
                        (ngModelChange)="onInputChange()"
                        placeholder="Plate Category"
                        data-testid="plate-category-select"
                    >
                        <mat-option value=""></mat-option>
                        @for (category of plateCategories; track category) {
                            <mat-option [value]="category">{{
                                category
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>

            <!-- Plate Code -->
            <div class="flex flex-col">
                <label for="plate-code">Plate Code</label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        [(ngModel)]="plateDetails.plate_code"
                        (ngModelChange)="onInputChange()"
                        [placeholder]="'EXPLORE.PARKING_PLATE_CODE' | translate"
                        data-testid="plate-code-select"
                    >
                        <mat-option value=""></mat-option>
                        @for (code of plateCodes; track code) {
                            <mat-option [value]="code">{{ code }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>

            <!-- Plate License Expiry -->
            <div class="flex flex-col">
                <label for="plate-expiry">Plate Expiry Date</label>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript date-picker-field"
                >
                    <input
                        matInput
                        [matDatepicker]="picker"
                        [(ngModel)]="plateDetails.plate_license_expiry"
                        (ngModelChange)="onInputChange()"
                        (click)="picker.open()"
                        placeholder="Select Expiry Date"
                        readonly
                        data-testid="plate-expiry-input"
                    />
                    <mat-datepicker-toggle
                        matSuffix
                        [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                </mat-form-field>
            </div>
        </div>
    `,
    styles: [
        `
            .no-subscript ::ng-deep .mat-mdc-form-field-subscript-wrapper {
                display: none;
            }
            .date-picker-field input {
                cursor: pointer;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        TranslatePipe,
        FormsModule,
    ],
    providers: [DatePipe],
})

/**

    How to use:
    -----------
  
  
    // HTML
    <app-user-parking-tooltip-cust-kj 
       [plateDetailsString]="plate_number()"
        (plateDetailsChange)="handlePlateDetails($event)" 
        (isValidChange)="handleValidationStatus($event)"
    />
 

    // TS File
    isLicensePlateFormValid: boolean = false;

    handlePlateDetails(plateString: string): void {
        this.plate_number.set(plateString || '');
    }

    handleValidationStatus(isValid: boolean): void {
        this.isLicensePlateFormValid = isValid;
    }
 */
export class ParkingToolTipMenu implements OnInit, OnChanges {
    @Input() plateDetailsString?: string;
    @Output() plateDetailsChange = new EventEmitter<string>();
    @Output() isValidChange = new EventEmitter<boolean>();

    private datePipe = inject(DatePipe);

    // Public constants for template
    public readonly plateSources = PLATE_SOURCES;
    public readonly plateCategories = PLATE_CATEGORIES;
    public readonly plateCodes = PLATE_CODES;

    public plateDetails: IPlateDetails = this.createEmptyPlateDetails();
    public concatenatedString = '';
    public isValid = false;

    ngOnInit(): void {
        this.initializePlateDetails();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['plateDetailsString']) {
            this.initializePlateDetails();
        }
    }

    onInputChange(): void {
        this.concatenatedString = this.buildConcatenatedString();
        this.updateValidationStatus();
        this.plateDetailsChange.emit(this.concatenatedString);
    }

    private initializePlateDetails(): void {
        if (this.isValidPlateDetailsString(this.plateDetailsString)) {
            this.parsePlateDetailsString(this.plateDetailsString);
        } else {
            this.resetPlateDetails();
        }
    }

    private isValidPlateDetailsString(value: unknown): value is string {
        return typeof value === 'string' && value.trim() !== '';
    }

    private createEmptyPlateDetails(): IPlateDetails {
        return {
            plate_number: '',
            plate_source: '',
            plate_category: '',
            plate_code: '',
            plate_license_expiry: null,
        };
    }

    private resetPlateDetails(): void {
        this.plateDetails = this.createEmptyPlateDetails();
        this.concatenatedString = '';
        this.updateValidationStatus();
    }

    private updateValidationStatus(): void {
        const previousValidState = this.isValid;
        this.isValid = this.isPlateDetailsValid();

        if (previousValidState !== this.isValid) {
            this.isValidChange.emit(this.isValid);
        }
    }

    private isPlateDetailsValid(): boolean {
        const {
            plate_number,
            plate_source,
            plate_category,
            plate_code,
            plate_license_expiry,
        } = this.plateDetails;

        return !!(
            plate_number?.trim() &&
            plate_source &&
            plate_category &&
            plate_code &&
            plate_license_expiry &&
            !isNaN(plate_license_expiry.getTime())
        );
    }

    private parsePlateDetailsString(plateString: string): void {
        const parts = plateString.split('|').map((part) => part.trim());

        if (!parts.some((part) => part !== '')) {
            this.resetPlateDetails();
            return;
        }

        this.resetPlateDetails();

        const [
            plateNumber = '',
            plateSource = '',
            plateCategory = '',
            plateCode = '',
            plateExpiry = '',
        ] = parts;

        this.plateDetails.plate_number = plateNumber;
        this.plateDetails.plate_source = this.validatePlateSource(plateSource);
        this.plateDetails.plate_category =
            this.validatePlateCategory(plateCategory);
        this.plateDetails.plate_code = this.validatePlateCode(plateCode);

        if (plateExpiry) {
            const parsedDate = new Date(plateExpiry);
            if (!isNaN(parsedDate.getTime())) {
                this.plateDetails.plate_license_expiry = parsedDate;
            }
        }

        this.concatenatedString = this.buildConcatenatedString();
        this.updateValidationStatus();
    }

    private validatePlateSource(value: string): PlateSource {
        return PLATE_SOURCES.includes(value as any)
            ? (value as PlateSource)
            : '';
    }

    private validatePlateCategory(value: string): PlateCategory {
        return PLATE_CATEGORIES.includes(value as any)
            ? (value as PlateCategory)
            : '';
    }

    private validatePlateCode(value: string): PlateCode {
        return PLATE_CODES.includes(value as any) ? (value as PlateCode) : '';
    }

    private buildConcatenatedString(): string {
        const parts: string[] = [];

        if (this.plateDetails.plate_number) {
            parts.push(this.plateDetails.plate_number);
        }

        if (this.plateDetails.plate_source) {
            parts.push(this.plateDetails.plate_source);
        }

        if (this.plateDetails.plate_category) {
            parts.push(this.plateDetails.plate_category);
        }

        if (this.plateDetails.plate_code) {
            parts.push(this.plateDetails.plate_code);
        }

        if (this.plateDetails.plate_license_expiry) {
            const formattedDate = this.datePipe.transform(
                this.plateDetails.plate_license_expiry,
                'yyyy-MM-dd',
            );
            if (formattedDate) {
                parts.push(formattedDate);
            }
        }

        return parts.join(' | ');
    }
}
