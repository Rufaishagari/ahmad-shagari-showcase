
import { Mail, Phone, Linkedin, Github, User, Briefcase, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    "JavaScript", "Python", "React", "Node.js", "SQL", "MongoDB",
    "AWS", "Docker", "Git", "Linux", "Network Security", "System Administration"
  ];

  const projects = [
    {
      title: "Enterprise Web Application",
      description: "Developed a full-stack web application for business process automation",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Network Infrastructure Setup",
      description: "Designed and implemented secure network infrastructure for SMB",
      technologies: ["Cisco", "pfSense", "VPN", "Firewall"]
    },
    {
      title: "Database Migration Project",
      description: "Led migration of legacy systems to modern cloud-based solutions",
      technologies: ["SQL Server", "AWS RDS", "Python", "ETL"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ahmad Rufai
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Shagari
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              IT Professional specializing in software development, system administration, and network infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3">
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Passionate IT professional with extensive experience in software development, 
                system administration, and network infrastructure. I specialize in creating 
                robust, scalable solutions that drive business efficiency and growth.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                With a strong foundation in both front-end and back-end technologies, 
                I bring a comprehensive approach to problem-solving and project delivery.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <User className="w-5 h-5" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                  <span>Team Leader</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center">
                <User className="w-32 h-32 text-blue-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 bg-slate-700/50 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 transition-all duration-300 text-sm hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover-scale">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-blue-500/30 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? I'm always interested in 
              discussing new opportunities and innovative solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover-scale cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-slate-300 text-sm">ahmad@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover-scale cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-slate-300 text-sm">+234 xxx xxx xxxx</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover-scale cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Linkedin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-slate-300 text-sm">Connect with me</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover-scale cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Github className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-slate-300 text-sm">View my code</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Ahmad Rufai Shagari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
