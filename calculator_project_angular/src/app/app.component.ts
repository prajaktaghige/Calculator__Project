import { Component } from '@angular/core';
import { HttpClient} from'@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  baseUrl="http://13.232.156.3:8080/cal/";
  

constructor (public http:HttpClient)
{

}
	num1=0;
  num2=0;
  result=0;
  add()
  {
    let url=this.baseUrl +'add'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>
    {
      this.result=data;
    });
  }
  sub()
  {
    let url=this.baseUrl +'sub'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>
    {
      this.result=data;
    });
  }
    
  mult()
  {
    let url=this.baseUrl +'mult'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>
    {
      this.result=data;
    });
  }
  div()
  {
    let url=this.baseUrl +'div'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>
    {
      this.result=data;
    });
  }
  mod()
  {
    let url=this.baseUrl +'mod'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>
    {
      this.result=data;
    });
  }
  
}