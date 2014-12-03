x-tag-imports
=============

x-tag-imports is a shim repo that adds support for HTML Imports to X-Tag elements.

## Getting Started

- Add `"x-tag-imports": "x-tag/x-tag-imports"` to your `bower.json`'s dependencies hash
- **OR** from your project dir, run `bower install --save x-tag/x-tag-imports`
- Create a `link` for each element you wish to import. Ex:

```
<!-- import an element written using X-Tag -->
<link rel="import" href="bower_components/x-tag-imports/x-tag-switch.html">
```

*Note: If you're not a fan of bower, you can just clone the imports using git and link to them that way.*
