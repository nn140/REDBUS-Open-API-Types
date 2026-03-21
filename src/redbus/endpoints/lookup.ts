import type { IFlickrLookupPhotos } from '../../flickr/endpoints/lookup';
import type { FuelType, FuelTypes } from '../common';
import type { BusDecks } from '../common/decks';
import type { IOperator } from '../common/operator';

/**
 * @name IRegistrationLookupResult
 * @description
 * A registration plate lookup result.
 *
 * @example
 * {
 *  "vehicleReg": "LV23EYZ",
 *  "code": "ES32",
 *  "pictures": [
 *    {
 *      "url": "https://live.staticflickr.com/65535/54668633302_356b3e0e78_o.jpg",
 *      "username": "jimmy73sheng"
 *    },
 *    {
 *      "url": "https://live.staticflickr.com/65535/54444720834_d1ab7dd673_b.jpg",
 *      "username": "X10 lynxman"
 *    }
 *  ],
 *  "make": "Wright StreetDeck Electroliner",
 *  "type": "electric",
 *  "decks": 2,
 *  "features": [
 *    "USB-A"
 *  ],
 *  "isElectric": true,
 *  "isRunning": true,
 *  "operator": {
 *    "code": "AVLO",
 *    "name": "Arriva London"
 *  }
 * }
 *
 * @public
 * @interface IRegistrationLookupResult
 * @module REDBUS
 */
export interface IRegistrationLookupResult {
	/**
	 * @name operator
	 * @description
	 * The operator name and code who operate/own this vehicle (bus).
	 * **WARNING** Buses using the registration plate that starts with "LT" (NB4L buses) are owned by Transport For London, and not the operator.
	 *
	 * @type IOperator
	 * @public
	 */
	operator: IOperator;
	/**
	 * @name decks
	 * @description
	 * The decks of the bus.
	 *
	 * @example
	 * import { BusDecks } from "redbus-api-types";
	 *
	 * BusDecks.SINGLE; // (1) Single Decker bus
	 * BusDecks.DOUBLE; // (2) Double Decker bus
	 *
	 * @type BusDecks | number
	 * @public
	 */
	decks: BusDecks | number;
	/**
	 * @name vehicleReg
	 * @description
	 * The vehicle registration plate.
	 *
	 * @type string
	 * @public
	 */
	vehicleReg: string;
	/**
	 * @name code
	 * @description
	 * The fleet code.
	 *
	 * @type string
	 * @public
	 */
	code: string;
	/**
	 * @name pictures
	 * @description
	 * The pictures of the bus from Flickr.
	 *
	 * @type IFlickrLookupPhotos
	 * @public
	 */
	pictures: IFlickrLookupPhotos;
	/**
	 * @name make
	 * @description
	 * The make/model/name of this bus.
	 *
	 * @example
	 * "Wright StreetDeck Electroliner"
	 *
	 * @type string
	 * @public
	 */
	make: string;
	/**
	 * @name type
	 * @description
	 * The fuel type of this bus.
	 *
	 * @example
	 * "diesel"
	 *
	 * @type FuelType | FuelTypes | string
	 * @public
	 */
	type: FuelType | FuelTypes | string;
	/**
	 * @name isElectric
	 * @description
	 * Indicates if the bus is electric.
	 *
	 * @type boolean
	 * @public
	 */
	isElectric: boolean;
	/**
	 * @name isRunning
	 * @description
	 * Indicates if the bus is currently running (is it running or withdrawn?).
	 *
	 * @type boolean
	 * @public
	 */
	isRunning: boolean;
}
