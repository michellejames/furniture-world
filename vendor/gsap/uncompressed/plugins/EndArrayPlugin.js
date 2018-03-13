/*!
<<<<<<< HEAD
 * VERSION: 0.1.3
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
=======
 * VERSION: 0.1.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {
	
	"use strict";

	_gsScope._gsDefine.plugin({
		propName: "endArray",
		API: 2,
<<<<<<< HEAD
		version: "0.1.3",
=======
		version: "0.1.2",
>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween) {
			var i = value.length,
				a = this.a = [],
				start, end;
			this.target = target;
<<<<<<< HEAD
			this._mod = 0;
=======
			this._round = false;
>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b
			if (!i) {
				return false;
			}
			while (--i > -1) {
				start = target[i];
				end = value[i];
				if (start !== end) {
					a.push({i:i, s:start, c:end - start});
				}
			}
			return true;
		},

<<<<<<< HEAD
		mod: function(lookup) {
			if (typeof(lookup.endArray) === "function") {
				this._mod = lookup.endArray;
=======
		round: function(lookup) {
			if ("endArray" in lookup) {
				this._round = true;
>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b
			}
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			var target = this.target,
				a = this.a,
				i = a.length,
<<<<<<< HEAD
				mod = this._mod,
				e, val;
			if (mod) {
				while (--i > -1) {
					e = a[i];
					target[e.i] = mod(e.s + e.c * ratio, target);
=======
				e, val;
			if (this._round) {
				while (--i > -1) {
					e = a[i];
					target[e.i] = Math.round(e.s + e.c * ratio);
>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b
				}
			} else {
				while (--i > -1) {
					e = a[i];
					val = e.s + e.c * ratio;
					target[e.i] = (val < 0.000001 && val > -0.000001) ? 0 : val;
				}
			}
		}

	});

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }