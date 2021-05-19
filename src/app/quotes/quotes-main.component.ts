import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CallAPIService } from '../services/call-api.service';


@Component({
  selector: 'app-qoutes-main',
  templateUrl: './quotes-main.component.html',
  styleUrls: ['./quotes-main.component.css']
})
export class QuotesMainComponent implements OnInit {

  title: string = 'What quote is in your mind?';
  quotesContainer: FormGroup;
  qoutes: FormArray;
  qoute = new FormControl('', [
    Validators.required,
    Validators.maxLength(160)]);
  removeIndex: any;
  showAlert: boolean = false;
  message: string = '';
  quoteDay: any = {
    author: '',
    content: ''
  }


  constructor(private formBuilder: FormBuilder, private apiQuote: CallAPIService) {
    this.quotesContainer = this.formBuilder.group({
      quotes: this.formBuilder.array([])
    });
    this.qoutes = <FormArray>this.quotesContainer.get('quotes');
  }

  ngOnInit(): void {
    this.apiQuote.getQuoteDay().subscribe((response: any) => {
      const contents = response.contents.quotes[0];
      this.quoteDay['author'] = contents.author;
      this.quoteDay['content'] = contents.quote;
    }, error => {
      this.showAlert = true;
      this.message = 'Something went wrong. Please check your internet connection.';
    })
  }

  get allQuotes() {
    return this.qoutes.controls;
  }

  add() {
    this.qoutes.push(this.formBuilder.group({
      publicationDate: new FormControl(new Date().toUTCString()),
      content: new FormControl(this.qoute.value)
    }));
    this.qoute.setValue('');
  }

  showDeleteBtn(index: number) {
    this.removeIndex = index;
  }

  hideDeleteBtn() {
    this.removeIndex = '';
  }

}
