import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Contextual Lighthouse — HarborOS',
  description: 'Your operating logic, written once. Applied to every contract import, automatically.',
}

export default function LighthousePage() {
  return (
    <iframe
      src="/lighthouse.html"
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
    />
  )
}
