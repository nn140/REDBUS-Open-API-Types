/**
 * @name IFlickrLookupPhoto
 * @description
 * A singular Flickr photo lookup result.
 *
 * @example
 * {
 *   "url": "https://live.staticflickr.com/65535/54444720834_d1ab7dd673_b.jpg",
 *   "username": "X10 lynxman"
 * }
 *
 * @public
 * @interface IFlickrLookupPhoto
 * @module Flickr
 */
export interface IFlickrLookupPhoto {
    /**
	 * @name url
	 * @description
	 * The URL of the Flickr photo.
	 *
	 * @type string
	 * @public
	 */
    url: string
    /**
	 * @name username
	 * @description
	 * The username of the Flickr user who uploaded the photo.
	 *
	 * @type string
	 * @public
	 */
    username: string
}

/**
 * @name IFlickrLookupPhotos
 * @description
 * A list of Flickr photo lookup results.
 *
 * @example
 * [
 *  {
 *    "url": "https://live.staticflickr.com/65535/54668633302_356b3e0e78_o.jpg",
 *    "username": "jimmy73sheng"
 *  },
 *  {
 *    "url": "https://live.staticflickr.com/65535/54444720834_d1ab7dd673_b.jpg",
 *    "username": "X10 lynxman"
 *  }
 * ]
 *
 * @public
 * @type IFlickrLookupPhotos
 * @module Flickr
 */
export type IFlickrLookupPhotos = Array<IFlickrLookupPhoto>