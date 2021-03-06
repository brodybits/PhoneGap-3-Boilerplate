/*
 * Copyright (C) 2011-2012 Wolfgang Koller
 * 
 * This file is part of GOFG Sports Computer - http://www.gofg.at/.
 * 
 * GOFG Sports Computer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * GOFG Sports Computer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with GOFG Sports Computer.  If not, see <http://www.gnu.org/licenses/>.
 */

cordova.define("cordova/plugin/powermanagement", function(require, exports, module) {
	var exec = require('cordova/exec');
	
	var PowerManagement = function() {};
	
	/**
	 * Acquire a new wake-lock (keep device awake)
	 * 
	 * @param powerMgmtSuccess function to be called when the wake-lock was acquired successfully
	 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
	 */
	PowerManagement.prototype.acquire = function(powerMgmtSuccess,powerMgmtError) {
	    exec(powerMgmtSuccess, powerMgmtError, 'PowerManagement', 'acquire', []);
	}

	/**
	 * Release the wake-lock
	 * 
	 * @param powerMgmtSuccess function to be called when the wake-lock was released successfully
	 * @param errorCallback function to be called when there was a problem while releasing the wake-lock
	 */
	PowerManagement.prototype.release = function(powerMgmtSuccess,powerMgmtError) {
	    exec(powerMgmtSuccess, powerMgmtError, 'PowerManagement', 'release', []);
	}

	/**
	 * Acquire a partial wake-lock, allowing the device to dim the screen
	 *
	 * @param powerMgmtSuccess function to be called when the wake-lock was acquired successfully
	 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
	 */
	PowerManagement.prototype.dim = function(powerMgmtSuccess,powerMgmtError) {
	    exec(powerMgmtSuccess, powerMgmtError, 'PowerManagement', 'acquire', [true]);
	}
	
	var powermanagement = new PowerManagement();
	module.exports = powermanagement;
});

/* DEBUG */ window.console.log('PowerManagement.js loaded...');
