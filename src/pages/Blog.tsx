import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BlogPostModal = ({ post, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
            
            <div className="space-y-4 text-gray-700">
              <p>
                This comprehensive guide explores advanced techniques and best practices that will elevate your data analytics capabilities. 
                Whether you're a beginner looking to expand your skills or an experienced professional seeking to optimize your workflow, 
                this article provides valuable insights and practical examples.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key Topics Covered</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced calculation techniques and optimization strategies</li>
                <li>Best practices for data modeling and visualization design</li>
                <li>Performance tuning and troubleshooting common issues</li>
                <li>Integration with cloud services and modern data platforms</li>
                <li>Real-world case studies and implementation examples</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Implementation Guide</h3>
              <p>
                Follow our step-by-step approach to implement these techniques in your own projects. 
                Each section includes practical examples, code snippets, and troubleshooting tips to ensure successful implementation.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Conclusion</h3>
              <p>
                By applying these advanced techniques, you'll be able to create more efficient, scalable, and impactful data solutions. 
                Remember to always consider your specific use case and requirements when implementing these strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'powerbi', name: 'Power BI' },
    { id: 'azure', name: 'Azure' },
    { id: 'tableau', name: 'Tableau' },
    { id: 'tips', name: 'Tips & Tricks' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering DAX: Advanced Calculations in Power BI',
      excerpt: 'Discover advanced DAX techniques that will take your Power BI reports to the next level. Learn time intelligence, complex filtering, and performance optimization.',
      category: 'powerbi',
      author: 'Bruno',
      date: '2025-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Azure Synapse Analytics: Best Practices for Data Warehousing',
      excerpt: 'A comprehensive guide to building scalable data warehouses using Azure Synapse Analytics. Covering architecture decisions, performance tuning, and cost optimization.',
      category: 'azure',
      author: 'Bruno',
      date: '2025-01-12',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Creating Interactive Dashboards with Tableau',
      excerpt: 'Learn how to build engaging, interactive dashboards that tell compelling data stories. Tips for effective visual design and user experience.',
      category: 'tableau',
      author: 'Bruno',
      date: '2025-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Microsoft Fabric: The Future of Analytics',
      excerpt: 'Exploring Microsoft Fabric and how it unifies data analytics, engineering, and science in a single platform. What this means for your organization.',
      category: 'tips',
      author: 'Bruno',
      date: '2025-01-08',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Data Security in Power BI: Implementation Guide',
      excerpt: 'A detailed walkthrough of implementing row-level security, data encryption, and access controls in Power BI environments.',
      category: 'powerbi',
      author: 'Bruno',
      date: '2025-01-05',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: '5 Common Azure SQL Database Mistakes to Avoid',
      excerpt: 'Learn from common pitfalls in Azure SQL Database management and how to optimize performance, security, and costs effectively.',
      category: 'azure',
      author: 'Bruno',
      date: '2025-01-03',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Data Insights Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and best practices in data analytics and business intelligence
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div 
                  className="h-80 lg:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                ></div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                    <span onClick={() => setSelectedPost(featuredPost)}>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                    <span onClick={() => setSelectedPost(post)}>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Data Insights
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest blog posts, industry insights, and exclusive tips directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Popular Tags</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Power BI', 'DAX', 'Azure Synapse', 'Tableau', 'Microsoft Fabric', 'Data Modeling', 'SQL', 'Analytics', 'Visualization', 'Business Intelligence'].map((tag, index) => (
              <span key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {selectedPost && (
        <BlogPostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
};

export default Blog;