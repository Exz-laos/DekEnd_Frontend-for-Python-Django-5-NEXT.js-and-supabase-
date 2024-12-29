'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SocialButton } from '@/components/ui/social-button'
import { useLoginForm } from '@/components/auth/login-form/useLoginForm'

export function LoginForm() {
    const {
      formData,
      showPassword,
      isLoading,
      error,
      setShowPassword,
      handleSubmit,
      handleInputChange,
    } = useLoginForm()
  
    return (
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            return to home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          <p className="text-gray-600 mt-2">Welcome back! Please log in to continue.</p>
        </div>
  
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
  
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            id="username"
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
  
          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            showPassword={showPassword}
            onShowPasswordClick={() => setShowPassword(!showPassword)}
            required
          />
  
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                remember me
              </label>
            </div>
  
            <Link href="/forgot-password" className="text-sm text-green-500 hover:text-green-600">
              forgot password?
            </Link>
          </div>
  
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </Button>
  
          <div className="mt-6 flex flex-col gap-4">
            <SocialButton provider="line" type="button">
              Login with LINE
            </SocialButton>
            <SocialButton provider="google" type="button">
              Login with GOOGLE
            </SocialButton>
          </div>
  
          <p className="text-center text-gray-600 mt-6">
          Do not have an account?{' '}
            <Link href="/register" className="text-green-500 hover:text-green-600">
            Register
            </Link>
          </p>
        </form>
      </div>
    )
  } 