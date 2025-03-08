# Bulma Extensions

A collection of JavaScript enhancements and CSS extensions for the [Bulma CSS framework](https://bulma.io/).

## Features

### JavaScript Enhancements

- **Navbar Burger Menu**: Automatic handling of mobile navigation menu toggles.
- **Form Validation**: Automatic removal of danger states and error messages when form controls are modified.
- **File Input**: Automatic file name updates for file input fields.

### CSS Extensions

- **Hidden Attribute Fix**: Proper handling of the HTML `hidden` attribute.
- **Responsive Navbar**: Full-width buttons in mobile navigation menu.
- **Table Utilities**: Centered text alignment for tables.
- **Container Sizes**: Additional container size for mobile-optimized layouts.
- **Border Radius**: Helper class for consistent border radius.
- **Print Utilities**: Helper class to hide elements when printing.
- **Section Colors**: Enhanced section styling with HSL color variables.
  - Light section with scheme-based background.
  - Primary section with inverted text colors.

## Installation

1. Include Bulma in your project.
2. Add the following files to your project:
   ```html
   <link rel="stylesheet" href="bulma-ext.css">
   <script src="bulma-ext.js"></script>
   ```

## Usage

### JavaScript Features

The JavaScript enhancements are automatically initialized when the script is loaded. No additional configuration is needed.

### CSS Classes

#### Container
```html
<div class="container is-max-mobile">
  <!-- Content -->
</div>
```

#### Tables
```html
<table class="table has-text-centered">
  <!-- Table content -->
</table>
```

#### Border Radius
```html
<div class="has-radius">
  <!-- Content -->
</div>
```

#### Print Utilities
```html
<div class="is-hidden-print">
  <!-- Content to hide when printing -->
</div>
```

#### Sections
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
