
# App Cadastro
Projeto simples de uma SPA para cadastro de usuários, feito com a plataforma [Angular](https://angular.io/ "Angular's Homepage") v12.0.1+ [Typescript](https://www.typescriptlang.org/).

![alt text](https://github.com/otavio-n/cadastro-angular/raw/master/img/p1.PNG)

## Instalação 
Caso o Angular CLI ainda não esteja instalado, realize o comando a seguir utilizando o gerenciador de pacotes npm no terminal:
```
npm install -g @angular/cli
```
Crie um aplicativo inicial com o comando CLI, fornecendo o nome desejado, `my-app` por exemplo:
```
ng new my-app
```
Após a instalação, navegue até a pasta e abra o aplicativo:
```
cd my-app
ng serve --open
```
A partir daí, já é possível construir a estrutura frontend desejada.

## Styling
O projeto em questão utiliza uma extensão do CSS, o chamado [Sass](https://sass-lang.com/), embora ainda não tenha se aproveitado de suas vantagens, como hereditariedade entre outros. Mas o Sass se mostra muito útil com o aumento da complexidade do projeto.

Priorizando a agilidade nos primeiros passos da estilização, também foi usada a biblioteca [Bootstrap](https://getbootstrap.com/) v5.0.1.  Para utilizá-lo, basta adicionar o `<link>`stylesheet fornecido no [site](https://getbootstrap.com/docs/5.0/getting-started/introduction/) no `<head>`do arquivo HTML principal.

## Servidor
No backend foi usado o [Node.js](https://nodejs.org/en/) v14.15.0 e as dependências [express](https://expressjs.com/pt-br/), [body-parser](https://www.npmjs.com/package/body-parser) e [cors](https://www.npmjs.com/package/cors). Para instalar com o npm no terminal utilize o seguinte comando:
```
npm install express body-parser cors
```

## Próximos Passos
- [ ]  Acrescentar cadastro em um banco de dados
- [ ]  Tratar dados sensíveis


# RegistrationApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

> Written with [StackEdit](https://stackedit.io/).