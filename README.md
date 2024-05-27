# mp3info

Get the information about the MP3 file, including its duration in **milliseconds**

**Free of dependencies**.

Supports MP3 files with:

[x] id3v2 tags<br>
[x] xing/info tag<br>
[] lame tag<br>

## Usage

```javascript
const mp3info = require('mp3info')

// Load MP3 info from a path
const info = mp3info.load('file.mp3')
console.log(info)

// Load MP3 info from a buffer
const fs = require('fs')
const buffer = fs.readFileSync('file.mp3')
const infoFromBuffer = mp3info.load(buffer, buffer.length)
console.log(infoFromBuffer)
```

## API

### mp3info.load(path)

Loads MP3 metadata from a file path.

Parameters

- `path` (`string`): Path to the MP3 file.

Returns:

- `Info`: Object containing information about the MP3 file, including its duration in seconds

### mp3info.load(buffer, size)

Loads MP3 metadata from a buffer.

Parameters

- `buffer` (`Buffer`): The buffer containing the MP3 file data.

- `Info`: Object containing information about the MP3 file, including its duration in seconds

### Info Object

The returned `Info` object contains the following properties:

- `duration` (`number`): The duration of the MP3 in seconds.
- `bitrate` (`number`)
- `frequency` (`number`)
- `layer` (`string`)
- `version` (`string`)

# Contact

For questions, suggestions, bugs or even to add support for "weird" mp3 encoding, please contact me.
