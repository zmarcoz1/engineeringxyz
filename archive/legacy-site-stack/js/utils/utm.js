// utils/utm.js
// Utility functions for capturing and storing UTM parameters. These
// parameters are recorded with lead submissions to attribute marketing
// campaigns. Parameters are stored in sessionStorage so they persist
// during the user's session.
(function() {
  'use strict';

  /**
   * Parse the current URL's query string for utm_* parameters.
   * @returns {Object} a mapping of UTM parameter keys to values.
   */
  function getUtmParams() {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    ['source','medium','campaign','term','content'].forEach(key => {
      const val = params.get(`utm_${key}`);
      if (val) {
        utm[`utm_${key}`] = val;
      }
    });
    return utm;
  }

  /**
   * Save UTM parameters from the current URL into sessionStorage. If
   * parameters already exist, they are not overwritten.
   */
  function storeUtmParams() {
    try {
      const existing = sessionStorage.getItem('utm_params');
      if (existing) return;
      const utm = getUtmParams();
      if (Object.keys(utm).length > 0) {
        sessionStorage.setItem('utm_params', JSON.stringify(utm));
      }
    } catch (e) {
      console.warn('UTM storage failed:', e);
    }
  }

  /**
   * Retrieve stored UTM parameters from sessionStorage.
   * @returns {Object} the stored UTM parameters or an empty object
   */
  function getStoredUtmParams() {
    try {
      const data = sessionStorage.getItem('utm_params');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // Store parameters on page load
  document.addEventListener('DOMContentLoaded', storeUtmParams);

  // Expose helper functions globally for other scripts
  window.utmUtils = {
    storeUtmParams,
    getStoredUtmParams
  };
})();