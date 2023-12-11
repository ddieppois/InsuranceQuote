# InsuranceQuote

Front end API for InsuranceQuote project.

**Commands to run the application**
Node Js is required to run the application.

`npm install` to install all the dependencies.

`npm start` to start the application.

The default port and url is `http://localhost:4200/`.

The UI has been created using angular material UI components.

The api needs the back end InsuranceQuoteAPI to properly calculate any quotes.

Once the user enter all it's information in the form and select one of the car the the insurance takes in account
the user will be able to see the quote and the reference number.

All previous requests are stored and can be seen in a table below the form.

All fields are mandatory and another layer of security has been added on the back end to make sure
that the correct values are sent in the form.

By default, the UI will expect the backend to run on `http://localhost:8080/insurance-quote` but this can be changed.

I faced an issue when trying to create a service that would made a HttpClient call to the back end.
I could not get the HttpClient module loaded, therefore I had to move it to the component itself and not use a service.
Usually I would always use a service in order to create a reusable service. I did not had the time to figure out this issue.

**Workflow**
Once both application are running, the user can go to the UI and enter all the required information on the form.
The application has a dependable set of fields to select a vehicle, based on the json car list provided.
All the factors are taken in account and in the case that a premium cannot be calculated an exception will be thrown by the back end and displayed on the UI.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
