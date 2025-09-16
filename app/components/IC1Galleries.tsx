'use client'

import { ImageGalleryComponent } from './ui/ImageGallery'

// Numerical Error Comparison Gallery
const numericalErrorImages = [
  {
    src: '/ic1/ic1_numerical_error_before.png',
    title: 'Before Projection Fix',
    description: 'Original coordinate transformation showing numerical errors causing image blur and displacement'
  },
  {
    src: '/ic1/ic1_numerical_error_after.png',
    title: 'After Projection Fix',
    description: 'Fixed implementation using proper inverse projection matrices for pixel-perfect results'
  }
]

export function NumericalErrorGallery() {
  return (
    <ImageGalleryComponent
      images={numericalErrorImages}
      title="Projection Method Overhaul"
    />
  )
}

// Occlusion Filling Techniques Gallery
const occlusionFillingImages = [
  {
    src: '/ic1/ic1_occlusion_filling_no_filling.png',
    title: 'No Occlusion Filling',
    description: 'Raw reprojection results showing occlusion holes without any filling techniques'
  },
  {
    src: '/ic1/ic1_occlusion_filling_kernel_filling.png',
    title: 'Original 3x3 Kernel Filling',
    description: 'Original implementation using 3x3 kernel for basic hole filling with limited accuracy'
  },
  {
    src: '/ic1/ic1_occlusion_filling_epipolar_filling.png',
    title: 'Enhanced Epipolar Line Filling',
    description: 'Improved implementation using epipolar line backtracking for more natural occlusion handling'
  }
]

export function OcclusionFillingGallery() {
  return (
    <ImageGalleryComponent
      images={occlusionFillingImages}
      title="Occlusion Filling Technique Comparison"
    />
  )
}