//masonry
var $container = $('#container');
// initialize
$container.masonry({
  columnWidth: 300,
  itemSelector: '.item'
});
var msnry = $container.data('masonry');
$('#container').masonry()
  .append( elem )
  .masonry( 'appended', elem );
  // no method is same as layout -> .masonry('layout')
  .masonry();
  var $container;

function triggerMasonry() {
  // don't proceed if $container has not been selected
  if ( !$container ) {
    return;
  }
  // init Masonry
  $container.masonry({
    // options...
  });
}
// trigger masonry on document ready
$(function(){
  $container = $('#container');
  triggerMasonry();
});
// trigger masonry when fonts have loaded
Typekit.load({
  active: triggerMasonry,
  inactive: triggerMasonry
});
// chaining works with 'appended' method
$container.masonry( 'appended', elem ).fadeIn();
// 'on' method breaks jQuery chaining
$container.masonry( 'on', 'layoutComplete', function() {...} );
$container.fadeIn();
$container.masonry( 'addItems', elements )
$container.masonry( 'appended', elements )
$container.masonry('bindResize')
var item = $container.masonry( 'getItem', element )
var elems = $container.masonry('getItemElements').
var container = document.querySelector('#layout-demo .masonry');
var msnry = new Masonry( container, {
  columnWidth: 60
});
$container.masonry('reloadItems')

eventie.bind( container, 'click', function( event ) {
  // don't proceed if item was not clicked on
  if ( !classie.has( event.target, 'item' ) ) {
    return;
  }
  // change size of item via class
  classie.toggle( event.target, 'gigante' );
  // trigger layout
  msnry.layout();
});
#gutter .item {
  margin-bottom: 10px;
}