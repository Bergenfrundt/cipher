# Cipher
A JavaScript plugin that makes it easier to cipher and decipher your strings.

## Usage
All functions are accessible via the Cipher object.

General Usage:

	`Cipher.[to/from](type, string [, key]);`

Note that the key is only needed for the Caesar cipher.

To cipher something using the Atbash cipher, use the following snippet:

	`Cipher.to('atbash', 'foo bar');`

## License
Cipher is under the MIT License.
