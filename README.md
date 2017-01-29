# Anti Implicit Submission
Prevent to submit a form with the enter key.

## Description
The browser is going to submit a form with the enter key. However, sometimes I press the enter key to submit a form by mistake. So, this extension disables the implicit submission with the enter key. To submit a form only with a key, press the super key and the enter key, then press the enter key twice: **`⌘ + ↲, ↲, ↲`**. The super key is the `ctrl` key on Windows and Linux, or the `command` key on macOS.

## Download
[Anti Implicit Submission - Chrome Web Store](https://chrome.google.com/webstore/detail/anti-implicit-submission/ofneidmcjkpnemdjjkdmddkjeebfnmff)

## Change Log
See [CHANGELOG.md](https://github.com/noraworld/anti-implicit-submission/blob/master/CHANGELOG.md).

## Usage for developers

```bash
# if you have not installed gulp on global environment yet
$ npm install gulp -g
```

```bash
$ npm install
$ gulp
```

Then, load this extension from **chrome://extensions**.

## Dependencies

* node 6.9.2
* npm 3.10.9
* jquery 3.1.1

Set the jQuery file to `/src/lib/` as `jquery.js`.

## License
All codes of this repository are available under the MIT license. See the [LICENSE](https://github.com/noraworld/anti-implicit-submission/blob/master/LICENSE) for more information.
