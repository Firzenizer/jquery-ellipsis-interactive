/*
Originally built by https://github.com/STAR-ZERO
Forked by Tomi Ruusala https://github.com/Firzenizer/jquery-ellipsis-interactive
*/
(function($) {
    $.fn.ellipsis = function(rows, custom) {

    rows++; // offset
	custom = custom || "…";

        this.each(function() {
            if (!$(this).attr('data-ellipsis')) {$(this).attr('data-ellipsis', $(this).text());}

            var $this = $(this);
            var data_ellipsis = $(this).attr('data-ellipsis');

            $this.text(data_ellipsis);
            var origHeight = $this.height();
            var text = $this.text();

            $this.text('a');
            var rowHeight = $this.height();
            var targetHeight = rowHeight * (rows || 1);

            if (origHeight <= targetHeight) {
                $this.text(data_ellipsis);
                return;
            }

            // Binary search for max length
            var start = 1;
            var end = data_ellipsis.length;

            while (start < end) {
                var length = Math.ceil((start + end) / 2);
                $this.text(text.slice(0, length) + custom);
                if ($this.height() <= targetHeight){
                    start = length;
                } else {
                    end = length - 1;
                }
            }

            $this.html(text.slice(0, start) + custom);
        });

        return this;
    };
}) (jQuery);
