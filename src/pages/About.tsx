import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Microsoft Certified',
      description: 'Power BI Data Analyst Associate & Azure Database Administrator'
    },
    {
      icon: BookOpen,
      title: 'Training Expert',
      description: 'Delivered 50+ training sessions to corporate teams worldwide'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: '95% client retention rate with ongoing partnerships'
    },
    {
      icon: TrendingUp,
      title: 'Business Impact',
      description: 'Generated $2M+ in client savings through data optimization'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About Bruno</h1>
              <p className="text-xl mb-6 leading-relaxed">
                A passionate data analyst and business intelligence expert with over 8 years 
                of experience transforming raw data into strategic business insights.
              </p>
              <p className="text-lg opacity-90">
                Specializing in Microsoft ecosystem solutions, Azure cloud services, and 
                comprehensive data analytics training programs.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                alt="Bruno - Data Analytics Professional" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">My Professional Journey</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Database Administrator</h3>
                <p className="text-gray-600 mb-2">2018 - Present</p>
                <p className="text-gray-700">
                  Leading enterprise-level BI implementations and training programs across 
                  multiple industries including healthcare, finance, and retail.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Intelligence Developer</h3>
                <p className="text-gray-600 mb-2">2019 - 2021</p>
                <p className="text-gray-700">
                  Specialized in Power BI and Tableau development, creating over 200+ 
                  dashboards and reports for various client needs.
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">I.T System Administrator</h3>
                <p className="text-gray-600 mb-2">2017 - 2019</p>
                <p className="text-gray-700">
                  Started my journey in data analytics, focusing on SQL development 
                  and database administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition and impact achieved through dedication to excellence in data analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <achievement.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "Data is not just numbers and charts—it's the story of your business waiting 
              to be told. My mission is to help organizations unlock these stories and 
              transform them into actionable strategies that drive real business impact."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;