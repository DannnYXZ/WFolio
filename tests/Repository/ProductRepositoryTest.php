<?php

namespace Acme\ProductBundle\Tests\Entity;

use App\Entity\Comment;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProductRepositoryFunctionalTest extends WebTestCase {
    /**
     * @var EntityManager
     */
    private $_em;

    public function setUp() {
        $kernel = static::createKernel();
        $kernel->boot();
        $this->_em = $kernel
            ->getContainer()
            ->get('doctrine.orm.entity_manager');
    }

    public function testProductByCategoryName() {
        $results = $this->_em->getRepository(Comment::class)
            ->findAll('foo');
        $this->assertEquals(count($results), 1);
    }
}