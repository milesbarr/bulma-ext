# Bulma Extensions

A collection of JavaScript enhancements and CSS extensions for the
[Bulma CSS framework](https://bulma.io/).

## Features

### JavaScript Enhancements

- Automatic handling of mobile navigation menu toggles.
- Automatic removal of danger states and error messages when form controls are
  modified.
- Automatic file name updates for file input fields.

### CSS Extensions

- Full-width buttons in mobile navigation menu.
- Themed sections.
- Additional helper classes.

## Installation

1. Include Bulma in your project.
2. Add the following files to your project:
   ```html
   <link rel="stylesheet" href="bulma-ext.css">
   <script src="bulma-ext.js" defer></script>
   ```

## Usage

### Mobile-Sized Container

```html
<div class="container is-max-mobile">
  <!-- Content -->
</div>
```

### Centered Table Cells

```html
<table class="table has-text-centered">
  <!-- Table content -->
</table>
```

### Border Radius Helper

```html
<div class="has-radius">
  <!-- Content -->
</div>
```

### Print Helper

```html
<div class="is-hidden-print">
  <!-- Content to hide when printing -->
</div>
```

### Themed Sections

```html
<section class="section is-light">
  <!-- Light section content -->
</section>

<section class="section is-primary">
  <!-- Primary section content -->
</section>
```

## License

This project is licensed under the [MIT license](LICENSE).
