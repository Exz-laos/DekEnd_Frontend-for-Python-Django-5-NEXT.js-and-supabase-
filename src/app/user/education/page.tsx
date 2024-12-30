import { EducationForm } from "@/components/user/education-form/EducationForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add Education | Dekend - find jobs, internships, and manage your profile web',
  description: 'Add your education information, certificates, and achievements',
}

export default function EducationPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <EducationForm />
      </div>
    </div>
  )
} 