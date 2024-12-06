"use strict";

var issueFlyoutHelper = function issueFlyoutHelper() {
  var issueFlyout = document.querySelector('.issue-flyout');
  if (!issueFlyout) {
    return;
  }

  // 'Order a print copy of the <span class="js-current-issue">current</span> issue'
  // ==>
  // 'Order a print copy of the <span class="js-current-issue">June 2024</span> issue'
  if (issueFlyout.dataset.currentIssueTitle) {
    var currentIssueTitle = issueFlyout.dataset.currentIssueTitle;
    var currentIssueSpan = issueFlyout.querySelector('.js-current-issue');
    if (currentIssueSpan) {
      currentIssueSpan.textContent = currentIssueTitle;
    }
  }
};
window.addEventListener('load', function () {
  issueFlyoutHelper();
});