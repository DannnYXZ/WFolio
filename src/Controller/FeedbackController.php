<?php


namespace App\Controller;

use App\Entity\Album;
use App\Entity\Comment;
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
    public function feedback() {
        return $this->render('feedback.html.twig');
    }

    /**
     * @Route("/feedback-messages")
     */
    public function albums() {
        //var_dump($products);
        $albums =
            $this->getDoctrine()
            ->getRepository(Comment::class)
            ->findAll();
        $encoders = [new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $albums = $serializer->serialize($albums, 'json');
        $response = new Response($albums);
        return $response;
    }

    /**
     * @Route("/post-comment")
     * @param Security $security
     * @return Response
     */
    public function store_comment(Security $security) {
        $user = $security->getUser();
        if ($user && $_POST['message']) {
            $entityManager = $this->getDoctrine()->getManager();
            $product = new Comment();
            $product->setUsername($user->getUsername());
            $product->setContent($_POST['message']);
            $entityManager->persist($product);
            $entityManager->flush();

        }
        return $this->render('feedback.html.twig');
    }

}
