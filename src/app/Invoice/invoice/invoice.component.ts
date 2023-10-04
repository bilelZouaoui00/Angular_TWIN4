import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoiceId: number | undefined;
  invoiceActive: boolean | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.invoiceId = +params['id'];
     if (params['active'] != undefined)
      this.invoiceActive = params['active'] === 'true';

      console.log("invoice Id & Status : \n", this.invoiceId," & ",this.invoiceActive);
    });
    if (this.invoiceActive === undefined)
    this.route.params.subscribe(params => {
      this.invoiceId = +params['id'];
     if (params['active'] != undefined)
      this.invoiceActive = params['active'] === 'true';

      console.log("invoice Id & Status : \n", this.invoiceId," & ",this.invoiceActive);
    });
  }
}
