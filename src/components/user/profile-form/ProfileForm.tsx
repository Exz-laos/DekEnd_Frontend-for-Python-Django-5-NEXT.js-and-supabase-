'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProfileForm() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [englishLevel, setEnglishLevel] = useState<"poor" | "fair" | "good" | "excellent">("fair")
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([])

  const provinces = [
    "Bangkok", "Krabi", "Kanchanaburi", "Kalasin", "Kamphaeng Phet", "Khon Kaen", "Chanthaburi", "Chachoengsao", 
    "Chonburi", "Chainat", "Chaiyaphum", "Chumphon", "Chiang Rai", "Chiang Mai", "Trang", "Trat", "Tak", "Nakhon Nayok",
    "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Si Thammarat", "Nakhon Sawan", "Nonthaburi", "Narathiwat", "Nan", 
    "Bueng Kan", "Buri Ram", "Pathum Thani", "Prachuap Khiri Khan", "Prachin Buri", "Pattani", "Phra Nakhon Si Ayutthaya", 
    "Phang Nga", "Phatthalung", "Phichit", "Phitsanulok", "Phetchaburi", "Phetchabun", "Phrae", "Phayao", "Phuket", 
    "Maha Sarakham", "Mukdahan", "Mae Hong Son", "Yala", "Yasothon", "Roi Et", "Ranong", "Rayong", "Ratchaburi",
    "Lopburi", "Lampang", "Lamphun", "Loei", "Si Sa Ket", "Sakon Nakhon", "Songkhla", "Satun", "Samut Prakan", 
    "Samut Songkhram", "Samut Sakhon", "Sa Kaeo", "Saraburi", "Sing Buri", "Sukhothai", "Suphan Buri", "Surat Thani",
    "Surin", "Nong Khai", "Nong Bua Lamphu", "Ang Thong", "Udon Thani", "Uthai Thani", "Uttaradit", "Ubon Ratchathani",
    "Amnat Charoen"
  ]

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Please fill in your resume information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <Input placeholder="First name" />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <Input placeholder="Last name" />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Day
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Month
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
              {Array.from({ length: 50 }, (_, i) => 2024 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nationality
          </label>
          <Input placeholder="Nationality" />
        </div>

        {/* Religion */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Religion
          </label>
          <Input placeholder="Religion" />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight
          </label>
          <div className="relative">
            <Input placeholder="Weight" type="number" />
            <span className="absolute right-3 top-2 text-gray-500">kg</span>
          </div>
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height
          </label>
          <div className="relative">
            <Input placeholder="Height" type="number" />
            <span className="absolute right-3 top-2 text-gray-500">cm</span>
          </div>
        </div>
      </div>

      {/* English Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          English Level
        </label>
        <div className="flex gap-4">
          {[
            { value: "poor", label: "Poor" },
            { value: "fair", label: "Fair" },
            { value: "good", label: "Good" },
            { value: "excellent", label: "Excellent" },
          ].map((level) => (
            <label key={level.value} className="flex items-center">
              <input
                type="radio"
                name="englishLevel"
                value={level.value}
                checked={englishLevel === level.value}
                onChange={() => setEnglishLevel(level.value as typeof englishLevel)}
                className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              />
              <span className="ml-2 text-gray-700">{level.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Contact Information & Portfolio Links</h3>
        
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input placeholder="Phone Number" type="tel" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input placeholder="Email" type="email" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Address Information</h3>
        
        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <Input placeholder="Postal Code" />
        </div>

        {/* Subdistrict */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subdistrict
          </label>
          <Input placeholder="Subdistrict" />
        </div>

        {/* District */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            District
          </label>
          <Input placeholder="District" />
        </div>

        {/* Province */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Province
          </label>
          <Input placeholder="Province" />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea 
            rows={3}
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="House number, street, alley"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Preferences</h3>
        
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              value="internship"
              className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
            />
            <span className="ml-2 text-gray-700">Looking for Internship</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              value="job"
              className="w-4 h-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
            />
            <span className="ml-2 text-gray-700">Looking for Job</span>
          </label>
        </div>

        {/* Desired Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Desired Position
          </label>
          <Input placeholder="Specify multiple positions, e.g., HR, Accounting, Admin" />
        </div>

        {/* Desired Provinces */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Desired Provinces (Select up to 3 provinces)
          </label>
          <select 
            className="w-full rounded-lg p-3 bg-white border text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value=""
            onChange={(e) => {
              if (selectedProvinces.length < 3) {
                setSelectedProvinces([...selectedProvinces, e.target.value])
              }
            }}
          >
            <option value="">Select Province</option>
            {provinces
              .filter(p => !selectedProvinces.includes(p))
              .map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
          </select>

          {/* Display Selected Provinces */}
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedProvinces.map((province) => (
              <div 
                key={province}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {province}
                <button
                  type="button"
                  onClick={() => setSelectedProvinces(selectedProvinces.filter(p => p !== province))}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
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