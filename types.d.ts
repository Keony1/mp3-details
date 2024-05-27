type Info = {
  duration: number
  bitrate: number
  frequency: number
  layer: 'LAYER I' | 'LAYER II' | 'LAYER III' | 'reserved'
  version: 'MPEG 1' | 'MPEG 2' | 'MPEG 2.5' | 'reserved'
}

/**
 * Loads MP3 metadata
 * @param path the path of the file
 */
declare function load(path: string): Info

/**
 * Loads MP3 metadata
 *
 * @param buffer the file buffer
 * @param size the file size
 
 */
declare function load(buffer: Buffer, size?: number): Info

export { load, Info }
