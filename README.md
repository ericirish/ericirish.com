# Foundation Pug Boilerplate

The base project for a static Foundation site built with Pug.

## QuickStart

```bash
$ git clone git@github.com:springbox/foundation-pug-boilerplate
...
$ yarn
...
$ yarn watch
```

## Getting Started

### Prerequisites

[yarn](https://yarnpkg.com/)

If you do not have Yarn, run:

```bash
$ npm install -g yarn
```

### Installing

This project requires Node 6.x or greater.

```bash
$ git clone git@github.com:springbox/foundation-pug-boilerplate
$ yarn
```

## Running

The following are commands to be run with `yarn`:

### Build

Compiles the `pug` templates and `sass` modules into the `/dist` directory.

```bash
$ yarn build
```

### Lint

Runs `sass-lint` and `pug-lint` on the uncompiled source.

```bash
$ yarn lint
```

### Watch

Builds the project, initializes `Browser-sync`, and watches the source files.

```bash
$ yarn watch
```

View your project at [http://localhost:3000/](http://localhost:3000/)

## Coding Standards

### SASS

This project follows a [mobile-first](https://www.mightyminnow.com/2013/11/what-is-mobile-first-css-and-why-does-it-rock/) sass style.  This means that base rules and small styles will be written first, with  medium, large and up styles being added with `@include breakpoint()` mixins.  

Example:

```scss
.some-div {
  background-color: black;
  color: white;
  height: 100px;

  // medium styles
  @include breakpoint(medium-only) {
    height: 200px;
  }

  // large styles
  @include breakpoint(large-only) {
    height: 300px;
  }

  // xlarge styles
  @include breakpoint(xxlarge-only)...
}
```

See the [Foundation Breakpoint Mixin documentation](https://foundation.zurb.com/sites/docs/media-queries.html#the-breakpoint-mixin) for further examples.

### Linting

This project utilizes linters to enforce coding standards:

1. [sass-lint](https://github.com/sasstools/sass-lint) | [Rules](https://github.com/sasstools/sass-lint/tree/master/docs/rules)
2. [pug-lint](https://github.com/pugjs/pug-lint) | [Rules](https://github.com/pugjs/pug-lint/blob/master/docs/rules.md)

## Built With

* [Browser-Sync](https://www.browsersync.io/)
* [Foundation Sites](http://foundation.zurb.com/sites/docs/)
* [SASS](http://sass-lang.com/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Yarn](https://yarnpkg.com/)
