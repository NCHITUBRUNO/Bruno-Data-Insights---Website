import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, Database, Eye, Award, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProjectDetails = (projectId: number) => {
    const url = `/project/${projectId}`;
    window.open(url, '_blank');
  };
  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      category: "Power BI",
      description: "Interactive dashboard tracking sales KPIs, revenue trends, and regional performance with real-time data updates.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "SQL Server", "DAX"],
      metrics: { users: "500+", improvement: "35%" }
    },
    {
      id: 2,
      title: "Customer Analytics Platform",
      category: "Tableau",
      description: "Comprehensive customer behavior analysis with segmentation, lifetime value calculations, and churn prediction models.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Tableau", "Azure SQL", "Python"],
      metrics: { users: "200+", improvement: "42%" }
    },
    {
      id: 3,
      title: "Financial Reporting Suite",
      category: "Microsoft Fabric",
      description: "End-to-end financial reporting solution with automated data pipelines and executive-level dashboards.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Microsoft Fabric", "Azure Synapse", "Power BI"],
      metrics: { users: "150+", improvement: "28%" }
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      category: "Azure Analytics",
      description: "Real-time supply chain monitoring with predictive analytics for inventory optimization and demand forecasting.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Azure Synapse", "Power BI", "Machine Learning"],
      metrics: { users: "300+", improvement: "50%" }
    },
    {
      id: 5,
      title: "HR Analytics Dashboard",
      category: "Power BI",
      description: "Employee performance tracking, recruitment analytics, and workforce planning with predictive insights.",
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Power BI", "Azure SQL", "Excel"],
      metrics: { users: "100+", improvement: "38%" }
    },
    {
      id: 6,
      title: "Marketing Campaign ROI",
      category: "Tableau",
      description: "Multi-channel marketing performance analysis with attribution modeling and campaign optimization insights.",
      image: "https://images.pexels.com/photos/590018/pexels-photo-590018.jpeg?auto=compress&cs=tinysrgb&w=800",
      tools: ["Tableau", "Google Analytics", "SQL"],
      metrics: { users: "250+", improvement: "45%" }
    }
  ];

  const categories = ["All", "Power BI", "Tableau", "Microsoft Fabric", "Azure Analytics"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Visualization Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming complex data into actionable insights through compelling visualizations and interactive dashboards
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Avg. Performance Boost</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Data Points Analyzed</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Stakeholders Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of data visualization projects across various industries and platforms
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{project.metrics.users}</span> users
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      +{project.metrics.improvement} improvement
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 group">
                    <span onClick={() => openProjectDetails(project.id)}>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Industry recognition for excellence in data visualization and analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Microsoft MVP</h3>
              <p className="text-gray-600">Data Platform Most Valuable Professional</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tableau Certified</h3>
              <p className="text-gray-600">Desktop Specialist & Data Analyst</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Azure Expert</h3>
              <p className="text-gray-600">Data Engineer & Solutions Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can create compelling visualizations and insights for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Start Your Project
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;