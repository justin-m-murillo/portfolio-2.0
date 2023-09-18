import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-10-21',
  useCdn: true,
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source)