(function($) {
    $.fn.ellipsis = function(rows, custom) {

        // デフォルトオプション
	custom = custom || "…";

        this.each(function() {
            // 原典のデータバインド
            if (!$(this).attr('data-ellipsis')) {$(this).attr('data-ellipsis', $(this).text());}

            // 現在のテキストを取得
            var $this = $(this);
            var data_ellipsis = $(this).attr('data-ellipsis');

            $this.text(data_ellipsis);
            var origHeight = $this.height();
            var text = $this.text();

            // 1行分の高さを取得
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

            $this.text(text.slice(0, start) + custom);
        });

        return this;
    };
}) (jQuery);
