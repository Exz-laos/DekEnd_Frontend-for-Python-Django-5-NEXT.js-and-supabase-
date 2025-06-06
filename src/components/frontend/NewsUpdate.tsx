import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  title: string;
  image: string;
  link: string;
  isNew?: boolean;
}

const newsItems: NewsItem[] = [
  {
    title: 'System Update for August 2024',
    image: '/images/news/news1.webp',
    link: '#',
    isNew: true,
  },
  {
    title: 'Dekend Celebrates Yamaha Thailand 2025 Anniversary',
    image: '/images/news/news2.webp',
    link: '#',
    isNew: true,
  },
  {
    title: 'Taxes: An Important Topic Students Should Learn',
    image: '/images/news/news3.jpg',
    link: '#',
  },
  {
    title: '6 Essentials Every Student Should Have After an Internship',
    image: '/images/news/news4.jpg',
    link: '#',
  },
];

const NewsUpdate = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News Updates</h2>
          <p className="text-gray-600">Stay informed with the latest system updates and announcements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.isNew && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                      New Update
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdate;
