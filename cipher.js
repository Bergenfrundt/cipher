var Cipher = {
	// Cipher
	to: function (type, string, key) {
		type = type || 'atbash';
		string = string || '';
		key = key || 3;
		switch (type) {
			case 'base64':
				return btoa(string);
				break;
			case 'atbash':
				return;
				break;
			case 'caesar':
				return;
				break;
			default:
				return false;
		}
	},
	// Decipher
	from: function (type, string, key) {
		type = type || 'atbash';
		string = string || '';
		key = key || 3;
		switch (type) {
			case 'base64':
				return atob(string);
				break;
			case 'atbash':
				return;
				break;
			case 'caesar':
				return;
				break;
			default:
				return false;
		}
	},
	// Atbash
	atbash: function (string) {
		//
	},
	// Caesar
	caesar: function (string, key) {
		//
	}
};
