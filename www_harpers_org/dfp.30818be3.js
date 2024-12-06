var gptAdSlots = [];
var adLeaderboard = document.getElementById('ad-leaderboard');
var adBillboard = document.getElementById('ad-billboard');

googletag.cmd.push(function () {
  var mappingBillboard = googletag
    .sizeMapping()
    .addSize([1024, 0], [970, 250]) // Desktop
    .addSize([0, 0], [300, 250]) // Mobile
    .build();

  // leaderboard ads are served inside the content container, so we adjust sizes a bit
  var mappingLeaderboard = googletag
    .sizeMapping()
    .addSize([1170, 0], [728, 90]) // Tablet
    .addSize([0, 0], [300, 250]) // Mobile
    .build();

  var mappingSidebar = googletag
    .sizeMapping()
    .addSize(
      [0, 0],
      [
        [300, 250],
        [300, 600],
      ]
    ) // Supports both sizes for all devices
    .build();

  gptAdSlots[0] = googletag
    .defineSlot(
      '/1064822/2023-billboard',
      [
        [970, 250],
        [300, 250],
      ],
      'div-gpt-ad-1680873730013-0'
    )
    .defineSizeMapping(mappingBillboard)
    //setCollapseEmptyDiv(true).
    .addService(googletag.pubads());

  gptAdSlots[1] = googletag
    .defineSlot(
      '/1064822/2023-leaderboard',
      [
        [728, 90],
        [300, 250],
      ],
      'div-gpt-ad-1680891712583-0'
    )
    .defineSizeMapping(mappingLeaderboard)
    .addService(googletag.pubads());

  gptAdSlots[2] = googletag
    .defineSlot(
      '/1064822/2023-sidebar-rectangle-1',
      [300, 250],
      'div-gpt-ad-1680871268361-0'
    )
    // .defineSizeMapping(mappingSidebar)
    .addService(googletag.pubads());

  gptAdSlots[3] = googletag
    .defineSlot(
      '/1064822/2023-sidebar-rectangle-2',
      [
        [300, 250],
        [300, 600],
      ],
      'div-gpt-ad-1680012038080-0'
    )
    .defineSizeMapping(mappingSidebar)
    .addService(googletag.pubads());

  gptAdSlots[4] = googletag
    .defineSlot(
      '/1064822/2023-sidebar-rectangle-3',
      [
        [300, 250],
        [300, 600],
      ],
      'div-gpt-ad-1680012076151-0'
    )
    .defineSizeMapping(mappingSidebar)
    .addService(googletag.pubads());

  // Set "test" targeting key-value pair for local and staging environments
  var hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === 'staging.harpers.org') {
    console.log('in a test environment, load test ads');
    // Set the "test" targeting key-value pair for local and staging environments
    googletag.pubads().setTargeting('testing_only', 'true');
  }

  googletag.pubads().enableSingleRequest();
  // googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
});
