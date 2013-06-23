/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

    test('one line ellipsis', function() {
        $('#one').ellipsis();
        var text = $('#one').text();
        equal(text.lastIndexOf('…'), text.length - 1);
        equal($('#one').height(), $('#ref-height').height());
    });

    test('two line ellipsis', function() {
        $('#two').ellipsis(2);
        var text = $('#two').text();
        equal(text.lastIndexOf('…'), text.length - 1);
        equal($('#two').height(), $('#ref-height').height() * 2);
    });

    test('one line ellipsis, change char', function() {
        $('#one-char').ellipsis(1,'**'});
        var text = $('#one-char').text();
        equal(text.lastIndexOf('**'), text.length - 2);
        equal($('#one-char').height(), $('#ref-height').height());
    });

    test('two line ellipsis, change char', function() {
        $('#two-char').ellipsis(2, '**');
        var text = $('#two-char').text();
        equal(text.lastIndexOf('**'), text.length - 2);
        equal($('#two-char').height(), $('#ref-height').height() * 2);
    });

    test('mulitple element', function() {
        expect(6);
        $('#multi p').ellipsis();
        $('#multi p').each(function() {
            var text = $(this).text();
            equal(text.lastIndexOf('…'), text.length - 1);
            equal($(this).height(), $('#ref-height').height());
        });
    });

}(jQuery));
