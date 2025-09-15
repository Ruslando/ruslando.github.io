'use client'

import { useState, useCallback } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface GalleryImage {
  src: string
  title: string
  description?: string
}

interface ImageGalleryComponentProps {
  images: GalleryImage[]
  title?: string
}

export function ImageGalleryComponent({ 
  images,
  title = "Gallery"
}: ImageGalleryComponentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goToPrevious = useCallback(() => {
    setSelectedImage(prev => prev > 0 ? prev - 1 : images.length - 1)
  }, [images.length])

  const goToNext = useCallback(() => {
    setSelectedImage(prev => prev < images.length - 1 ? prev + 1 : 0)
  }, [images.length])

  const selectImage = useCallback((index: number) => {
    setSelectedImage(index)
  }, [])

  if (!images || images.length === 0) {
    return null
  }

  const currentImage = images[selectedImage] || images[0]

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-xl font-medium text-gray-800 mb-6">{title}</h3>
      )}
      
      {/* Main Image Display */}
      <div className="gallery-container">
        <div className="main-image-container">
          {/* Left Navigation Button */}
          {images.length > 1 && (
            <button
              className="nav-button nav-left"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
          )}

          <div 
            className="main-image-wrapper"
            onClick={() => openLightbox(selectedImage)}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge image"
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="main-image"
            />
            <div className="image-overlay">
              <span className="overlay-text">Click to enlarge</span>
            </div>
          </div>

          {/* Right Navigation Button */}
          {images.length > 1 && (
            <button
              className="nav-button nav-right"
              onClick={goToNext}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,6 15,12 9,18"></polyline>
              </svg>
            </button>
          )}
        </div>

        {/* Image Info */}
        <div className="image-info">
          <h4 className="image-title">{currentImage.title}</h4>
          {currentImage.description && (
            <p className="image-description">{currentImage.description}</p>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="thumbnail-grid">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => selectImage(index)}
                aria-label={`View ${image.title}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="thumbnail-image"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={closeLightbox}
          index={selectedImage}
          slides={images.map(img => ({ src: img.src, alt: img.title }))}
        />
      )}
    </div>
  )
}