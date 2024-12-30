'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function WorkHistoryForm() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const years = Array.from({ length: 10 }, (_, i) => 2024 - i)

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Add Work History</h2>

      <div className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <Input placeholder="e.g., Programmer" />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Description
          </label>
          <textarea 
            rows={4}
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Developed websites using HTML, CSS, and JavaScript"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <Input placeholder="Specify company name" />
        </div>

        {/* Work Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Status
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="workStatus"
                value="left"
                defaultChecked
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">Left the job</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="workStatus"
                value="working"
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">Still working here</span>
            </label>
          </div>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
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

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
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