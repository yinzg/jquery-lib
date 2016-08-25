(function ($) {
    $.fn.maxHeight = function (options) {
        var defaults = {
            "color": "green",
            "fontSize": "15px"
        };

        var setting = $.extend({}, defaults, options);

        return this.css({
            "color": setting.color,
            "fontSize": setting.fontSize
        });
    };

})(jQuery);
