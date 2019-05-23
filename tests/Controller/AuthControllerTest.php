<?php


namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class AuthControllerTest extends WebTestCase {
    private $client = null;

    public function setUp() {
        $this->client = static::createClient();
    }

    public function testAdminFool() {
        $this->client->request('GET', '/admin');
        $this->assertNotSame(Response::HTTP_OK, $this->client->getResponse()->getStatusCode());
    }

    public function tearDown() {
        unset($this->client);
    }

}