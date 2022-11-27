function addEventHandler(elem, eventType, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(eventType, handler, false);
  }
  else if (elem.attachEvent) {
    elem.attachEvent('on' + eventType, handler);
  }
}

addEventHandler(document, 'DOMContentLoaded', function() {
  let maxWidth = 0;

  document.querySelectorAll('.wp-block-customberg-program-at-a-glance-row .column-value').forEach(function($row) {
    if ($row.offsetWidth > maxWidth) {
      maxWidth = $row.offsetWidth;
    }
  });

  // we need to loop through the elements again to now set the width
  document.querySelectorAll('.wp-block-customberg-program-at-a-glance-row .column-value').forEach(function($row) {
    // adding some extra pixels to the max width
    $row.style.width = (maxWidth + 20) + 'px';
  });
});
