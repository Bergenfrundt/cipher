# Cipher
A JavaScript plugin that makes it easier to cipher and decipher your strings.

## Usage
To get Cipher, download the file and link to it in your HTML document like so:

```html
<script type="application/javascript" src="path/to/cipher.js"></script>
```

Now you can cipher and decipher basically everything. All functions are accessible via the Cipher object.

To cipher something using the Atbash cipher, use the following snippet:

```javascript
Cipher.to('atbash', 'foo bar');
```

To cipher something using the Caesar cipher using a right shift of three, use the following snippet:

```javascript
Cipher.to('caesar', 'foo bar', 3);
```

Here's the general usage of the Cipher plugin:

```
Cipher['to'/'from'](type, string [, key]);
```

Note that the key is only needed for the Caesar cipher.

## License
Cipher is under the MIT License.
