import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutocomplete]',
})
export class AutocompleteDirective {
  @Input() appAutocomplete = '';
  @Input() labelForAttribute: string = '';

  @Input() bday: boolean = false;
  @Input() bmonth: boolean = false;
  @Input() bdate: boolean = false;

  AUTOCOMPLETE: any = {
    firstName: 'given-name',
    lastName: 'family-name',
    gender: 'sex',
    streetAddress1: 'shipping street-address address-line1',
    streetAddress2: 'address-line2',
    city: 'address-level2',
    province: 'address-level1',
    country: 'country-name',
    postalCode: 'postal-code',
    phoneNumber: 'tel',
    bday: 'bday-day',
    bmonth: 'bday-month',
    byear: 'bday-year',
  };

  NAMEATTRIBUTE: any = {
    firstName: 'firstname',
    lastName: 'lastname',
    gender: 'sex',
    streetAddress1: 'address-line1',
    streetAddress2: 'address-line2',
    city: 'city',
    province: 'province',
    country: 'country-name',
    postalCode: 'postal-code',
    phoneNumber: 'tel',
    bday: 'bday-day',
    bmonth: 'bday-month',
    byear: 'bday-year',
  };

  constructor(
    private _render2: Renderer2,
    private _elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit(): void {
    if (this.appAutocomplete && this.AUTOCOMPLETE[this.appAutocomplete]) {
      this._render2.setAttribute(
        this._elementRef.nativeElement,
        'autocomplete',
        this.AUTOCOMPLETE[this.appAutocomplete]
      );

      setTimeout(() => {
        this._render2.setAttribute(
          this._elementRef.nativeElement,
          'name',
          this.NAMEATTRIBUTE[this.appAutocomplete]
        );
        this._render2.setAttribute(
          this._elementRef.nativeElement,
          'id',
          this.NAMEATTRIBUTE[this.appAutocomplete]
        );
      });
    }
    if (this.labelForAttribute) {
      this.addLabelForAttribute();
    }
  }

  addLabelForAttribute() {
    this._render2.setAttribute(
      this._elementRef.nativeElement,
      'for',
      this.NAMEATTRIBUTE[this.labelForAttribute]
        ? this.NAMEATTRIBUTE[this.labelForAttribute]
        : this.labelForAttribute
    );
  }
}
