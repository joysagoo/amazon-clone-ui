import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./features/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { MatFormField } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [  
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule, 
        BrowserAnimationsModule, 
        MatFormFieldModule, 
        FormsModule, 
        MatFormField,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule{

}



