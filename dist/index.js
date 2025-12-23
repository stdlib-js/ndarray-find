/** @license Apache-2.0 */

'use strict';

/**
* Return a new ndarray containing the first elements which pass a test implemented by a predicate function along one or more ndarray dimensions.
*
* @module @stdlib/ndarray-find
*
* @example
* var isEven = require( '@stdlib/assert-is-even' ).isPrimitive;
* var array = require( '@stdlib/ndarray-array' );
* var find = require( '@stdlib/ndarray-find' );
*
* // Create an input ndarray:
* var x = array( [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ] ] );
* // returns <ndarray>
*
* // Perform reduction:
* var out = find( x, isEven );
* // returns <ndarray>
*
* var v = out.get();
* // returns 2.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
