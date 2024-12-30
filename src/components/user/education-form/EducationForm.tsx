'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function EducationForm() {
  const [status, setStatus] = useState<"studying" | "graduated">("studying")

  const educationLevels = [
    "Lower Secondary Education",
    "Upper Secondary Education",
    "Vocational Certificate",
    "High Vocational Certificate",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctoral Degree"
  ]

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Add Education Information</h2>

      <div className="space-y-4">
        {/* Education Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Education Level
          </label>
          <select className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Please select</option>
            {educationLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Institution Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Institution Name
          </label>
          <Input placeholder="e.g., Chiang Mai University" />
        </div>

        {/* Degree */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Degree
          </label>
          <Input placeholder="e.g., Bachelor of Engineering" />
        </div>

        {/* Major */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Major
          </label>
          <Input placeholder="e.g., Computer Engineering" />
        </div>

        {/* GPA */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GPA (Latest)
          </label>
          <Input placeholder="e.g., 3.50" type="number" step="0.01" min="0" max="4" />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="studying"
                checked={status === "studying"}
                onChange={() => setStatus("studying")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">Studying</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="graduated"
                checked={status === "graduated"}
                onChange={() => setStatus("graduated")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">Graduated</span>
            </label>
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