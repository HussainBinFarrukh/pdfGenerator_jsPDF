import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UserOptions} from 'jspdf-autotable';
import 'jspdf-autotable';
interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('content', {static: false}) content: ElementRef;


  rowData: any;
  data =[];
  downloadPDF2() {
    let doc = new jsPDF() as jsPDFWithPlugin;
    doc.setTextColor(0, 255, 0);
    for(let i in this.user.result){
      this.data.push(this.rowData= Object.values(this.user.result[i]) );
    }
    console.log( this.data)
    doc.autoTable({
      head: [['id', 'Company Name', 'Business Type', 'Tenent', 'First Name', 'Last Name']],
      body: this.data,
      startY: 10,
      //pageBreakl: 'avoid',
      theme: 'striped',
      styles: {
          overflow: 'linebreak',
          fontSize: 12,
          valign: 'middle'
      },
      alternateRowStyles: {
        // textColor: 'yellow'
        // fillColor: [255, 255, 255]
        },
        
      columnStyles: {
          0: { 
            halign: 'left',
            cellWidth: 15,
            
          }, 
          1: {
              fontStyle: 'bold',
              halign: 'left', 
              textColor: 'blue'
          },
          2: {
              //fontStyle: 'bold',
              halign: 'center', 
          },
          3: {
              //fontStyle: 'bold',
              halign: 'center', 
          },
          4: {
            //fontStyle: 'bold',
            halign: 'center', 
          },
          5: {
            //fontStyle: 'bold',
            halign: 'center', 
          },
      } 
    }
    )
  doc.save('DataToPDF.pdf');
  }

  downloadPDF() {
    const content = this.content.nativeElement;
    let doc = new jsPDF();
    html2canvas(content).then((canvas) => {
      console.log(canvas)
      var pdfData = canvas.toDataURL('image/png')
      var height = canvas.height * 350/ canvas.width;
      doc.addImage(pdfData, 20, 20, 350, height);
      doc.save('ImagePDF.pdf');
    })
  }

  downloadPDF1() {
    const content = this.content.nativeElement;
    let doc = new jsPDF();  
    doc.html(content.innerHTML,{
      callback: function (doc) {      
        doc.save('htmlPDF.pdf');
      }
    });
  }


/*Styling options
theme: 'striped'|'grid'|'plain'|'css' = 'striped'
styles: StyleDef
headStyles: StyleDef
bodyStyles: StyleDef
footStyles: StyleDef
alternateRowStyles: StyleDef
columnStyles: {&columnDataKey: StyleDef} Note that the columnDataKey is normally the index of the column, but could also be the dataKey of a column if content initialized with the columns property
StyleDef:

font: 'helvetica'|'times'|'courier' = 'helvetica'
fontStyle: 'normal'|'bold'|'italic'|'bolditalic' = 'normal'
overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'normal'
fillColor: Color? = null
textColor: Color? = 20
cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: number? = 10
minCellHeight: number = 0
halign: 'left'|'center'|'right' = 'left'
valign: 'top'|'middle'|'bottom' = 'top'
fontSize: number = 10
cellPadding: Padding = 10
lineColor: Color = 10
lineWidth: number = 0 */
  user ={  result:[  {
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },
  {
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },
  {
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },
  {
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  }
  ,
  {
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '500',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '600',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  },{
    "id": '700',
    'companyName': 'visionet',
    'businessType': 'food',
    'tenent': '1-6',
    'firstName': 'john',
    'lastName': 'doe'
  }
]
}
}
