<?php

require '../vendor/autoload.php';

use Teamleader\CodingTest\Logger;

$logger = new Logger();

// this is an example php file, so that the the project structure is clear to candidates

// you may assume this code connects to some database with the following credentials

$database_host = $_SERVER["DATABASE_HOST"];
$database_name = $_SERVER["DATABASE_NAME"];
$database_user = $_SERVER["DATABASE_USER"];
$database_password = $_SERVER["DATABASE_PASSWORD"];

$redis_host = $_SERVER["REDIS_HOST"];
$redis_username = $_SERVER["REDIS_USER"];
$redis_password = $_SERVER["REDIS_PASS"];

// you may assume we query the database

$logger->info('Queried the database');

// then it returns some data

echo json_encode(['data' => ['message' => 'This is an API response']]);
