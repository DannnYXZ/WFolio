<?php


namespace App\Tests;


use App\Entity\Album;
use PHPUnit\Framework\TestCase;

class AlbumTest extends TestCase {
    protected $album;

    protected function setUp() {
        $this->album = new Album();
    }

    /**
     * @dataProvider providerTitle
     * @param $title
     */
    public function testTitle($title) {
        $this->album->setTitle($title);
        $this->assertEquals($title, $this->album->getTitle());
    }

    /**
     * @dataProvider providerTitle
     * @param $logo
     */
    public function testLogo($logo) {
        $this->album->setLogo($logo);
        $this->assertEquals($logo, $this->album->getLogo());
    }

    public function providerTitle() {
        return array(
            array('ONE'),
            array('TWO'),
            array('THREE'),
            array('FOUR')
        );
    }

    protected function tearDown() {
        unset($this->album);
    }
}