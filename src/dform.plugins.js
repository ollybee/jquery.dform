/*
 * jQuery dform plugin
 * Copyright (C) 2011 David Luecke <daff@neyeon.de>
 * 
 * Licensed under the MIT license
 */

/**
 * 
 */
(function($) {
	$.fn.placeholder = function(options)
	{
		var key = "placeholder";
		if($(this).val() == '')
		{
			var scoper = this;
			$(this).data(key, options);
			$(this).val(options);
			$(this).focus(function()
			{
				if ($(this).val() == $(this).data(key))
					$(this).val("");
			});
			$(this).blur(function()
			{
				if ($(this).val() == "")
					$(this).val($(this).data(key));
			});
			// Submit handler that clears the field before submit
			$(this).parents("form").submit(function()
			{
				if($(scoper).val() == $(scoper).data(key))
					$(scoper).val("");
			});
			// TODO onreset
		}
		return this;
	};
})(jQuery);
