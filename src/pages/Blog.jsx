import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding Your Health Insurance Options',
      excerpt: 'Learn about the different types of health insurance plans and how to choose the right one for your needs.',
      image: 'https://images.unsplash.com/photo-1450101490226-6d72e8a737b7',
      date: 'August 1, 2025',
    },
    {
      title: 'Tips for a Stress-Free Claims Process',
      excerpt: 'Discover how to navigate the claims process with ease and efficiency to get the most out of your insurance.',
      image: 'https://images.unsplash.com/photo-1516321310767-75f7200c9998',
      date: 'July 20, 2025',
    },
    {
      title: 'The Importance of Preventive Care',
      excerpt: 'Explore why preventive care is key to maintaining your health and reducing long-term healthcare costs.',
      image: 'https://images.unsplash.com/photo-1576091160397-1f3c879a2076',
      date: 'July 10, 2025',
    },
    {
      title: 'How to Choose the Right Family Plan',
      excerpt: 'A guide to selecting the best family health insurance plan to protect your loved ones.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c7a6',
      date: 'June 15, 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321310767-75f7200c9998"
            alt="Blog Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Blog</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Stay informed with our latest health and insurance insights
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Featured Post</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Dive into our top story of the month
            </p>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-64 sm:h-96 object-cover rounded-md mb-4 sm:mb-6"
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{blogPosts[0].title}</h3>
            <p className="text-gray-500 text-sm sm:text-base mt-2">{blogPosts[0].date}</p>
            <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">{blogPosts[0].excerpt}</p>
            <a
              href="#"
              className="mt-4 sm:mt-6 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
            >
              Read More <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">All Posts</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Explore more of our health and insurance articles
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{post.date}</p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
                >
                  Read More <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Secure Your Health?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Get a personalized quote or speak with our experts today!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold transition duration-300"
            >
              Get a Quote <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-white hover:bg-white hover:text-blue-600 rounded-full font-semibold transition duration-300"
            >
              Contact Support <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;