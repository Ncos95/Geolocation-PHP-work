<?php

    ini_set('display_errors', 'On');
	error_reporting(E_ALL);

    include('openCage/AbstractGeocoder.php');
    include('openCage/Geocoder.php');

    $geocoder = new \OpenCage\Geocoder\Geocoder('738e3b022f744f97811efd56ef24d7bc');

    $result = $geocoder->geocode('51.952659, 7.632473',['language'=>'en']);
    
    header('Content-Type: application/json; charset=UTF-8');
    
    echo json_encode($result['results'], JSON_UNESCAPED_UNICODE);
?>