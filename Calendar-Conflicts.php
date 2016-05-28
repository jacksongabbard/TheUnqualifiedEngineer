<?php

$calendar = array(
  array(1,  2,  'a'),

  // These two conflict
  array(2,  4,  'b'),
  array(3,  5,  'c'),

  array(6,  8,  'd'),

  // These three conflict
  array(9,  13, 'e'),
  array(12, 15, 'f'),
  array(14, 16, 'g'),

  array(17, 19, 'h'),

  array(20, 21, 'i'),
  array(20, 21, 'j'),
);


function find_conflicts($cal) {
  $conflicts = array();
  $temp_conflicts = array($cal[0][2]);
  $open_event_end = $cal[0][1];
  for ($ii=1; $ii<count($cal); $ii++) {
    if ($cal[$ii][0] >= $open_event_end) {
      if (count($temp_conflicts) > 1) {
        $conflicts[] = $temp_conflicts;
      }
      $temp_conflicts = array();
    }
    $open_event_end = max($cal[$ii][1], $open_event_end);
    $temp_conflicts[] = $cal[$ii][2];
  }
  if (count($temp_conflicts) > 1) {
    $conflicts[] = $temp_conflicts;
  }
  return $conflicts; 
}

// Testing
function squish($list_of_things) {
  return array_map(function($event) { 
    return implode(',', $event);
  }, $list_of_things);
}
echo "Testing\n";
echo var_dump(squish($calendar), true);
echo var_dump(squish(find_conflicts($calendar)), true);
