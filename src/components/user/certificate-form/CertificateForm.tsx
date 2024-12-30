'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CertificateForm() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const years = Array.from({ length: 10 }, (_, i) => 2024 - i)

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Add Training History</h2>

      <div className="space-y-4">
        {/* Training Topic */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Training Topic
          </label>
          <Input placeholder="e.g., English for Communication" />
        </div>

        {/* Details and Knowledge Gained */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Details and Knowledge Gained
          </label>
          <textarea 
            rows={4}
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Learned basic English communication skills"
          />
        </div>

        {/* Trainer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trainer
          </label>
          <Input placeholder="e.g., Company name, Instructor name" />
        </div>

        {/* Training Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Training Date (approximate)
          </label>
          <div className="grid grid-cols-3 gap-4">
            <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="submit">Save</Button>
        <Button variant="outline" type="button">Clear</Button>
      </div>
    </form>
  )
}