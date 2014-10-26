fadeDelay.js
======

This [jQuery](http://www.jquery.com) Plugin simply fades a row of elements but in a smoothly way. The fade of each next element gets delayed slightly what gives to the whole transition a precious touch.

###Demo
Coming soon...

###Installation
Just include the `fadeDelay.js` and call it for your row of elements.
Note: Also make sure that jQuery is defined.

```
<script type="text/javascript" src="path/to/your/fadeDelay.js"></script>
```
```
$('.foo').fadeDelay({
	duration: 250,
	delay: 50,
	opacity: {
		start: 0.01,
		end: 1
	}
});
```
