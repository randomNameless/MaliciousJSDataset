// GenBank World
const bulletPoints = [
    {image: '/images/genealogy-bank-icon.png', text: 'New York, Newspaper Obituaries (1870-current)', url: 'https://www.genealogybank.com/explore/obituaries/all/usa/new-york/?utm_campaign=1204IT30lpA&utm_source=1204IT30lpA&utm_medium=1204IT30lpA&s_siteloc=1204IT30lpA&s_trackval=1204IT30lpA&s_referrer=1204IT30lpA'},
    {image: '/images/genealogy-bank-icon.png', text: 'Pennsylvania, Newspaper Obituaries (1981-current)', url: 'https://www.genealogybank.com/explore/obituaries/all/usa/pennsylvania/?utm_campaign=1204IT30lpA&utm_source=1204IT30lpA&utm_medium=1204IT30lpA&s_siteloc=1204IT30lpA&s_trackval=1204IT30lpA&s_referrer=1204IT30lpA'},
    {image: '/images/genealogy-bank-icon.png', text: 'Virginia, Newspaper Obituaries (1852-current)', url: 'https://www.genealogybank.com/explore/obituaries/all/usa/virginia/?utm_campaign=1204IT30lpA&utm_source=1204IT30lpA&utm_medium=1204IT30lpA&s_siteloc=1204IT30lpA&s_trackval=1204IT30lpA&s_referrer=1204IT30lpA'},
    {image: '/images/genealogy-bank-icon.png', text: 'Massachusetts, Newspaper Obituaries (1824-current)', url: 'https://www.genealogybank.com/explore/obituaries/all/usa/massachusetts/?utm_campaign=1204IT30lpA&utm_source=1204IT30lpA&utm_medium=1204IT30lpA&s_siteloc=1204IT30lpA&s_trackval=1204IT30lpA&s_referrer=1204IT30lpA'},
    {image: '/images/genealogy-bank-icon.png', text: 'California, Newspaper Obituaries (1865-current)', url: 'https://www.genealogybank.com/explore/obituaries/all/usa/california/?utm_campaign=1204IT30lpA&utm_source=1204IT30lpA&utm_medium=1204IT30lpA&s_siteloc=1204IT30lpA&s_trackval=1204IT30lpA&s_referrer=1204IT30lpA'},
];

// JavaScript code to display content in <h3> tags
    var contentElement = document.getElementById("countyobit");
    contentElement.textContent = "Search Obituaries";

// Get the <ul> element where we'll add our list items
const ul = document.getElementById('bullet-list');

// Loop through each object in the array and create a <li> element with the image and text
bulletPoints.forEach((point) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const a = document.createElement('a');

  // Set the attributes for the <img> element
  img.src = point.image;
  img.alt = point.text;

  // Set the attributes for the <a> element
  a.href = point.url;
  a.textContent = point.text;

  // Add the <img> and <a> elements to the <li> element
  li.appendChild(img);
  li.appendChild(document.createTextNode('\u00A0')); // Append non-breaking space
  li.appendChild(a);

  // Add the <li> element to the <ul> element
  ul.appendChild(li);
});