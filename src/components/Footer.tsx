// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BarChart3, Mail, Phone, MapPin, Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-xl">Bruno Data Insights</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming data into actionable insights. Specializing in Power BI, Tableau, Azure services, and comprehensive data analytics solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Microsoft Power BI Analytics</li>
              <li>Data Analytics with Tableau</li>
              <li>Microsoft Fabric Data Analytics</li>
              <li>Microsoft Fabric Data Engineer</li>
              <li>Azure SQL Database Administration</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@brunodatainsights.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+237 652 499 571</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Global Services</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="http://www.linkedin.com/in/saah-bruno-b29968342" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/NCHITUBRUNO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/brunodatainsights" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://tiktok.com/@brunodatainsights"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bruno Data Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;