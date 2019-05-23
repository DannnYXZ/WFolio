<?php


namespace App\Tests\Controller;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Security\Core\Security;

class WhoamiAPITest extends WebTestCase {
    public function testLoginDelivery() {
        $client = static::createClient();
        $client->request('GET', '/whoami');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function getActualLogin(Security $security) {
        return $security->getUser();
    }

    public function testLogin() {
        $client = static::createClient();
        $client->request('GET', '/whoami');
        $actualUserName = $this->getActualLogin();
        $this->assertEquals($actualUserName, $client->getResponse());
    }
}