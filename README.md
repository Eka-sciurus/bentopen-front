# BentopenFront

## Folders structure

[source](https://medium.com/@dragos.atanasoae_62577/angular-project-structure-guide-small-medium-and-large-projects-e17c361b2029)

```
/src
├── app
│   ├── core
│   │   ├── interceptors
│   │   │   └── auth.interceptor.ts
│   │   ├── guards
│   │   │   └── auth.guard.ts
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   ├── shared
│   │   ├── components
│   │   │   └── navbar/
│   │   │   └── sidebar/
│   │   ├── directives
│   │   │   └── debounce.directive.ts
│   │   ├── pipes
│   │   │   └── currency-format.pipe.ts
│   │   └── shared.module.ts
│   ├── features
│   │   ├── admin
│   │   │   ├── components
│   │   │   │   └── admin-dashboard.component.ts
│   │   │   ├── services
│   │   │   │   └── admin.service.ts
│   │   │   ├── admin.module.ts
│   │   │   └── admin-routing.module.ts
│   │   ├── user
│   │   │   ├── components
│   │   │   │   └── user-profile.component.ts
│   │   │   │   └── user-settings.component.ts
│   │   │   ├── services
│   │   │   │   └── user.service.ts
│   │   │   ├── user.module.ts
│   │   │   └── user-routing.module.ts
│   │   ├── products
│   │   │   ├── components
│   │   │   │   └── product-list.component.ts
│   │   │   │   └── product-details.component.ts
│   │   │   ├── services
│   │   │   │   └── product.service.ts
│   │   │   ├── products.module.ts
│   │   │   └── products-routing.module.ts
│   │   └── state
│   │       ├── reducers
│   │       │   └── auth.reducer.ts
│   │       │   └── user.reducer.ts
│   │       └── actions
│   │           └── auth.actions.ts
│   │           └── user.actions.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets
├── environments
├── styles
├── main.ts
└── index.html
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
