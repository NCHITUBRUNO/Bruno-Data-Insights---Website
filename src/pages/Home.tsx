// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import { TrendingUp, Users, Award, Database } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: TrendingUp, label: 'Projects Completed', value: '20+' },
    { icon: Users, label: 'Satisfied Clients', value: '10+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Database, label: 'Data Sources Integrated', value: '100+' },
  ];

  const services = [
    {
      title: 'Power BI Development',
      description: 'Create stunning dashboards and reports that drive business decisions.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Tableau Analytics',
      description: 'Transform complex data into compelling visual narratives.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Azure Solutions',
      description: 'Scalable cloud data architecture and analytics solutions.',
      image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Slideshow */}
      <Slideshow />

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Bruno Data Insights
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 8 years of experience in data analytics and business intelligence, 
                I specialize in transforming complex data into actionable insights that drive 
                business growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My expertise spans across Microsoft Power BI, Tableau, Azure cloud services, 
                and comprehensive data engineering solutions using Microsoft Fabric.
              </p>
              <Link 
                to="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Learn More About Me
              </Link>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://i.im.ge/2025/09/04/n2qcdy.IMG-9368.jpeg" 
                alt="Bruno - Data Analytics Professional" 
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From data visualization to cloud architecture, I provide comprehensive 
              solutions to meet your analytics needs. Azure Virtual Machine Rentals, Cloud Servers for SMEs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how I can help you unlock the power of your data and 
            drive meaningful business insights.
          </p>
          <Link 
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;