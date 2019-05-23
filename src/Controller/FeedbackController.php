<?php


namespace App\Controller;

use App\Entity\Album;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class FeedbackController extends AbstractController {
    /**
     * @Route("/feedback")
     */
    public function home() {
        return $this->render('feedback.html.twig');
    }

    /**
     * @Route("/fee")
     */
    public function albums() {
        //var_dump($products);
        $albums = $this->getDoctrine()
            ->getRepository(Album::class)
            ->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $albums = $serializer->serialize($albums, 'json');
        $response = new Response($albums);
        return $response;
    }

}
