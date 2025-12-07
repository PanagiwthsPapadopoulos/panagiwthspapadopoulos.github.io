import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database, 
  FileJson, 
  Flame, 
  Share2, 
  Github, 
  Gitlab, 
  BarChart3, 
  PenTool, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  Settings, 
  TerminalSquare, 
  AppWindow, 
  Wifi, 
  Gauge 
} from 'lucide-react';

export const toolsData = {
  header: {
    title: "The Toolbox",
    subtitle: "A selection of the languages, frameworks, and software I use."
  },
  categories: [
    {
      id: "frontend",
      title: "Frontend & UI",
      items: [
        {
          name: "React",
          description: "Component-based UI library.",
          link: "https://react.dev",
          icon: Code2
        },
        {
          name: "Flutter",
          description: "Open-source UI software development kit created by Google.",
          link: "https://www.flutter.dev/",
          icon: Smartphone
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework.",
          link: "https://tailwindcss.com",
          icon: Palette
        }
      ]
    },
    {
      id: "backend",
      title: "Backend & Database",
      items: [
        {
          name: "Supabase",
          description: "Postgres development platform.",
          link: "https://supabase.com",
          icon: Database
        },
        {
          name: "MySQL",
          description: "Open source relational database.",
          link: "https://www.mysql.com/",
          icon: Database
        },
        {
          name: "MongoDB",
          description: "NoSQL database used for storing structured, semistructured, and unstructured data.",
          link: "https://www.mongodb.com/",
          icon: FileJson
        },
        {
          name: "Firebase",
          description: "Backend Software.",
          link: "https://firebase.google.com",
          icon: Flame
        },
        {
          name: "GraphQL",
          description: "Query language for APIs and runtime for fulfilling queries.",
          link: "https://graphql.org/",
          icon: Share2
        },
      ]
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      items: [
        {
          name: "Git / GitHub",
          description: "Version control and collaboration.",
          link: "https://github.com",
          icon: Github
        },
        {
          name: "Gitlab",
          description: "All-in-one platform designed for software development and DevOps.",
          link: "https://gitlab.com",
          icon: Gitlab
        },
        {
          name: "Cyclopt",
          description: "Efficient software development.",
          link: "https://cyclopt.com/",
          icon: BarChart3
        },
        {
          name: "Figma",
          description: "Collaborative Interface Design Tool.",
          link: "https://www.figma.com/",
          icon: PenTool
        },
        {
          name: "Cypress",
          description: "Frontend test automation tool for regression testing of web applications.",
          link: "https://www.cypress.io/",
          icon: CheckCircle2
        }
      ]
    },
    {
      id: "vlsi",
      title: "VLSI",
      items: [
        {
          name: "Cadence Genus",
          description: "RTL synthesis and physical synthesis tool.",
          link: "https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/synthesis/genus-synthesis-solution.html",
          icon: Cpu
        },
        {
          name: "Cadence Innovus",
          description: "RTL-to-GDS chip design environment.",
          link: "https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/soc-implementation-and-floorplanning/innovus-implementation-system.html",
          icon: Layers
        },
        {
          name: "Cadence Virtuoso",
          description: "Electronic Design Automation (EDA) tool used for designing integrated circuits.",
          link: "https://cyclopt.com/",
          icon: Zap
        },
        {
          name: "GTKWave",
          description: "fully featured GTK+ based wave viewer for Unix.",
          link: "https://gtkwave.sourceforge.net/",
          icon: Activity
        }
      ]
    },
    {
      id: "embedded",
      title: "Embedded Systems",
      items: [
        {
          name: "Vitis HLS",
          description: "Create complex FPGA algorithms.",
          link: "https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vitis/vitis-hls.html",
          icon: Settings
        },
        {
          name: "Keil",
          description: "Software development environment for a range of Arm Cortex-M based microcontroller devices",
          link: "https://www.keil.com/",
          icon: Cpu
        },
        {
          name: "Cadence Virtuoso",
          description: "Electronic Design Automation (EDA) tool used for designing integrated circuits.",
          link: "https://cyclopt.com/",
          icon: Zap
        }
      ]
    },
    {
      id: "ides",
      title: "IDEs",
      items: [
        {
          name: "Visual Studio Code",
          description: "Integrated development environment.",
          link: "https://code.visualstudio.com/",
          icon: TerminalSquare
        },
        {
          name: "Arduino IDE",
          description: "Lightweight editor developed by Arduino Lab for connecting a board, uploading code and transferring files.",
          link: "https://www.arduino.cc/en/software/",
          icon: Cpu
        },
        {
          name: "Xcode",
          description: "Integrated development environment created by Apple Inc. for developing software applications for iOS.",
          link: "https://developer.apple.com/xcode/",
          icon: AppWindow
        },
        {
          name: "Android Studio",
          description: "The official IDE for Android app development.",
          link: "https://developer.android.com/studio/",
          icon: Smartphone
        },
      ]
    },
    {
      id: "network",
      title: "Network",
      items: [
        {
          name: "Wireshark",
          description: "Comprehensive Network Analysis.",
          link: "https://wireshark.org/",
          icon: Wifi
        },
        {
          name: "Arduino IDE",
          description: "Lightweight editor developed by Arduino Lab for connecting a board, uploading code and transferring files.",
          link: "https://www.arduino.cc/en/software/",
          icon: Cpu
        },
      ]
    },
    {
      id: "motorsport",
      title: "Motorsport",
      items: [
        {
          name: "AiM Software Spark",
          description: "SPARK is the intuitive software that lets you control, customize, and fine-tune your bike's performance.",
          link: "https://www.aim-sportline.com/en/spark-software.htm",
          icon: Settings
        },
        {
          name: "Race Studio 3",
          description: "Race Studio 3 provides customisable panels like time/distance, histogram, video, and channels report to meet specific data analysis needs.",
          link: "https://www.aimtechnologies.com/support/downloads/software-downloads/race-studio-3/",
          icon: Gauge
        },
      ]
    }
  ]
};