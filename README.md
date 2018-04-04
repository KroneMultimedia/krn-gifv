GIFv JS library - to get a friction free variation of GIFv on almost all browsers, from IE to AndroidWebView


https://help.imgur.com/hc/en-us/articles/208606616-What-is-GIFV-




```html

<video preload="auto" poster="/transparent.gif" data-krn-gifv="1" data-krn-poster="http://Fall.back/image.file.jpg"  playsinline loop muted >
   <source type="video/mp4" src="http://url.to.vide/file.mp4" />
</video>

```



```html
<script>
$(document).ready(function() {
  KRNGIFv.start();
});
</script>
```
