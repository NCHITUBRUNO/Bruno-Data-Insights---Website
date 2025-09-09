import { useState } from 'react';
import { BarChart3, PieChart, Database, Cloud, Users, BookOpen } from 'lucide-react';

const Services = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-900">MTN Mobile Money</h4>
            <p className="text-gray-600">+237 652 499 571</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900">Orange Money</h4>
            <p className="text-gray-600">+237 692 384 721</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-semibold text-gray-900">UBA Bank Account</h4>
            <p className="text-gray-600">Account: XXXXXXXXXX</p>
            <p className="text-gray-600">Name: Bruno Data Insights</p>
          </div>
        </div>
        <button
          onClick={() => setShowPaymentModal(false)}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
  const services = [
    {
      icon: BarChart3,
      title: 'Power BI Development & Training',
      description: 'Complete Power BI solutions from data modeling to advanced DAX calculations. Corporate training programs available.',
      features: ['Custom Dashboard Development', 'DAX Formula Optimization', 'Data Modeling', 'Corporate Training'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: PieChart,
      title: 'Tableau Analytics & Training',
      description: 'Professional Tableau development services and comprehensive training programs for all skill levels.',
      features: ['Interactive Visualizations', 'Advanced Calculations', 'Server Administration', 'Hands-on Workshops'],
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Database,
      title: 'Azure SQL Database Administration',
      description: 'Complete database management, optimization, and security implementation for Azure SQL environments.',
      features: ['Database Optimization', 'Security Implementation', 'Performance Tuning', 'Backup & Recovery'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Cloud,
      title: 'Azure Synapse Analytics',
      description: 'End-to-end data warehousing solutions using Azure Synapse for large-scale analytics projects.',
      features: ['Data Pipeline Development', 'Big Data Processing', 'Real-time Analytics', 'Cost Optimization'],
      image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: BarChart3,
      title: 'Azure Analysis Services',
      description: 'Scalable analytical data models in the cloud with enterprise-grade security and performance.',
      features: ['Tabular Model Development', 'Role-based Security', 'Scale-out Configuration', 'Hybrid Connectivity'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Database,
      title: 'Data Modeling and Relational Database Design using ERwin',
      description: 'Professional data modeling and relational database design using ERwin for enterprise-grade database architecture.',
      features: ['ERwin Data Modeling', 'Relational Database Design', 'Entity Relationship Diagrams', 'Database Architecture'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Cloud,
      title: 'Microsoft Fabric Data Analyst',
      description: 'Comprehensive analytics solutions using Microsoft Fabric for unified data experiences.',
      features: ['Data Lakehouse Architecture', 'Real-time Analytics', 'Power BI Integration', 'OneLake Management'],
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Users,
      title: 'Microsoft Fabric Data Engineer',
      description: 'Advanced data engineering services using Microsoft Fabric for enterprise-scale data solutions.',
      features: ['Data Pipeline Engineering', 'Spark Development', 'Data Factory Integration', 'Lakehouse Optimization'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: '150,000 FCFA',
      description: 'Perfect for small businesses getting started with data analytics',
      features: [
        'Basic Power BI Dashboard',
        'Data Source Connection',
        '2 Hours of Training',
        '1 Month Support'
      ]
    },
    {
      name: 'Professional Package',
      price: '200,000 FCFA',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Advanced BI Solution',
        'Multiple Data Sources',
        'Custom Visualizations',
        '8 Hours of Training',
        '3 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'Custom Quote',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full BI Implementation',
        'Cloud Architecture',
        'Team Training Program',
        'Ongoing Support',
        'Custom Development'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">My Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive data analytics and business intelligence solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="h-full bg-blue-900 bg-opacity-50 flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  pkg.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
                onClick={() => setShowPaymentModal(true)}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Corporate Training Programs</h2>
                <p className="text-lg mb-6">
                  Empower your team with comprehensive training programs in Power BI, Tableau, 
                  and Azure services. Customized curriculum based on your specific needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Hands-on Workshop Sessions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Customized Learning Materials</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Post-Training Support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Certification Preparation</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-lg p-8">
                  <div className="text-4xl font-bold mb-4">50+</div>
                  <div className="text-lg">Training Sessions Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showPaymentModal && <PaymentModal />}
    </div>
  );
};

export default Services;
