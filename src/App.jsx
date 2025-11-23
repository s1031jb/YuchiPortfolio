import React, { useState, useEffect } from 'react';
import { Phone, Mail, Linkedin, ArrowRight, ChevronRight, ExternalLink, MousePointer2, Layers, Layout, PenTool } from 'lucide-react';

// ------------------------------------------------------------------
// 圖片路徑：更新為您提供的 GitHub 連結
// ------------------------------------------------------------------
const profileImage = "https://github.com/user-attachments/assets/21163382-6a81-414d-b111-080b9259988f";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, selectedProject]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const personalInfo = {
    name: "Yuchi Chang",
    title: "Designing the future of multi-device interaction.",
    bio: "Senior Interaction Designer specializing in peripheral software ecosystems. I craft intuitive, multi-device experiences that make keyboards, mice, hubs, and styluses feel seamless and delightful.",
    phone: "+886 958 644 522",
    email: "s1031jb@gmail.com",
    linkedin: "linkedin.com/in/yuchichang", 
    image: profileImage
  };

  const projects = [
    {
      id: 1,
      title: "Seamless Multi-Device Flow",
      category: "System UX",
      tagline: "Designing a Smarter Cross-Screen Experience",
      icon: <Layers className="w-6 h-6" />,
      description: "Redefined how users move continuously between devices. By abstracting complex networking protocols into a simple 'push past the edge' interaction, we reduced cognitive load and setup time by 40%.",
      details: "Focused on the 'handover' moment between operating systems. Created motion studies for cursor transitions and file drag-and-drop visualizations that feel physical rather than digital."
    },
    {
      id: 2,
      title: "Smart Peripheral Hub Experience",
      category: "Hardware Software",
      tagline: "Simplifying System-Level Controls for Multi-Device Setups",
      icon: <MousePointer2 className="w-6 h-6" />,
      description: "A unified control center for high-performance peripherals. Moved away from 'driver' mental models to a 'device capability' model, allowing users to visually map buttons and macros effortlessly.",
      details: "Designed the architecture for a modular UI that adapts based on connected devices. Solved key pain points in macro recording and lighting synchronization."
    },
    {
      id: 3,
      title: "Visual Shortcut Wheel",
      category: "Interaction Design",
      tagline: "A Faster Way to Access Commands Across Apps",
      icon: <Layout className="w-6 h-6" />,
      description: "An overlay interface triggered by gesture or dedicated hardware key. Provides context-aware tools (like a color picker in Photoshop or mute in Zoom) in a radial UI.",
      details: "Includes a highly responsive React-based prototype demonstrating <50ms latency feedback. Developed the 'muscle memory' positioning system for pro-users."
    },
    {
      id: 4,
      title: "Pointer Effects Suite",
      category: "Visual Communication",
      tagline: "Helping Users Communicate Visually in Presentations",
      icon: <PenTool className="w-6 h-6" />,
      description: "A suite of cursor enhancements designed for remote work and digital presentations. Features include 'Spotlight', 'Magnify', and 'Laser' modes to direct audience attention.",
      details: "Conducted accessibility research to ensure high-contrast modes work for color-blind users. Defined the animation curves for the 'trail' effect to feel smooth, not distracting."
    },
    {
      id: 5,
      title: "iBUYPOWER E-Commerce Experience",
      category: "Web Design",
      tagline: "Optimizing the Custom PC Builder Journey",
      icon: <Layout className="w-6 h-6" />,
      description: "Revamped the customization configurator for gaming PCs. Simplified component compatibility checks and improved mobile responsiveness for complex data tables.",
      details: "Resulted in a 15% increase in conversion rate for mobile users. Created a design system for component cards and specs."
    },
    {
      id: 6,
      title: "Real Estate Agent Platform",
      category: "Freelance",
      tagline: "Brand Identity & Lead Generation Web Design",
      icon: <Layout className="w-6 h-6" />,
      description: "Designed and built a responsive website for a high-volume real estate agent. Focused on trust, clarity of listings, and easy scheduling access.",
      details: "Integrated MLS data feeds and designed a custom 'lifestyle search' filter."
    },
    {
      id: 7,
      title: "PDF24 Mobile App",
      category: "Freelance",
      tagline: "Mobile UI/UX Redesign",
      icon: <Layers className="w-6 h-6" />,
      description: "Modernized the interface for a utility app. Streamlined the 'scan to PDF' flow and reorganized the file management hierarchy.",
      details: "Created a dark mode variant and improved touch targets for document editing tools."
    }
  ];

  const experience = [
    {
      period: "2024 - Present",
      role: "Software Planner / UX Designer",
      company: "HP Inc.",
      desc: "UX + product planning for peripheral software (mice/keyboards/hubs/pen stylus). Focus on multi-device workflows and customizable interaction tools."
    },
    {
      period: "2022 - 2024",
      role: "Freelance UI/UX Designer",
      company: "Self-Employed",
      desc: "Designed web and mobile experiences for international clients while traveling through the US, Canada, Thailand, and Vietnam. Worked closely with founders and product teams to deliver user flows, wireframes, prototypes, and visual design."
    },
    {
      period: "2019 - 2022",
      role: "UI/UX Designer",
      company: "iBUYPOWER inc.",
      desc: "Improved the shopping and product customization experience for gaming PCs and accessories. Created wireframes, user flows, and UI components, collaborating with developers and marketing teams."
    }
  ];

  const education = [
    {
      period: "2016 - 2018",
      school: "National Chung Hsing University",
      degree: "Master’s Degree, Technology Management"
    },
    {
      period: "2012 - 2016",
      school: "National Dong Hwa University",
      degree: "Bachelor's Degree, Tourism, Recreation & Leisure Studies"
    }
  ];

  // -- Components --

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => {setActiveTab('home'); setSelectedProject(null);}} 
          className="text-xl font-bold tracking-tight cursor-pointer text-gray-800 hover:text-blue-600 transition-colors"
        >
          Yuchi Chang
        </div>
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSelectedProject(null);
                window.scrollTo(0,0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${activeTab === item.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden flex space-x-4 text-sm">
           <button onClick={() => setActiveTab('projects')} className="text-gray-600">Projects</button>
           <button onClick={() => setActiveTab('contact')} className="text-gray-600">Contact</button>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-900 text-lg">Yuchi Chang</h3>
          <p className="text-gray-500 text-sm mt-1">Interaction Designer</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
            <Phone size={16} /> {personalInfo.phone}
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
            <Mail size={16} /> {personalInfo.email}
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );

  const HomeSection = () => (
    <div className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Designing the future of <span className="text-blue-600">multi-device</span> interaction.
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-500 font-medium">
              {personalInfo.subtitle}
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            {personalInfo.bio}
          </p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg flex items-center gap-2 group"
            >
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Hero Image - Google Style (Fixed Visibility) */}
        {/* 1. 移除了 animate-scale-in 等進場動畫，防止卡住 */}
        {/* 2. 移除了所有 mask 遮罩 div */}
        {/* 3. 加上了 z-10 確保層級 */}
        <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full flex items-center justify-center z-10">
          {/* Blob Background for depth - 放在 z-0 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          
          <div className="relative w-full h-full overflow-hidden rounded-[3rem]">
             <div className="w-full h-full relative bg-gray-50"> {/* 增加一個淺灰背景，如果圖片讀取慢至少有個底 */}
                <img 
                  src={personalInfo.image} 
                  alt="Yuchi Chang" 
                  className="w-full h-full object-cover object-top block" // 加上 block 確保不被視為 inline
                  style={{ opacity: 1 }} // 強制不透明
                  onError={(e) => {
                    console.error("Image load failed:", e);
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<div class="flex items-center justify-center h-full text-gray-400 bg-gray-100 border-2 border-dashed">Image Path Error: ${personalInfo.image}</div>`;
                  }}
                />
                {/* 遮罩已完全移除 */}
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ResumeSection = () => (
    <div className="max-w-4xl mx-auto px-6 py-32 animate-fade-in">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="space-y-16">
        {/* Experience */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gray-200 rounded-full block"></span>
            Work Experience
          </h3>
          <div className="space-y-10 border-l-2 border-gray-100 pl-8 ml-1">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{job.period}</span>
                </div>
                <div className="text-lg text-gray-700 font-medium mb-2">{job.company}</div>
                <p className="text-gray-600 leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
             <span className="w-2 h-8 bg-gray-200 rounded-full block"></span>
             Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-400 mb-1">{edu.period}</div>
                <h4 className="text-lg font-bold text-gray-900">{edu.school}</h4>
                <p className="text-blue-600">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
             <span className="w-2 h-8 bg-gray-200 rounded-full block"></span>
             Skills & Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Interaction Design", "System-Level UX", "Multi-Device Ecosystems", 
              "User Flows", "Prototyping", "Usability Testing", 
              "Product Planning", "Design Systems", "Remote Collaboration"
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="max-w-6xl mx-auto px-6 py-32 animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Selected Projects</h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          A collection of work focused on hardware-software integration and ecosystem design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => {setSelectedProject(project); window.scrollTo(0,0);}}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[320px]"
          >
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 leading-relaxed">
                {project.tagline}
              </p>
            </div>
            <div className="flex items-center text-blue-600 font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              View Case Study <ArrowRight size={16} className="ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectDetail = ({ project }) => (
    <div className="max-w-4xl mx-auto px-6 py-32 animate-fade-in">
      <button 
        onClick={() => setSelectedProject(null)}
        className="mb-8 flex items-center text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowRight className="rotate-180 mr-2" size={20} /> Back to Projects
      </button>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-lg">
        <div className="flex items-center gap-3 text-blue-600 mb-4 font-medium">
          {project.icon}
          <span>{project.category}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed">{project.tagline}</p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-600 leading-loose">
                {project.description}
              </p>
            </section>
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Details</h3>
              <p className="text-gray-600 leading-loose">
                {project.details}
              </p>
            </section>
            
            {/* Placeholder for visual assets */}
            <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 mt-8 border-2 border-dashed border-gray-200">
              [Visual assets / Video Demo Placeholder]
            </div>
          </div>
          
          <div className="md:col-span-1 space-y-6">
             <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4">Role</h4>
                <p className="text-gray-600 text-sm mb-6">Lead Designer, Prototyping</p>
                
                <h4 className="font-bold text-gray-900 mb-4">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-2 py-1 rounded border text-gray-600">Figma</span>
                  <span className="text-xs bg-white px-2 py-1 rounded border text-gray-600">Protopie</span>
                  <span className="text-xs bg-white px-2 py-1 rounded border text-gray-600">React</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="max-w-2xl mx-auto px-6 py-32 flex flex-col items-center text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's connect.</h2>
      <p className="text-gray-600 text-lg mb-12">
        Currently exploring new opportunities to define the next generation of interaction.
      </p>
      
      <div className="space-y-4 w-full max-w-md">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 w-full p-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
          <Mail size={20} /> {personalInfo.email}
        </a>
        <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center gap-3 w-full p-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">
          <Phone size={20} /> {personalInfo.phone}
        </a>
        <a href="#" className="flex items-center justify-center gap-3 w-full p-4 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors">
          <Linkedin size={20} /> LinkedIn Profile <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <>
            {activeTab === 'home' && <HomeSection />}
            {activeTab === 'resume' && <ResumeSection />}
            {activeTab === 'projects' && <ProjectsSection />}
            {activeTab === 'contact' && <ContactSection />}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;