```jsx
import React, { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const profileInfo = {
    name: "Sam Coil Docena",
    title: "Graphic Designer",
    image: "https://placehold.co/150x150/2d2d2d/ffffff?text=SCD",
    contact: {
      email: "dsamcoil@gmail.com",
      phone: "09951844595",
      location: "Ambago, Butuan City",
      website: "www.reallygreatsite.com"
    },
    about: "I am Sam Coil Docena, an adaptable student with strong computer literacy skills, eager to learn and contribute effectively in any role.",
    education: [
      {
        degree: "Bachelor of Science in Information Technology",
        institution: "Caraga State University",
        period: "2024-Present",
        location: "Ampayon, Butuan City"
      },
      {
        degree: "STEM Graduate",
        institution: "Agusan National High School",
        period: "2018-2024",
        location: "A.D. Curato Street, Butuan City"
      }
    ],
    workExperience: [
      {
        title: "Graphic Designer",
        company: "Apple",
        period: "Jan 2021 - Jan 2022",
        description: "Created visual designs for digital products and marketing materials"
      },
      {
        title: "Web Developer",
        company: "EA Sports",
        period: "Jan 2021 - Jan 2022",
        description: "Developed and maintained web applications for gaming platforms"
      }
    ],
    certificates: [
      {
        title: "freeCodeCamp – Responsive Web Design Certificate",
        year: "2024"
      },
      {
        title: "LinkedIn Learning – JavaScript Essential Training",
        year: "2025"
      }
    ],
    skills: [
      "Organized", "Teamwork", "Communication", "Team Player"
    ],
    references: [
      {
        name: "Janine S. Gelaga, PhD",
        title: "Professor, Caraga State University",
        email: "janinesg@gmail.com"
      },
      {
        name: "Nylson James B. Villafior, PhD",
        title: "Professor, Father Saturnino Urios University",
        email: "nylsonjv@gmail.com"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Brand Identity Design",
        description: "Complete brand identity system for a local startup",
        image: "https://placehold.co/400x300/1a1a1a/ffffff?text=Brand+Design",
        category: "Graphic Design"
      },
      {
        id: 2,
        title: "Website Redesign",
        description: "Modernized UI/UX for an e-commerce platform",
        image: "https://placehold.co/400x300/2d2d2d/ffffff?text=Web+Design",
        category: "Web Design"
      },
      {
        id: 3,
        title: "Mobile App UI",
        description: "Designed user interface for a fitness tracking app",
        image: "https://placehold.co/400x300/3d3d3d/ffffff?text=App+Design",
        category: "UI/UX Design"
      }
    ],
    social: {
      linkedin: "https://linkedin.com/in/samcoildocena",
      github: "https://github.com/samcoildocena",
      dribbble: "https://dribbble.com/samcoildocena",
      behance: "https://behance.net/samcoildocena"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={profileInfo.image} 
                alt="Sam Coil Docena" 
                className="w-20 h-20 rounded-full mr-6 border border-gray-300"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{profileInfo.name}</h1>
                <p className="text-xl text-gray-600 font-medium mt-1">{profileInfo.title}</p>
              </div>
            </div>
            <nav className="flex space-x-8">
              {["home", "about", "education", "experience", "projects", "certificates", "skills", "references"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`capitalize transition-all duration-300 font-medium ${
                    activeSection === item
                      ? "text-black border-b-2 border-black pb-1"
                      : "text-gray-600 hover:text-black hover:border-b hover:border-gray-300 pb-1"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Home Section */}
        {activeSection === "home" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-gray-800 pl-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center group">
                    <svg className="w-5 h-5 text-gray-800 mr-3 group-hover:text-gray-900 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{profileInfo.contact.email}</span>
                  </div>
                  <div className="flex items-center group">
                    <svg className="w-5 h-5 text-gray-800 mr-3 group-hover:text-gray-900 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{profileInfo.contact.phone}</span>
                  </div>
                  <div className="flex items-center group">
                    <svg className="w-5 h-5 text-gray-800 mr-3 group-hover:text-gray-900 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{profileInfo.contact.location}</span>
                  </div>
                  <div className="flex items-center group">
                    <svg className="w-5 h-5 text-gray-800 mr-3 group-hover:text-gray-900 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.923a3 3 0 000 4.242 3 3 0 004.242 0l.055-.055a3 3 0 000-4.242 3 3 0 00-4.242 0l-.055.055zm-1.055 1.055a3 3 0 010-4.242 3 3 0 014.242 0l.055.055a3 3 0 010 4.242 3 3 0 01-4.242 0l-.055-.055z" />
                    </svg>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{profileInfo.contact.website}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-gray-800 pl-6">
                <h2 className="text-2xl font-bold text-gray-900">About</h2>
                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {profileInfo.about}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-4 border-gray-800 pl-6">
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                <div className="mt-6 space-y-6">
                  {profileInfo.education.map((edu, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{edu.degree}</h3>
                          <p className="text-gray-700">{edu.institution}</p>
                          <p className="text-gray-600 text-sm">{edu.period}</p>
                          <p className="text-gray-500 text-sm">{edu.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-l-4 border-gray-800 pl-6">
                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                <div className="mt-6 space-y-6">
                  {profileInfo.workExperience.map((exp, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.14M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{exp.title}</h3>
                            <span className="text-gray-800 font-medium">{exp.company}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{exp.period}</p>
                          <p className="text-gray-700 mt-2">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
              <div className="text-center">
                <img 
                  src={profileInfo.image} 
                  alt="Sam Coil Docena" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 border border-gray-300"
                />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{profileInfo.name}</h3>
                <p className="text-xl text-gray-600 font-medium mb-8">{profileInfo.title}</p>
                <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {profileInfo.about}
                  </p>
                </div>
              </div>
              
              {/* Social Media Links Section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connect With Me</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href={profileInfo.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={profileInfo.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  <a 
                    href={profileInfo.social.dribbble} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.346c-.302 1.508-1.453 2.827-3.062 3.553-.336.152-.683.272-1.039.361-1.036.26-2.122.26-3.158 0-.356-.09-.703-.21-1.039-.361-1.609-.726-2.76-2.045-3.062-3.553-.066-.33-.12-.664-.162-.999-.077-.615-.077-1.237 0-1.852.042-.335.096-.669.162-.999.302-1.508 1.453-2.827 3.062-3.553.336-.152.683-.272 1.039-.361 1.036-.26 2.122-.26 3.158 0 .356.09.703.21 1.039.361 1.609.726 2.76 2.045 3.062 3.553.066.33.12.664.162.999.077.615.077 1.237 0 1.852-.042.335-.096.669-.162.999z"/>
                    </svg>
                  </a>
                  <a 
                    href={profileInfo.social.behance} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 0v24h24V0H0zm19.5 5.25h-15v3h15v-3zm-6 4.5h-9v3h9v-3zm4.5 4.5h-13.5v3H15v-3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {profileInfo.education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 w-1 h-12 bg-gray-800 rounded-full"></div>
                  <div className="ml-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-700 text-lg">{edu.institution}</p>
                        <div className="flex items-center mt-2">
                          <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600">{edu.period}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Work Experience Section */}
        {activeSection === "experience" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {profileInfo.workExperience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 w-1 h-12 bg-gray-800 rounded-full"></div>
                  <div className="ml-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.14M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                          <span className="text-gray-800 font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center mt-2">
                          <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600">{exp.period}</span>
                        </div>
                        <p className="text-gray-700 mt-4">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Here are some of my recent projects showcasing my design skills and creative approach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {profileInfo.projects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-700">{project.description}</p>
                    <button className="mt-4 text-gray-800 font-semibold hover:text-gray-900 transition-colors duration-300 flex items-center">
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {activeSection === "certificates" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileInfo.certificates.map((cert, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                        <p className="text-gray-600 mt-2">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profileInfo.skills.map((skill, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              
              {/* Add more skills with progress bars */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {[
                    { name: "Adobe Photoshop", level: 85, color: "bg-gray-800" },
                    { name: "Adobe Illustrator", level: 90, color: "bg-gray-800" },
                    { name: "Figma", level: 88, color: "bg-gray-800" },
                    { name: "HTML/CSS", level: 75, color: "bg-gray-800" },
                    { name: "JavaScript", level: 70, color: "bg-gray-800" }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* References Section */}
        {activeSection === "references" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Character References</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              {profileInfo.references.map((ref, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 w-1 h-12 bg-gray-800 rounded-full"></div>
                  <div className="ml-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.14M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{ref.name}</h3>
                        <p className="text-gray-700">{ref.title}</p>
                        <div className="flex items-center mt-2">
                          <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600">{ref.email}</span>
                        </div>
                        <div className="mt-4">
                          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                            Contact Reference
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href={profileInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              LinkedIn
            </a>
            <a href={profileInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              GitHub
            </a>
            <a href={profileInfo.social.dribbble} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              Dribbble
            </a>
            <a href={profileInfo.social.behance} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              Behance
            </a>
          </div>
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Created by Sam Docena
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
```
