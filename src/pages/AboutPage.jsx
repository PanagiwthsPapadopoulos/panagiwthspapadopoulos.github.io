import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink,
  Calendar,
  Award,
  Book,
  Terminal,
  Menu,
  X,
  Briefcase,
  Code2,
  User,
  Activity,
  PersonStandingIcon,
  PowerSquare,
  Notebook,
  GraduationCap,
  BookA
} from 'lucide-react';
import { 
  personalInfo, 
  education, 
  skills, 
  experience, 
  projects, 
  certifications, 
  conferences
} from '../content/about';

import {contactData} from '../content/contact';

const profilePicture = '/assets/Panagiotis-Papadopoulos-1024x1024.jpg';

const AboutPage = () => {

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 ">
        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-64px)] flex flex-col items-center">

          {/* Animation */}
          <div className="animate-in fade-in duration-500">

            {/* Split into columns */}
            {/* <div className="grid md:grid-cols-3 gap-8 md:gap-12"> */}

              {/* Use 2/3rds of the screen */}
              {/* <div className="md:col-span-2 space-y-10"> */}

                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 items-right mb-12">
                  
                  {/* Profile Image */}
                  <img 
                    src={profilePicture} 
                    alt="Profile" 
                    className="w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-slate-100 shadow-md mx-auto md:mx-0"
                  />

                  {/* Details */}
                  <div className="text-center md:text-left space-y-3">

                    {/* Full Name */}
                    <h1 className="text-4xl font-bold text-slate-900">{personalInfo.name}</h1>

                    {/* Title */}
                    <p className="text-xl text-slate-600 font-medium">{personalInfo.title}</p>

                    {/* Location & Email */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 text-sm">
                      <span className="flex items-center gap-1"><MapPin size={16} /> {personalInfo.location}</span>
                      <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-blue-600 transition"><Mail size={16} /> {personalInfo.email}</a>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-center md:justify-start gap-3 pt-2 px-flex">
                      {contactData.socials.map(item => (
                        <a href={item.href} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 hover:text-blue-600 transition"><item.icon size={20} /></a>
                      ))}
                    </div>

                  </div>
                  
                </div>

                {/* Bio Section */}
                <section>
                  <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Book size={18} /> Bio</h2>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {personalInfo.about}
                  </p>
                </section>

                {/* Education Section */}
                <section>
                  <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2 py-5">
                    <GraduationCap size={18} /> Education
                  </h2>

                  <div className="space-y-6">
                    {education.map((edu, idx) => (

                      // Education Card
                      <div key={idx} className="bg-slate-150 p-4 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-900">{edu.school}</h4>
                          <span className="text-sm font-mono text-slate-500">{edu.date}</span>
                        </div>
                        <p className="text-blue-700 font-medium">{edu.degree}</p>
                        <p className="text-sm text-slate-600 mt-2">{edu.details}</p>
                      </div>

                    ))}
                  </div>

                </section>

              </div>
        </main>

     </div>
  );

      
  };

export default AboutPage;