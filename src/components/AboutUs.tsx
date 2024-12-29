import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Us</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Dekend 
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a job and internship search platform that leverages AI technology to enhance the capabilities of a traditional job search website. With intelligent data-linking capabilities between companies, job seekers, and interns, we help job seekers find the perfect job, students find suitable internships, and companies get the best-fit candidates for their positions.
          </p>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            What can you explore with Dekend?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video">
            <Image
              src="/images/dekendin.png"
              alt="About Dekend"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Internships
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>We are a job and internship search platform utilizing AI technology to improve the potential of traditional job search websites.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Our platform intelligently connects data between companies, job seekers, and interns.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Helping job seekers find their ideal jobs, students find suitable internships, and companies get the best candidates for their positions.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
