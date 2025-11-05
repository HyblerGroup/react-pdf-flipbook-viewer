import FlipbookViewer from '@/app/_components/ui/flipbook-viewer/flipbook-viewer'
import React from 'react'

const Page = () => {
  return (
    <div className="block">
      <FlipbookViewer pdfUrl='/Pameti_VJH_B5_2025_kniha_nahled_P.pdf' />
    </div>
  )
}

export default Page
