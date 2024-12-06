(function () {
  'use strict';

  // MMO Champion
  // Site ID: 5eb3f873e81c7f4e9287fb57

  setTimeout(function () {
    window.adthrive.slots._slots.forEach((values, key) => {
      if (values.googleTagSlot.getResponseInformation()) {
        if (
          values.googleTagSlot.getResponseInformation().advertiserId == 4918235895
        ) {
          console.log('Raptive - disabling refresh on : ' + key);
          window.adthrive.slotManager.updateRefreshTimeout(key, 0);
        }
      }
    });
  }, 10000);

}());
