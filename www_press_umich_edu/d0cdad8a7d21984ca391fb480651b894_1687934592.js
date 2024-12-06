
var matchWidthTimer;
const matchSliderTitleWidths = ( slickTrack ) => {
clearTimeout( matchWidthTimer );
$(slickTrack).each( function(){
const $slickTab     = $( this ).closest('.tab-pane');
const widthsMatched = $( this ).hasClass( 'title-widths-matched' );
const tabActive     = $slickTab.hasClass('active');
const tabLength     = $slickTab.length;
if( !widthsMatched && ( !tabLength || tabActive ) ) {
$( this ).css('width', 'max-content')
.addClass( 'title-widths-matched' )
.find( '.title' ).each( function(){
$( this ).css( 'width', $( this ).parent().find( '.img img' ).width());
});
}
});
};
const matchCoverHeights = (articleContainer, articlesPerLine) => {
const $articleItem = $( 'article.item' );
$articleItem.removeAttr( 'tabindex' );
$articleItem.find('a').removeAttr( 'tabindex' );
if( $('body').width() >= '768' ) {
var availableWidth = 0;
$(articleContainer).each( function(){
if( $(this).data('item-line-count') ) {
articlesPerLine = $(this).data('item-line-count');
}
availableWidth = Math.max( availableWidth, $( this ).width() - articlesPerLine * ( $articleItem.innerWidth() - $articleItem.width() ) );
const $articleImg  = $( this ).find( '.img img' );
let currentArticle = -1;
while( currentArticle < $articleImg.length -1 ) {
let maxHeight  = 0;
let newWidths  = [];
let totalWidth = 0;
let newHeight  = 0;
for( let i=0; i < articlesPerLine; i++ ) {
currentArticle++;
if( $articleImg[ currentArticle ].naturalHeight > maxHeight ) {
maxHeight = $articleImg[ currentArticle ].naturalHeight;
}
if( i === articlesPerLine -1 || currentArticle === $articleImg.length -1  ) {
newHeight = maxHeight;
let articlesThisLine = ( currentArticle + 1 ) % articlesPerLine;
if( articlesThisLine === 0 ) {
articlesThisLine = articlesPerLine;
}
let lowerLimit = currentArticle - articlesThisLine + 1;
for ( let ii=lowerLimit; ii <= currentArticle; ii++ ) {
newWidths[ ii ] = Math.round( $articleImg[ ii ].naturalWidth * ( maxHeight / $articleImg[ ii ].naturalHeight ) );
totalWidth = totalWidth + newWidths[ ii ];
}
if( articlesThisLine < articlesPerLine ) {
totalWidth = Math.round( totalWidth * ( articlesPerLine / articlesThisLine ) );
}
let ratio = 1;
if(  totalWidth !== availableWidth ) {
ratio = availableWidth / totalWidth;
}
newHeight = Math.floor( maxHeight * ratio );
for ( let ii=lowerLimit; ii <= currentArticle; ii++ ) {
newWidths[ ii ] = Math.floor( newWidths[ ii ] * ratio );
}
for( let ii=lowerLimit; ii <= currentArticle; ii++) {
let newWidth = newWidths[ ii ] + 'px';
let $img     = $( $articleImg[ ii ] );
$img.css( 'height', newHeight + 'px' )
.css( 'width', newWidth )
.parent().next().css( 'width', newWidth );
if( ii === lowerLimit ) {
$img.closest( 'article' ).css( 'clear', 'left' );
}
}
}
if( currentArticle === $articleImg.length - 1 ) {
break;
}
}
}
});
}
};
(function($)
{
$(function()
{
$( 'body' )
.mousedown( function()
{
$(this).removeClass( 'using-keyboard' );
})
.keydown( function( event )
{
if ( event.which === 9 || event.keyCode === 9 || event.code == 'Tab' || event.key == 'Tab' )
{
$(this).addClass( 'using-keyboard' );
}
});
$( '#header-search-options,#results-search-options').on( 'change', function()
{
var optionText = $( 'option:selected', this ).text();
$(this).siblings( '.options-overlay' ).find( '.search-option-text' ).html( optionText );
});
$( '.nav-item-search' ).on( 'click', function (e)
{
e.stopImmediatePropagation();
e.preventDefault();
const $navbarToggle = $( '.navbar-header .navbar-toggle' );
if( $( '.navbar-header' ).css( 'display' ) === 'block' && $navbarToggle.attr( 'aria-expanded' ) === 'false' ) {
console.log('expanding');
$navbarToggle.trigger( 'click' );
}
if ( !$( '.page-search_results' ).length )
{
$( '#navbar .search-form' ).toggle();
$( '#navbar .search-form select[name^=search_in]' ).focus();
}
else
{
$( 'section .search-form' ).toggle();
$( 'section .search-form select[name^=search_in]' ).focus();
}
});
if ( $( '.page-search_results' ).length )
{
$( 'section .search-form select[name^=search_in]' ).focus();
}
if ( $( '.filters-mobile .search-filter a.active' ).length )
{
$( '.filters-mobile .search-filter a.active' ).each(function()
{
var $clone = $(this).clone();
var filterValue = $clone.text().replace( /\ \(.*\)/, '' );
$clone.html( filterValue );
$( '.filters-mobile .active-filters .clear-filters' ).before( $clone.addClass( 'pill' ) );
});
}
$(document).on( 'click', '.collapse-toggle', function(e)
{
var toggleHTML = $(this).html();
var update = false;
if ( toggleHTML.toLowerCase().indexOf( 'hide' ) !== -1 )
{
toggleHTML = toggleHTML.replace( 'Hide', 'Show' ).replace( 'hide', 'show' );
update = true;
}
else if ( toggleHTML.toLowerCase().indexOf( 'show' ) !== -1 )
{
toggleHTML = toggleHTML.replace( 'Show', 'Hide' ).replace( 'show', 'hide' );
update = true;
}
if ( update )
{
$(this).html( toggleHTML );
}
});
$(document).on( 'click', '#edition-details .collapse-toggle', function(e)
{
e.preventDefault();
var showText = $(this).data('show-text');
var hideText = $(this).data('hide-text');
var toggleHTML = $(this).html();
if ( toggleHTML == showText )
{
toggleHTML = hideText;
$( '#edition-details .collapse' ).addClass( 'in' );
}
else
{
toggleHTML = showText;
$( '#edition-details .collapse' ).removeClass( 'in' );
}
$(this).html( toggleHTML );
});
$(document).on( 'click', '.sec-toggle > a', function(e)
{
e.stopImmediatePropagation();
});
$(document).on( 'keydown', '.sec-toggle', function(e)
{
if ( e.keyCode == 13 || e.which == 13 )
{
$(this).click();
}
});
$( '.auto-refresh' ).on( 'change', function (e)
{
var url = $(this).val();
if ( url )
{
window.location.replace( url );
}
else
{
return false;
}
});
if ( $( '.selectpicker' ).length )
{
$( '.selectpicker' ).selectpicker();
}
$(function()
{
var path = $( '#navbar' ).data( 'path' ) + '';
var path_parts = path.split( '/' );
if ( path_parts )
{
$.each( path_parts, function(index, part){
$( '.mnav-' + part + ',.fnav-' + part ).addClass( 'selected' );
});
}
});
$('div.dropdown-menu div div div:last-of-type li:last-of-type a').on('keydown', function(e){
if( e.keyCode === 9 && !e.shiftKey ) {
$( this ).closest('.dropdown').find('a').trigger('click');
}
});
$( 'div.dropdown-menu' ).each( function(){
const $firstLink = $( this ).find( 'a' )[0];
$( $firstLink ).on( 'keydown', function( e ){
if( e.keyCode === 9 && e.shiftKey ) {
$( this ).closest( '.dropdown' ).find( 'a' ).trigger( 'click' );
}
});
});
const $divisionsMenuLinks = $( '.divisions-menu.hidden-xs .super-header-button .dropdown-menu a[href]' );
$( $divisionsMenuLinks[0]).on('keydown', function(e){
console.log(e.keyCode, e.shiftKey);
if( e.keyCode === 9 && e.shiftKey ) {
$( this ).closest('.super-header-button').find('a').trigger('click');
}
});
$( $divisionsMenuLinks[$divisionsMenuLinks.length -1] ).on('keydown', function(e){
console.log(e.keyCode, e.shiftKey);
if( e.keyCode === 9 && !e.shiftKey ) {
$( this ).closest('.super-header-button').find('a').trigger('click');
}
});
$(function()
{
if ( $.fn.matchHeight )
{
$('.coverstack').matchHeight();
$('.design-parts_titles .item').matchHeight();
$('.design-parts_titles .item div.img').matchHeight();
}
});
$('li.category-nav-item a').on( 'click', function(){
matchWidthTimer = setTimeout( function() { matchSliderTitleWidths('.slick-track'); }, 200 );
});
var resizeId;
function doneResizing(){
matchCoverHeights('.items.items-books', 5);
matchCoverHeights('.featured-imprint-books', 3);
}
$( window ).resize( function() {
clearTimeout(resizeId);
resizeId = setTimeout(doneResizing, 250);
});
$( window ).load( function(){
matchCoverHeights( '.items.items-books', 5 );
matchCoverHeights('.featured-imprint-books', 3);
matchSliderTitleWidths( '.slick-track' );
});
$('.nav-pill-select').on('change', function(){
var tabLink = $(this).find(':selected').data('target');
$('a[href=' + tabLink + ']')[0].click();
});
});
})(jQuery);
