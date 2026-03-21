/**
 * @name IOperator
 * @description
 * An operator description.
 *
 * @example
 * {
 *   "code": "AVLO",
 *   "name": "Arriva London"
 * }
 *
 * @public
 * @interface IOperator
 * @module REDBUS
 */
export interface IOperator {
	/**
	 * @name code
	 * @description
	 * The operator code.
	 *
	 * @example
	 * {
	 *   "code": "AVLO",
	 *   "name": "Arriva London"
	 * }
	 *
	 * @type string
	 * @public
	 */
	code: string;
	/**
	 * @name name
	 * @description
	 * The operator name.
	 *
	 * @example
	 * {
	 *   "code": "AVLO",
	 *   "name": "Arriva London"
	 * }
	 *
	 * @type string
	 * @public
	 */
	name: string;
}
