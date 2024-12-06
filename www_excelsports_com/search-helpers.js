export function hitTemplate(hit) {
  return `
    <a class="text-muted d-block text-decoration-none" href="/${hit.slug}">
      <div style="position: relative;" class="category-thumb">
        <img class="img-fluid" src="${hit.image}" alt="" style="">                                    
        <div class="micro-thumbs"></div>
      </div>
      <div class="mt-2">
        <h3 class="h4 product-title">${hit._highlightResult.brand.value} ${hit._highlightResult.description.value}</h3>
        <div style="display: none">${hit.color}</div>
        <div style="display: none">${hit.size}</div>
        <div class="sp-sale-price-category">
            <span class="h5">$${hit.retailPrice.toFixed(2)}</span>
            ${hit.regularPrice !== hit.retailPrice ? `&nbsp;&nbsp;<span class="h5 category-mrp">$${hit.regularPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </a>
  `;
}