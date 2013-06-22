# jQuery ellipsis [![Build Status](https://travis-ci.org/aaronhamilton/jquery-ellipsis.png?branch=master)](https://travis-ci.org/aaronhamilton/jquery-ellipsis)

Support multiple lines ellipsis

[http://plugins.jquery.com/ellipsis/](http://plugins.jquery.com/ellipsis/)

## Usage

Fit one line (default behaviour)

```
$('#target').ellipsis();
```

Fit on two lines in the case of two or more lines

```
$('#target').ellipsis({
    row: 2
});
```

Change ellipsis character

```
$('#target').ellipsis({
    row: 2,
    char: '**'
});
```

Whenever you want to reflow the element, just call it the same way, and it'll restore its old text, if you change the text, remember to change the data-ellipsis attribute as well.

## License
jquery-ellipsis is available under the terms of the [MIT License](https://github.com/aaronhamilton/jquery-ellipsis/blob/master/LICENSE-MIT).

