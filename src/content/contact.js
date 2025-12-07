import { Facebook, Github, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

export const contactData = {
  header: {
    title: "Get in Touch",
    subtitle: "I'm currently based in Thessaloniki, Greece. Feel free to reach out."
  },
  
  // These appear ABOVE the divider
  primary: [
    {
      id: "location",
      label: "Location",
      value: "Thessaloniki, Greece",
      href: "https://maps.google.com/?q=Thessaloniki,Greece", 
      iconConfig: {
        icon: <MapPin size={24} />,
        color: "text-red-500",
        bg: "bg-red-50",
        borderHover: "hover:border-red-200"
      }
    },
    {
      id: "email",
      label: "Email",
      value: "panpapadopoulos00@gmail.com",
      href: "mailto:panpapadopoulos00@gmail.com",
      iconConfig: {
        icon: <Mail size={24} />,
        color: "text-blue-600",
        bg: "bg-blue-50",
        borderHover: "hover:border-blue-200"
      }
    }
  ],

  // These appear BELOW the divider
  socials: [
    {
      id: "github",
      label: "GitHub",
      value: "PanagiwthsPapadopoulos",
      href: "https://github.com/PanagiwthsPapadopoulos",
      icon: Github,
      iconConfig: {
        icon: <Github size={24} />,
        color: "text-slate-900",
        bg: "bg-slate-100",
        borderHover: "hover:border-slate-300"
      }
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Παναγιώτης Παπαδόπουλος",
      href: "https://www.linkedin.com/in/panagiotis-papadopoulos-4221a3206/",
      icon: Linkedin,
      iconConfig: {
        icon: <Linkedin size={24} />,
        color: "text-blue-700",
        bg: "bg-blue-50",
        borderHover: "hover:border-blue-200"
      }
    },
    {
      id: "facebook",
      label: "Facebook",
      value: "Παναγιώτης Παπαδόπουλος",
      href: "https://www.facebook.com/profile.php?id=100073339401839",
      icon: Facebook,
      iconConfig: {
        icon: <Facebook size={24} />,
        color: "text-sky-500",
        bg: "bg-sky-50",
        borderHover: "hover:border-sky-200"
      }
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@papadopoul0s_p",
      href: "https://www.instagram.com/papadopoul0s_p/",
      icon: Instagram,
      iconConfig: {
        icon: <Instagram size={24} />,
        color: "text-sky-500",
        bg: "bg-sky-50",
        borderHover: "hover:border-sky-200"
      }
    }
  ]
};