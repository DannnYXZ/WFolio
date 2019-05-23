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
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @Vich\Uploadable
 */
class Image {
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
    private $imageName;
    /**
     * @Vich\UploadableField(mapping="album_image", fileNameProperty="imageName")
     *
     * @var File
     */
    private $imageFile;
    /**
     * @ORM\Column(type="datetime")
     *
     * @var DateTime
     */
    private $updatedAt;

    /**
     * @param File|UploadedFile $imageFile
     * @throws Exception
     */
    public function setImageFile(?File $imageFile = null): void {
        $this->imageFile = $imageFile;
        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File {
        return $this->imageFile;
    }

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

    public function getImageName(): ?string {
        return $this->imageName;
    }

    public function setImageName(?string $logo): self {
        $this->imageName = $logo;

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