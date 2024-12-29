import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900">dekend.com</h2>
              <p className="text-sm text-gray-600">
                The right internship answers your needs.
              </p>
              <p className="text-sm text-gray-600">
                A website for internships, jobs for students, and professionals looking for internship opportunities and job positions across various industries.
              </p>
            </div>
          </div>

          {/* For Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">For Companies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-green-500">Post Job</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-500">Service Rates</Link></li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">For Students and Job Seekers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-green-500">Create Online Resume</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-500">Find Jobs</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-green-500">Find Internships</Link></li>
            </ul>
          </div>

          {/* Popular Keywords */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Popular Keywords</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Internship</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Find Internship</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Internship Website</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Post Jobs for Free</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Apply for Jobs Online</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Intern Students</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Find Employees</Link>
              <Link href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:text-green-500 rounded-full">Part-Time Jobs</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-sm text-center text-gray-600">
          © Copyright {new Date().getFullYear()} DEKEND, dekend.com is owned and operated by Pasition Co., Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
