import { WorkHistoryForm } from "@/components/user/work-history-form/WorkHistoryForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'add Work History | Dekend - find jobs, internships, and manage your profile web',
  description: 'Add your work history information and achievements',
}

export default function WorkHistoryPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <WorkHistoryForm />
      </div>
    </div>
  )
} 