import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetails = () => {
  useParams();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: 1,
    title: "Sales Performance Dashboard",
    category: "Power BI",
    description: "Interactive dashboard tracking sales KPIs, revenue trends, and regional performance with real-time data updates.",
    mainImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tools: ["Power BI", "SQL Server", "DAX"],
    client: "Retail Corporation",
    duration: "6 weeks",
    year: "2024",
    challenge: "The client needed a comprehensive view of sales performance across multiple regions and product categories, with the ability to drill down into specific metrics and identify trends in real-time.",
    solution: "Developed an interactive Power BI dashboard that consolidates data from multiple sources, featuring advanced DAX calculations for complex KPIs, dynamic filtering capabilities, and automated refresh schedules.",
    results: [
      "35% improvement in decision-making speed",
      "Reduced reporting time from 8 hours to 15 minutes",
      "Identified $2M in additional revenue opportunities",
      "Improved data accuracy by 95%"
    ],
    additionalImages: [
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  };

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % project.additionalImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(project.additionalImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + project.additionalImages.length) % project.additionalImages.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(project.additionalImages[prevIndex]);
  };

  const Lightbox = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-6xl max-h-full">
        <button
          onClick={closeLightbox}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        
        <img
          src={lightboxImage ?? undefined}
          alt={`${project.title} - Expanded view`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        
        {project.additionalImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
        
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
          {lightboxIndex + 1} of {project.additionalImages.length}
        </div>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Project Title and Details */}
          <div>
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                <p className="text-gray-600">{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-600">{project.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Year</h3>
                <p className="text-gray-600">{project.year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Project Image */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.mainImage} 
                alt={project.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Live Dashboard Embed */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Interactive Dashboard</h2>
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <div className="max-w-md mx-auto">
              <ExternalLink className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Power BI Dashboard Embed</h3>
              <p className="text-gray-500 mb-4">
                Interactive dashboard would be embedded here using Power BI embed code
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Live Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* About This Project */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Project</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600 mb-6">{project.challenge}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results Achieved</h3>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Project Images */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.additionalImages.map((image, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(image, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {lightboxImage && <Lightbox />}
    </div>
  );
};

export default ProjectDetails;