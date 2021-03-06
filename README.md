# jQuery ellipsis [![Build Status](https://travis-ci.org/aaronhamilton/jquery-ellipsis-interactive.png?branch=master)](https://travis-ci.org/aaronhamilton/jquery-ellipsis-interactive)

Originally built by [Kenji Abe (STAR-ZERO)][kenji]

[kenji]:https://github.com/STAR-ZERO

Multiple-line interactive truncation.
This fork allows using html in custom ellipsis.


## Usage

Fit one line (default behaviour)

```
$('#target').ellipsis();
```

Fit on two lines in the case of two or more lines

```
$('#target').ellipsis(2);
```

Change ellipsis character or use html

```
$('#target').ellipsis(2, '<a href="#" onclick="readMore()">Read more</a>');
```

Whenever you want to reflow the element, just call it the same way, and it'll restore its old text, if you change the text, remember to change the data-ellipsis attribute as well.

## License
jquery-ellipsis-interactive is available under the terms of the [MIT License](https://github.com/aaronhamilton/jquery-ellipsis-interactive/blob/master/LICENSE-MIT).

