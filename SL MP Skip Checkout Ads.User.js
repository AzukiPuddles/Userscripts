// ==UserScript==
// @name         SL MP Skip Checkout Ads
// @namespace    https://Pudl.es/Contact
// @version      0.1
// @description  Automatically skips the ad page on checkout when you're only buying free stuff. Used to be tolerable before, but now they force you to scroll through 96 items, this is regardless of membership as well.
// @author       AzukiPuddles#0001
// @match        https://marketplace.secondlife.com/orders/checkout/continue
// @icon         https://www.google.com/s2/favicons?sz=64&domain=secondlife.com
// @grant        none
// ==/UserScript==

(function () {
  document.getElementsByClassName("cart-button")[0].click();
})();
