import { useState, useEffect } from 'react'
import { TProject } from '@/typings'

import { storage } from '@/utils/firebase'
import { ref, getDownloadURL } from 'firebase/storage'

export const useFireVideos = (videoUrl: string) => {
  const [downloadUrl, setDownloadUrl] = useState<string>('')

  useEffect(() => {
    getDownloadURL(ref(storage, `videos/${videoUrl}`))
      .then(url => {
        setDownloadUrl(url)
      })
      .catch(err => {
        console.error(`${videoUrl} not found`)
      })
  }, [videoUrl])

  return { downloadUrl }
}