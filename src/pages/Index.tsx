import { Mail, Phone, Linkedin, Github, User, Briefcase, FileText, Code, Terminal, Cpu, Database, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    "Microsoft Office Suite", "Data Entry", "Database Management", "IT Support", 
    "Network Troubleshooting", "Report Generation", "Data Analysis", "System Administration",
    "Cybersecurity", "Technical Documentation", "Customer Support", "Project Management",
    "Web Development"
  ];

  const workExperience = [
    {
      title: "IT Assistant",
      company: "Think-Lab Group Ltd",
      period: "2024 – Present",
      description: "Provided IT helpdesk support to 50+ users, resolving 10+ weekly technical/software issues and managing daily IT infrastructure operations.",
      technologies: ["IT Support", "System Administration", "Troubleshooting", "Infrastructure Management"]
    },
    {
      title: "Program Analyst II",
      company: "Sokoto State Ministry of Water Resources",
      period: "2023 – 2024",
      description: "Supported water supply projects with data management, reporting, and standardized data processes for decision-making.",
      technologies: ["Data Analysis", "Report Generation", "Database Management", "Process Optimization"]
    },
    {
      title: "NYSC Corp Member",
      company: "Sokoto State Internal Revenue Service",
      period: "2021 – 2022",
      description: "Handled confidential taxpayer data, database management, and supported tax registration processes in the TIN department.",
      technologies: ["Database Management", "Data Entry", "Data Integrity", "Customer Service"]
    }
  ];

  const education = [
    {
      degree: "B.Sc. Information Technology",
      institution: "Maryam Abacha American University",
      grade: "Second Class Upper",
      year: "2019 – 2021"
    },
    {
      degree: "National Diploma in Computer Science",
      institution: "The Polytechnic of Sokoto",
      grade: "",
      year: "2013 – 2015"
    },
    {
      degree: "Cisco Networking Academy",
      institution: "Introduction to Cybersecurity",
      grade: "Certification",
      year: "November 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-green-400 font-mono text-xs animate-pulse">
          {'> helpdesk --support'}
        </div>
        <div className="absolute top-40 right-20 text-blue-400 font-mono text-xs animate-pulse delay-1000">
          {'database.query("SELECT * FROM users")'}
        </div>
        <div className="absolute bottom-40 left-10 text-cyan-400 font-mono text-xs animate-pulse delay-2000">
          {'system --status active'}
        </div>
        <div className="absolute bottom-20 right-40 text-purple-400 font-mono text-xs animate-pulse delay-3000">
          {'network.troubleshoot()'}
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-32 left-32 text-green-400/20 animate-spin-slow">
        <Database className="w-16 h-16" />
      </div>
      <div className="absolute top-60 right-20 text-blue-400/20 animate-bounce">
        <Shield className="w-12 h-12" />
      </div>
      <div className="absolute bottom-32 left-20 text-cyan-400/20 animate-pulse">
        <Users className="w-14 h-14" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8 relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-green-400/50 shadow-2xl shadow-green-400/20 hover-scale">
                <img 
                  src="/lovable-uploads/fb219fdc-90af-41d1-8119-6ed1795c7d05.png" 
                  alt="Ahmad Rufai Shagari"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tech Ring Animation */}
              <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-green-400/30 animate-spin-slow"></div>
              <div className="absolute inset-2 w-44 h-44 mx-auto rounded-full border border-blue-400/20 animate-spin-reverse"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
              Ahmad Rufa'i
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Shagari
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-4 font-mono">
              <span className="text-green-400">$</span> IT Professional 
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
              IT Support • Database Management • System Administration
            </p>
            <p className="text-md text-gray-500 mb-8 max-w-2xl mx-auto font-mono">
              Abuja, Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 border border-green-400 shadow-lg shadow-green-500/25"
                onClick={() => window.location.href = 'mailto:rufaishagari0707@outlook.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 font-mono"
                onClick={() => {
                  // Create a temporary link to download CV
                  const link = document.createElement('a');
                  link.href = '/ahmad-rufai-shagari-cv.pdf';
                  link.download = 'Ahmad_Rufai_Shagari_CV.pdf';
                  link.click();
                }}
              >
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 bg-gray-900/50 backdrop-blur-sm border-y border-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">class</span> AboutMe <span className="text-cyan-400">extends</span> ITProfessional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 font-mono text-sm">
                <div className="text-green-400 mb-2">// Professional Profile</div>
                <p className="text-gray-300 leading-relaxed">
                  A dedicated and goal-driven IT professional with strong customer relationship 
                  management abilities and in-depth technical knowledge. Known for excellent 
                  communication, organizational, and problem-solving skills.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 font-mono text-sm">
                <div className="text-blue-400 mb-2">/* Technical Expertise */</div>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about technology with a track record of supporting IT infrastructure, 
                  managing user issues, and contributing to project success. Self-motivated, 
                  detail-oriented, and a strong team player.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-green-400 font-mono">
                  <Users className="w-5 h-5" />
                  <span>Customer Support</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono">
                  <Database className="w-5 h-5" />
                  <span>Data Management</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 font-mono">
                  <Shield className="w-5 h-5" />
                  <span>IT Security</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 font-mono text-sm">
                <div className="text-green-400 mb-4">$ cat personal_info.json</div>
                <div className="space-y-2 text-gray-300">
                  <div>{"{"}</div>
                  <div className="ml-4">"dob": "7th July, 1995",</div>
                  <div className="ml-4">"nationality": "Nigerian",</div>
                  <div className="ml-4">"state_of_origin": "Sokoto State",</div>
                  <div className="ml-4">"languages": ["English", "Hausa"],</div>
                  <div className="ml-4">"marital_status": "Single"</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">const</span> skillSet <span className="text-green-400">=</span> [
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 bg-gray-800/50 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition-all duration-300 text-sm hover-scale font-mono"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                "{skill}",
              </Badge>
            ))}
          </div>
          <div className="text-center">
            <span className="text-3xl font-mono text-cyan-400">];</span>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="px-4 py-16 bg-gray-900/50 backdrop-blur-sm border-y border-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">function</span> workExperience() <span className="text-cyan-400">{"{"}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover-scale backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-white font-mono text-lg">{job.title}</CardTitle>
                      <CardDescription className="text-cyan-400 font-mono text-md font-semibold">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs border-green-500/30 text-green-400 font-mono w-fit">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 font-mono text-sm">// {job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-cyan-500/30 text-cyan-400 font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="text-3xl font-mono text-cyan-400">{"}"}</span>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-purple-400">var</span> education <span className="text-green-400">=</span> [
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover-scale backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white font-mono text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="text-cyan-400 font-mono text-sm">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs border-green-500/30 text-green-400 font-mono">
                      {edu.year}
                    </Badge>
                    {edu.grade && (
                      <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-400 font-mono ml-2">
                        {edu.grade}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="text-3xl font-mono text-purple-400">];</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-gray-900/50 backdrop-blur-sm border-y border-gray-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">git</span> <span className="text-cyan-400">connect</span> --with ahmadshagari
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-6"></div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 font-mono text-sm text-gray-300 max-w-2xl mx-auto">
              <span className="text-green-400">$</span> Ready to collaborate on your next IT project? <br />
              <span className="text-cyan-400">//</span> Let's discuss technical solutions and opportunities
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover-scale cursor-pointer backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-white font-semibold mb-2 font-mono">Email</h3>
                <p className="text-gray-400 text-sm font-mono">rufaishagari0707@outlook.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover-scale cursor-pointer backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-semibold mb-2 font-mono">Phone</h3>
                <p className="text-gray-400 text-sm font-mono">+234 701 963 4292</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover-scale cursor-pointer backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6">
                <Linkedin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2 font-mono">LinkedIn</h3>
                <p className="text-gray-400 text-sm font-mono">@rufaishagari</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover-scale cursor-pointer backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6">
                <Github className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-2 font-mono">GitHub</h3>
                <p className="text-gray-400 text-sm font-mono">View my code</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-black border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-mono">
            <span className="text-green-400">©</span> 2024 Ahmad Rufa'i Shagari. 
            <span className="text-cyan-400"> // All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
