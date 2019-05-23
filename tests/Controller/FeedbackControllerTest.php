<?php


namespace App\Tests\Controller;

use App\Entity\Comment;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class FeedbackControllerTest extends WebTestCase {
    /**
     * @var EntityManager
     */
    private $_em;
    private $client = null;

    public function setUp() {
        $kernel = static::createKernel();
        $kernel->boot();
        $this->_em = $kernel->getContainer()
            ->get('doctrine.orm.entity_manager');
        $this->client = static::createClient();
    }

    public function testUserGotCorrectFeedback() {
        $this->client->request('GET', '/feedback-messages');
        $real = $this->client->getResponse()->getContent();

        $data = $this->_em->getRepository(Comment::class)->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $expected = $serializer->serialize($data, 'json');
        $this->assertSame($expected, $real);
    }

    public function tearDown() {
        unset($this->client);
    }

}