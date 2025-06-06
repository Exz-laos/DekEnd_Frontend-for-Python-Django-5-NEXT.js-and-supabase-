import { useState } from 'react'

import { authService } from '@/services/authService'
import { LoginFormData } from '@/types/auth'


export function useLoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.login(formData)
      authService.saveTokens(response.tokens)
      authService.saveUser(response.user)
      window.location.href = '/'
    } catch (error) {
      setError('username or password is incorrect')
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    formData,
    showPassword,
    isLoading,
    error,
    setShowPassword,
    handleSubmit,
    handleInputChange,
  }
} 