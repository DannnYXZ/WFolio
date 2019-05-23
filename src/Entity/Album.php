<?php

namespace App\Entity;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AlbumRepository")
 * @Vich\Uploadable
 */
class Album {
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $logo;
    /**
     * @Vich\UploadableField(mapping="album_image", fileNameProperty="logo")
     *
     * @var File
     */
    private $logoFile;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var DateTime
     */
    private $updatedAt;

    /**
     * @param File|UploadedFile $logoFile
     * @throws Exception
     */
    public function setLogoFile(?File $logoFile = null): void {
        $this->logoFile = $logoFile;
        if (null !== $logoFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new DateTimeImmutable();
        }
    }

    public function getLogoFile(): ?File {
        return $this->logoFile;
    }

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    public function getId(): ?int {
        return $this->id;
    }

    public function getTitle(): ?string {
        return $this->title;
    }

    public function setTitle(string $title): self {
        $this->title = $title;

        return $this;
    }

    public function getLogo(): ?string {
        return $this->logo;
    }

    public function setLogo(?string $logo): self {
        $this->logo = $logo;

        return $this;
    }

    public function getPath(): ?string {
        return $this->path;
    }

    public function setPath(string $path): self {
        $this->path = $path;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
