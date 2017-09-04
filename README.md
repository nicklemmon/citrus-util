# Citrus CSS Framework
The Citrus framework makes use of utility classes for styling, removing the need for modular components, instead, utilizing 'subatomic' design patterns.

## Class Structure
The majority of classes within the framework are generated via mixins.

Each class is constructed as follows:

```css
.<property>(<value>) {
  <property>: <value>;
}
```

In order to make use of media queries:

```css
.<property>(<value>).@<breakpoint>-up {
  @media screen and (min-width: <breakpoint>) {
    <property>: <value>;
  }
}
```

### Examples
```html
<div class="display(flex)"></div>

<div class="display(flex)@md-up"></div>
```
