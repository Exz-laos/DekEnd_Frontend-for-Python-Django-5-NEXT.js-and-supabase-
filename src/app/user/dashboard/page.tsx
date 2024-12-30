import { UserDashboard } from '@/components/user/UserDashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Dekend - find jobs, internships, and manage your profile web',
  description: 'Dashboard page for user to view their profile, stats, and activities',
}

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <UserDashboard />
      </div>
    </div>
  )
} 