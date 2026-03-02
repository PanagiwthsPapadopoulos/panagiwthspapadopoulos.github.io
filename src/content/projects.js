export const projectsData = {
  // Page Copy
  header: {
    title: "Projects",
    subtitle: "A collection of my recent work, side projects, and experiments. Select a category to jump to that section."
  },
  
  // The Data List
  items: [
    // Panther Racing
    {
      id: 1,
      title: "Velocity Stack",
      category: "Panther Racing",
      description: "Adjustable velocity stack system designed to enhance engine performance by optimizing the torque-RPM curve.",
      image: "/assets/velocity-stack.jpg",
      tags: ["ESP32", "Servo Motor", "C++"],
      links: { github: "https://github.com/Panther-Racing-AUTh/velocity-stack" }
    },
    {
      id: 2,
      title: "Velocity Handler",
      category: "Panther Racing",
      description: "A Flutter app that connects to an ESP32-C3 via Wi-Fi to monitor real-time motorcycle RPM.",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Portfolio",
      tags: ["Flutter", "Mobile", "WiFi"],
      links: { github: "https://github.com/Panther-Racing-AUTh/Velocity-Handler" }
    },
    {
      id: 3,
      title: "TeamTactix",
      category: "Panther Racing",
      description: "A single code base to visualize and manage lap data for racing purposes.",
      image: "/assets/lap-tracker.png",
      tags: ["Flutter", "Cross Platform", "Application"],
      links: { github: "https://github.com/Panther-Racing-AUTh/lap-tracker" }
    },
    {
      id: 4,
      title: "SFHMMY Conference 2023",
      category: "Panther Racing",
      description: "Introduction to Flutter Framework.",
      image: "/assets/flutter.png",
      tags: ["Flutter", "Conference", "SFHMMY"],
      links: { github: "https://github.com/Panther-Racing-AUTh/panther-flutter-presentation" }
    },
    {
      id: 5,
      title: "SFHMMY Conference 2025",
      category: "Panther Racing",
      description: "Advanced Flutter Presentation.",
      image: "/assets/flutter.png",
      tags: ["Flutter", "Conference", "SFHMMY"],
      links: { github: "https://github.com/Panther-Racing-AUTh/Donation_App" }
    },
    // Networks
    {
      id: 6,
      title: "Distance Quality Maximization for Graph Clustering",
      category: "Networks",
      description: "This project implements an algorithm to maximize the Distance Quality Function (Q_d), a metric used for clustering nodes in a graph. The algorithm aims to find an optimal partition of the graph such that the observed distances between nodes within clusters are minimized while the expected distances in a random graph are maximized. This approach improves the clustering quality for graphs with complex structures and multiple connected components.",
      image: "/assets/graph.png",
      tags: ["Network Theory", "Graph Clustering", "Graph Distance Quality"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/network-theory" }
    },
    {
      id: 7,
      title: "Chat and VoIP Communication System",
      category: "Networks",
      description: "This project implements a simple Chat and VoIP communication system. It allows users to send text messages, make voice calls, and test the microphone through a custom-built Java application. The system utilizes UDP-based messaging for communication.",
      image: "/assets/wireshark.png",
      tags: ["Computer Networks", "Java", "Wireshark"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/computer-networks" }
    },
    // AI
    {
      id: 8,
      title: "GenEmoji – Natural Language to Emoji Image Generation",
      category: "AI",
      description: "GenEmoji is an AI system that transforms natural language descriptions into coherent emoji-based images. It integrates Fuzzy Logic, Genetic Algorithms, and Deep Reinforcement Learning (PPO) to interpret user input, generate symbolic emoji combinations, and render them visually.",
      image: "/assets/drl.png",
      tags: ["AI", "Python", "Deep Reinforcement Learning", "Genetic Algorithms", "Fuzzy Logic"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/genemoji" }
    },
    {
      id: 9,
      title: "Machine Learning Models & Data Processing",
      category: "AI",
      description: "This repository contains three different machine learning projects, each designed to explore different models and techniques for image classification, image generation, and data processing.",
      image: "/assets/generative.png",
      tags: ["AI", "Python", "Convolutional Neural Network", "Support Vector Machine", "Encoder-Decoder"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/neural-networks" }
    },
    // VLSI
    {
      id: 10,
      title: "RISC-V Processor Simulation and Implementation",
      category: "VLSI",
      description: "This project focuses on the design and simulation of a RISC-V processor. The primary goal is to implement the datapath and control logic of a RISC-V processor, supporting a variety of instructions, such as Register-Register, ALU Immediate, Memory, and Branch instructions. The design is implemented in Verilog and tested using a testbench to verify the correctness of the processor's functionality.",
      image: "/assets/riscv.png",
      tags: ["Verilog", "VLSI", "RiscV"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/hardware-1" }
    },
    {
      id: 11,
      title: "Floating-Point Multiplier",
      category: "VLSI",
      description: "This repository contains the full implementation, verification, and simulation artifacts for a pipelined single-precision floating-point multiplier, developed as part of the Low-Level Hardware Digital Systems II course at the Aristotle University of Thessaloniki (AUTH), ECE Department. The design follows a modified IEEE 754 specification and is organized to reflect all required deliverables outlined in the official Coursework Document.",
      image: "/assets/fpmult.png",
      tags: ["Verilog", "VLSI", "FP Multiplier"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/hardware-2" }
    },
    {
      id: 12,
      title: "PicoRV32 RISC-V ASIC Implementation (45nm)",
      category: "VLSI",
      description: "This repository contains the complete RTL-to-GDSII physical design flow for a PicoRV32 RISC-V processor core. The project was developed as part of the \"Digital Integrated Circuits VLSI-ASIC\" course at the Aristotle University of Thessaloniki (AUTH).",
      image: "/assets/vlsi-digital.png",
      tags: ["VLSI", "ASIC", "Physical Design"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/vlsi-asic" }
    },
    // Embedded Software
    {
      id: 12,
      title: "Microprocessors & Peripherals - Project Repository",
      category: "Embedded Software",
      description: "This repository contains three projects developed for the Microprocessors & Peripherals course at AUTh. The course focuses on ARM processor architectures and ARM-based microcontrollers, exploring their role as modern embedded computing platforms.",
      image: "/assets/peripherals.jpg",
      tags: ["ARM Assembly", "C", "STM-32"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/microprocessors-peripherals" }
    },
    {
      id: 13,
      title: "ESP32 Hydra",
      category: "Embedded Software",
      description: "This project contains the implementation of a WiFi scanner using an ESP32 with a TFT screen and a joystick.",
      image: "/assets/esp-hydra.jpg",
      tags: ["C", "ESP32", "WiFi", "Peripherals"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/esp32-hydra" }
    },
    {
      id: 13,
      title: "Vitis HLS Project",
      category: "Embedded Software",
      description: "Developed and optimized a custom hardware accelerator for image processing (calculating image differences, posterization, and applying a 3x3 sharpen filter) targeting the Xilinx Alveo U200 Data Center FPGA. Using the Vitis unified software platform, the project involved translating C/C++ software algorithms into highly efficient Register-Transfer Level (RTL) designs through High-Level Synthesis (HLS).",
      image: "/assets/fpga.png",
      tags: ["Xilinx Vitis", "Vitis HLS", "Alveo U200 FPGA", "C/C++", "Hardware Acceleration", "High-Level Synthesis (HLS)", "Hardware/Software Co-Design", "Register-Transfer Level (RTL) Design", "Memory Banking", "Optimization"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/computer-architecture-accelerators" }
    },
    // Software Engineering
    {
      id: 14,
      title: "Software Engineering - Onlyvibes",
      category: "Software Engineering",
      description: "OnlyVibes is a web-based application designed to enhance event discovery and participation through personalized experiences. Developed as part of a university course on Software Engineering, the project was structured across three development phases, adhering to the methodology and deliverables required by the syllabus. OnlyVibes enables users to browse, review, follow, and interact with venues and events, while also empowering verified users and venues to create and manage their own event listings. The system emphasizes user engagement, seamless UI/UX, and role-based access control.",
      image: "/assets/onlyvibes.png",
      tags: ["SE", "Mockups", "User Stories", "Activity Diagrams", "Use Case Diagrams", "Design Patterns", "Sequence Diagrams", "Class Diagrams", "API"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/software-engineering-1/" }
    },
    {
      id: 14,
      title: "Software Engineering - Onlyvibes (2)",
      category: "Software Engineering",
      description: "Developed a comprehensive social event ecosystem featuring a React mobile-first frontend and an Express/MongoDB backend. This project serves as a showcase for high-standard Software Quality Assurance, utilizing GitHub Actions for CI/CD and a combination of Cypress and Jest for end-to-end and integration testing. Key highlights include a 100% clean-code rating on the Cyclopt platform (zero violations/vulnerabilities), \"Optimistic UI\" implementation for seamless social interactions, and a fully automated pipeline that ensures only verified code reaches production on Render.",
      image: "/assets/onlyvibes-2.png",
      tags: ["SE", "React", "Frontend Development", "Backend Development", "Express/MongoDB", "Github Actions", "CI/CD", "E2E Testing", "Integration Testing", "Cypress", "Jest", "Render"],
      links: { github: "https://github.com/PanagiwthsPapadopoulos/software-engineering-2/" }
    },
    

  ]
};