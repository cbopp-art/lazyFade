/**
 * lazyFade.js - jQuery Plugin
 * Fades a row of elements with a lazy effect.
 *
 * @dependencies	jQuery v1.5.0 http://jquery.com
 * @author			Cornel Boppart <cornel@bopp-art.com>
 * @copyright		Author
 * @version			1.1.0 (02/11/2014)
 */

;(function ($) {

	var lazyFade = {

		/**
		 * Default settings
		 *
		 */
		settings: {
			reverse: false,
			duration: 500,
			delay: 50,
			opacity: {
				start: 0.01,
				end: 1
			}
		},

		/**
		 * Initializes the plugin
		 *
		 * @param	{object}	options	The custom plugin options (Not yet merged with default settings)
		 * @return	{object}	this	The current element itself
		 */
		init: function (options) {
			var	settings	= $.extend(lazyFade.settings, options),
				index		= (settings.reverse === true) ? this.length : 0;

			return this.each(function () {
				var $this	= $(this);

				lazyFade.fade($this, settings, index);
				(settings.reverse === true) ? --index : ++index;
			});
		},

		/**
		 * Fades a single element to the end opacity
		 *
		 * @param	{object}	$object		The element that should get faded
		 * @param	{object}	settings	All custom plugin settings
		 * @param	{number}	index		Index of the current element
		 * @return	{void}
		 */
		fade: function ($object, settings, index) {
			$object.fadeTo(0, settings.opacity.start);
			$object.delay(settings.delay * index).fadeTo(settings.duration, settings.opacity.end);
		}

	};

	$.fn.lazyFade = function (method) {
		if (lazyFade[method]) {
			return lazyFade[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return lazyFade.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' + method + ' does not exist on jQuery.lazyFade');
		}
	};

})(jQuery);