(function () {
  const planetBanners = [];

  const getBannerRows = (banner) => {
    const moreInfo = banner.querySelector(
      '.shopify-planet-banner-v2-more-info-row',
    );
    const statsProjects = banner.querySelector(
      '.shopify-planet-banner-v2-stats-projects-row',
    );
    const title = banner.querySelector('.shopify-planet-banner-v2-title-row');
    return {moreInfo, statsProjects, title};
  };

  const resetRowLayout = (banner) => {
    const rows = getBannerRows(banner);
    rows.title.style.order = '0';
    if (rows.moreInfo) rows.moreInfo.style.order = '1';
    if (rows.statsProjects) rows.statsProjects.style.order = '2';
    rows.title.classList.remove('shopify-planet-banner-v2-border-bottom');
    rows.title.classList.remove('shopify-planet-banner-v2-border-right');
    if (rows.moreInfo) {
      rows.moreInfo.classList.remove('shopify-planet-banner-v2-border-bottom');
      rows.moreInfo.classList.remove('shopify-planet-banner-v2-expand');
    }
    if (rows.statsProjects) {
      rows.statsProjects.classList.remove(
        'shopify-planet-banner-v2-border-right',
      );
      rows.statsProjects.classList.remove(
        'shopify-planet-banner-v2-border-bottom',
      );
    }
  };

  const setSingleRowLayout = (banner) => {
    const rows = getBannerRows(banner);

    rows.title.style.order = '0';
    if (rows.statsProjects) rows.statsProjects.style.order = '1';
    if (rows.moreInfo) rows.moreInfo.style.order = '2';

    if (rows.statsProjects || rows.moreInfo)
      rows.title.classList.add('shopify-planet-banner-v2-border-right');
    if (rows.statsProjects && rows.moreInfo)
      rows.statsProjects.classList.add('shopify-planet-banner-v2-border-right');
  };
  const setDoubleRowLayout = (banner) => {
    const rows = getBannerRows(banner);

    rows.title.style.order = '0';
    if (rows.moreInfo) rows.moreInfo.style.order = '1';
    if (rows.statsProjects) rows.statsProjects.style.order = '2';

    const moreInfoOnBottom =
      rows.moreInfo && rows.moreInfo.offsetTop > rows.title.offsetTop;

    rows.title.classList.add('shopify-planet-banner-v2-border-bottom');
    if (rows.moreInfo && moreInfoOnBottom && rows.statsProjects) {
      rows.statsProjects.classList.add('shopify-planet-banner-v2-border-right');
      rows.statsProjects.style.order = '1';
      rows.moreInfo.style.order = '2';
    } else if (rows.moreInfo && !moreInfoOnBottom) {
      rows.moreInfo.classList.add('shopify-planet-banner-v2-border-bottom');
      rows.title.classList.add('shopify-planet-banner-v2-border-right');
    }
    if (moreInfoOnBottom && !rows.statsProjects) {
      rows.moreInfo.classList.add('shopify-planet-banner-v2-expand');
    }
  };
  const setTripleRowLayout = (banner) => {
    const rows = getBannerRows(banner);
    rows.title.style.order = '0';
    if (rows.statsProjects) rows.statsProjects.style.order = '1';
    if (rows.moreInfo) rows.moreInfo.style.order = '2';

    rows.title.classList.add('shopify-planet-banner-v2-border-bottom');
    rows.statsProjects.classList.add('shopify-planet-banner-v2-border-bottom');
    rows.moreInfo.classList.add('shopify-planet-banner-v2-expand');
  };

  const setSingleStatsProjectsRowLayout = (children) => {
    for (let i = 0; i < children.length - 1; i++) {
      children[i].classList.add('shopify-planet-banner-v2-border-right');
    }
  };

  const setDoubleStatsProjectsRowLayout = (children) => {
    for (let i = 0; i < children.length - 2; i++) {
      children[i].classList.add('shopify-planet-banner-v2-border-right');
    }
    for (let i = 0; i < children.length - 1; i++) {
      children[i].classList.add('shopify-planet-banner-v2-border-bottom');
      children[i].classList.add('shopify-planet-banner-v2-expand');
      children[i].classList.add('shopify-planet-banner-v2-justify-center');
    }
  };

  const setTripleStatsProjectsRowLayout = (children) => {
    for (let i = 0; i < children.length - 1; i++) {
      children[i].classList.add('shopify-planet-banner-v2-border-bottom');
      children[i].classList.add('shopify-planet-banner-v2-expand');
      children[i].classList.add('shopify-planet-banner-v2-justify-center');
    }
  };

  const resetStatsProjectsLayout = (children) => {
    children.forEach((child) => {
      child.classList.remove('shopify-planet-banner-v2-border-bottom');
      child.classList.remove('shopify-planet-banner-v2-border-right');
      child.classList.remove('shopify-planet-banner-v2-expand');
      child.classList.remove('shopify-planet-banner-v2-justify-center');
    });
  };

  const setStatsProjectsLayout = (banner) => {
    const children = [
      ...banner.querySelector('.shopify-planet-banner-v2-stats-projects-row')
        .children,
    ].filter(
      (child) =>
        !child.classList.contains('shopify-planet-banner-v2-border-spacer'),
    );
    resetStatsProjectsLayout(children);
    let rowCount = 1;
    let prevItem = children[0];
    for (let i = 1; i < children.length; i++) {
      const currentItem = children[i];
      if (currentItem.offsetTop > prevItem.offsetTop) {
        rowCount++;
      }
      prevItem = currentItem;
    }
    switch (rowCount) {
      case 1:
        setSingleStatsProjectsRowLayout(children);
        break;
      case 2:
        setDoubleStatsProjectsRowLayout(children);
        break;
      case 3:
        setTripleStatsProjectsRowLayout(children);
        break;
      default:
        throw new Error('Invalid stats/projects row count');
    }
  };

  const updateBannerLayout = (banner) => {
    resetRowLayout(banner);
    const children = [
      ...banner.querySelector('.shopify-planet-banner-v2').children,
    ];
    const primaryRowCount = [
      ...new Set(children.map((child) => child.offsetTop)),
    ].length;
    switch (primaryRowCount) {
      case 1:
        setSingleRowLayout(banner);
        break;
      case 2:
        setDoubleRowLayout(banner);
        break;
      case 3:
        setTripleRowLayout(banner);
        break;
      default:
        throw new Error('Invalid primary row count');
    }

    const statsProjectsChildren =
      banner.querySelector('.shopify-planet-banner-v2-stats-projects-row')
        ?.children.length || 0;
    if (statsProjectsChildren > 1) setStatsProjectsLayout(banner);
  };

  const updateBanners = () => {
    planetBanners.forEach((banner) => updateBannerLayout(banner));
  };

  const formatCurrency = (value) => {
    const currencySymbol = window.shopifyPlanetReferenceCurrencyFormat.replace(
      /([0.,]|<[^>]*>)/gm,
      '',
    );
    const symbolFirst =
      window.shopifyPlanetReferenceCurrencyFormat.indexOf(currencySymbol) === 0;
    const decimalSeparator =
      window.shopifyPlanetReferenceCurrencyFormat.includes('.') ? '.' : ',';
    const formattedValue = value.toFixed(2).replace('.', decimalSeparator);
    return symbolFirst
      ? currencySymbol + formattedValue
      : formattedValue + currencySymbol;
  };

  const removeContributionItemFromCart = () => {
    const payload = {};
    payload[window.shopifyPlanetContributionVariant] = 0;
    fetch(`${window.Shopify.routes.root}cart/update.js`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({updates: payload}),
    }).catch(() => {
      setTimeout(removeContributionItemFromCart, 1000);
    });
  };

  const fetchContributionDetails = (banner) => {
    const storefrontAPI = `https://${window.Shopify.shop}/api/2024-04/graphql.json`;
    const graphqlQuery = `
      query getVariantDetails($id: ID!) {
        node(id: $id) {
          id
          ... on ProductVariant {
            price {
              amount
            }
          }
        }
      }
    `;

    const postData = {
      query: graphqlQuery,
      variables: {
        id: `gid://shopify/ProductVariant/${window.shopifyPlanetContributionVariant}`,
      },
    };

    fetch(storefrontAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': window.shopifyPlanetToken,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        window.shopifyPlanetContributionCost = parseFloat(
          json.data.node.price.amount,
        );
        // eslint-disable-next-line no-use-before-define
        setBuyerContributionState(banner);
      })
      .catch(() => {
        banner.classList.add('shopify-planet-banner-v2-product-missing');
      });
  };

  const toggleContributionCartItem = () => {
    if (window.shopifyPlanetContributionInCart) {
      window.shopifyPlanetContributionInCart = false;
      removeContributionItemFromCart();
    } else {
      window.shopifyPlanetContributionInCart = true;
      fetch(`${window.Shopify.routes.root}cart/add.js`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              id: window.shopifyPlanetContributionVariant,
              quantity: 1,
            },
          ],
        }),
      });
    }
  };

  const setBuyerContributionState = (banner) => {
    if (!window.shopifyPlanetContributionCost) {
      fetchContributionDetails(banner);
      return;
    }
    if (window.shopifyPlanetContributionInCart) {
      banner.getElementsByTagName('input')[0].checked = true;
    }
    banner.classList.remove('shopify-planet-banner-v2-fetching-price');
    banner.getElementsByTagName('input')[0].addEventListener('change', () => {
      toggleContributionCartItem();
    });
    const titleWithPrice = banner
      .getElementsByClassName('shopify-planet-banner-v2-title')[0]
      .textContent.replace(
        '{cost}',
        formatCurrency(window.shopifyPlanetContributionCost),
      );
    banner.getElementsByClassName(
      'shopify-planet-banner-v2-title',
    )[0].textContent = titleWithPrice;
  };

  const initBanners = () => {
    document
      .querySelectorAll('.shopify-planet-banner-v2-container')
      .forEach((element) => {
        if (element.classList.contains('shopify-planet-banner-v2-initialized'))
          return;
        planetBanners.push(element);
        updateBannerLayout(element);
        if (element.classList.contains('buyer-contribution')) {
          element.classList.add('shopify-planet-banner-v2-fetching-price');
          setBuyerContributionState(element);
        }
        element.classList.add('shopify-planet-banner-v2-initialized');
      });
  };

  window.addEventListener('load', initBanners);
  window.addEventListener('resize', updateBanners);

  /**
   * Popup modal code
   * TODO
   * - modal should close on click outside modal and on ESCAPE key
   */
  const openPopupLink = document.querySelector('.shopify-planet-open-popup');
  const closePopupLink = document.querySelector('.shopify-planet-close-popup');
  const popupBackdrop = document.querySelector('.planet-popup-modal');
  const popupContent = document.querySelector(
    '.shopify-planet-popup-content-container',
  );

  const closePopup = () => {
    const popupId = closePopupLink.getAttribute('data-popup-id');
    document.getElementById(`popup-${popupId}`).style.display = 'none';
  };

  openPopupLink.addEventListener('click', function (event) {
    event.preventDefault();
    const popupId = openPopupLink.getAttribute('data-popup-id');
    document.getElementById(`popup-${popupId}`).style.display = 'block';
  });

  closePopupLink.addEventListener('click', function () {
    closePopup();
  });

  popupBackdrop.addEventListener('click', function () {
    closePopup();
  });

  popupContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  });

  /*
   * We need to move the modal element up and out of the section
   * and as a child of body so it takes up the whole page
   */
  const modalElement = document.querySelector('.planet-popup-modal');
  if (modalElement) {
    modalElement.parentNode.removeChild(modalElement);
    document.body.appendChild(modalElement);
  }
})();