<?php


namespace App\Controller;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class AuthController {
    /**
     * @Route("/whoami")
     * @param Security $security
     * @return JsonResponse
     */
    public function kek(Security $security) {
        $user = $security->getUser();
        if ($user)
            return new JsonResponse(['username' => $user->getUsername()]);
        else
            return new JsonResponse([]);
    }
}