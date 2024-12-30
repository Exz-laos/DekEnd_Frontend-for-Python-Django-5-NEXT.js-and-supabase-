import { CertificateForm } from "@/components/user/certificate-form/CertificateForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'add Certificate | Dekend - find jobs, internships, and manage your profile web',
  description: 'Add your certificate information and achievements',
}

export default function CertificatePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <CertificateForm />
      </div>
    </div>
  )
} 