lazyFade.js
======

This [jQuery](http://www.jquery.com) simply fades a row of elements with a lazy effect. The fade of each next element gets delayed slightly what gives a precious touch to the whole transition.

###Demo
Check out a short example of the lazyFade.js:<br>
http://jsfiddle.net/cboppart/ydbxjssk/5/

###Installation
Just include the `lazyFade.js` and call it for your row of elements.
Note: Also make sure that jQuery is defined.

```
<script type="text/javascript" src="path/to/your/lazyFade.js"></script>
```
```
$('.foo').lazyFade({
	reverse: false,
	duration: 250,
	delay: 50,
	opacity: {
		start: 0.01,
		end: 1
	}
});
```
