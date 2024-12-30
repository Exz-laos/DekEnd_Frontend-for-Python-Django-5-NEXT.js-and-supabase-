import { ProfileForm } from "@/components/user/profile-form/ProfileForm"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edit Profile | Dekend - find jobs, internships, and manage your profile web',
  description: 'Edit your profile information, education, and certificates',
}

export default function ProfilePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <ProfileForm />
      </div>
    </div>
  )
} 