/**
 * @name FuelType
 * @description
 * Bus fuel types as an `enum` object.
 *
 * @public
 * @enum FuelType
 * @module REDBUS
 */
export enum FuelType {
	DIESEL = "diesel",
	ELECTRIC = "electric",
	HYBRID = "hybrid",
	HYDROGEN = "hydrogen",
}

/**
 * @name FuelType
 * @description
 * Bus fuel types as a `string` type.
 *
 * @public
 * @enum FuelTypes
 * @module REDBUS
 */
export type FuelTypes = `${FuelType}`;
