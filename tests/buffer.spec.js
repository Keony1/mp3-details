const mp3Info = require('../mp3-details')

describe('buffer', () => {
  it('cbr [plane mp3]', () => {
    const buffer = Buffer.from([0xff, 0xf0, 0x80, 0x00])
    const meta = mp3Info.load(buffer, buffer.length)

    // bitrate 128
    // bitrate (4 * 8) / (128 * 1000) = 0.00025
    expect(meta.duration).toBe(0.00025)
  })

  it('info tag', () => {
    let buffer = Buffer.from([0xff, 0xfb, 0x80, 0x00])
    buffer = Buffer.concat([buffer], 36) //offset of 36 bytes from mp3 frame header
    const xingFrame = Buffer.from([
      0x58, 0x69, 0x6e, 0x67, 0, 0, 0, 0x0f, 0, 0, 0x21, 0x62,
    ])
    buffer = Buffer.concat([buffer, xingFrame])

    const meta = mp3Info.load(buffer, buffer.length)
    expect(meta.duration).toBe(223.24244897959184)
  })

  it('invalid mp3', () => {
    const buffer = Buffer.from([0xff, 0xa0])
    try {
      mp3Info.load(buffer, buffer.length)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toBe('Not a valid MP3 file')
    }
  })
})
