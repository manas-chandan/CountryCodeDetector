import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabulardata',
  templateUrl: './tabulardata.page.html',
  styleUrls: ['./tabulardata.page.scss'],
})
export class TabulardataPage implements OnInit {
  students = [
    {
      "id": "1",
      "name": "A",
      "details": "Circumstances that have capacity to cause Error"
    },
    {
      "id": "2",
      "name": "B",
      "details": "Error occurred but didn't reach patient"
    },
    {
      "id": "3",
      "name": "C",
      "details": "Error reached the patient, but didn't cause harm"
    },
    {
      "id": "4",
      "name": "D",
      "details": "Error reached the patient and required monitoring to confirm that it resulted in no patient harm and\/or required intervention to preclude harm"
    },
    {
      "id": "5",
      "name": "E",
      "details": "Error occurred that may have contributed to or resulted in temporary patient harm and required intervention"
    },
    {
      "id": "6",
      "name": "F",
      "details": "Error occurred that may have contributed to or resulted in temporary patient harm and required initial or prolonged hospitalization"
    },
    {
      "id": "7",
      "name": "G",
      "details": "Error occurred that may have contributed to or resulted in permanent patient harm"
    },
    {
      "id": "8",
      "name": "H",
      "details": "Error occurred that required intervention necessary to sustain life"
    },
    {
      "id": "9",
      "name": "I",
      "details": "Error occurred that may have contributed to or resulted in patients death"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
