export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'IoT' | 'EMBEDDED' | 'AUTOMATION' | 'ELECTRONICS';
  tagline: string;
  description: string;
  longDescription: string;
  objective: string;
  technologies: string[];
  keyComponents: string[];
  developmentFocus: string;
  myContribution: string;
  projectOutcome: string;
  image: string;
  gallery: { url: string; caption: string }[];
  featured: boolean;
}

export interface SkillItem {
  name: string;
  category: 'technical' | 'soft';
  description: string;
  iconName: string;
  level: string; // e.g. "Core Expertise", "Hardware Prototyping", etc.
}

export interface TechNode {
  id: string;
  label: string;
  category: 'core' | 'mcu' | 'comm' | 'sensor' | 'domain';
  description: string;
  details: string;
  color: string;
  x?: number;
  y?: number;
}

export interface HardwareItem {
  id: string;
  name: string;
  category: string;
  spec: string;
  description: string;
  image: string;
  usage: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string;
  badge?: string;
}

// -------------------------------------------------------------
// CENTRAL PORTFOLIO CONFIGURATION
// Easily replace personal details, URLs, or photos here!
// -------------------------------------------------------------

export const PERSONAL_INFO = {
  name: "RITHIK R",
  roleTitle: "Electronics & Communication Engineering Student",
  focusAreas: "Embedded Systems • IoT • Hardware Automation",
  subTitle: "Building Ideas Into Real-World Technology.",
  shortBio: "Passionate and motivated Electronics and Communication Engineering student with strong interest in Embedded Systems, IoT, and Project Development. Experienced in developing innovative hardware and software-based projects using Arduino, ESP8266, sensors, GSM and GPS modules.",
  email: "rithikrithik53553@gmail.com",
  phone: "6381640612",
  location: "Erode, Tamil Nadu, India",
  college: "Excel Engineering College, Erode",
  degree: "B.E. Electronics & Communication Engineering",
  cgpa: "7.50",
  year: "Final Year (2023 – Present)",
  
  // Replace with your actual LinkedIn profile URL
  LINKEDIN_URL: "https://www.linkedin.com/in/rithik-r",
  GITHUB_URL: "https://github.com/rithik-r",
  
  // Profile photo path (place your photo in public/profile.jpg or update here)
  profilePhoto: "/profile.jpg",
  aboutPhoto: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
};

export const BRAND_STATEMENT = {
  quote: "I LIKE TURNING IDEAS INTO WORKING SYSTEMS.",
  supportText: "From sensors and microcontrollers to IoT-based concepts, I enjoy exploring how electronics and software can solve practical, everyday challenges with reliability and smart automation."
};

export const QUICK_STATS = [
  { label: "EDUCATION", value: "B.E. ECE", sub: "Excel Engg College" },
  { label: "CGPA", value: "7.50", sub: "Academic Standing" },
  { label: "FOCUS", value: "Embedded & IoT", sub: "Hardware + Firmware" },
  { label: "ROLE", value: "Project Developer", sub: "Prototyping & Systems" }
];

export const TECH_NODES: TechNode[] = [
  { id: "core", label: "RITHIK R", category: "core", description: "Embedded Systems & IoT Engineering Core", details: "Integration of sensors, microcontrollers, and communication modules into functional systems.", color: "#00f0ff" },
  { id: "arduino", label: "Arduino Uno", category: "mcu", description: "Prototyping & Control", details: "Core microcontroller platform for logic execution, sensor interfacing, and timing-critical routines.", color: "#00979d" },
  { id: "esp8266", label: "ESP8266 Wi-Fi", category: "comm", description: "Wireless IoT Networking", details: "Enables cloud synchronization, web server hosting, and remote telemetry transmission.", color: "#e11d48" },
  { id: "esp32", label: "ESP32", category: "mcu", description: "High-Performance Dual Core IoT", details: "Advanced processing with integrated Wi-Fi & Bluetooth for complex automation pipelines.", color: "#dc2626" },
  { id: "sensors", label: "Sensors Array", category: "sensor", description: "Environmental & Motion Sensing", details: "Interfacing Accelerometers, Soil Moisture, IR, Ultrasonic, and Temperature sensors.", color: "#10b981" },
  { id: "gsm", label: "GSM Module (SIM800/900)", category: "comm", description: "Cellular SMS & Telephony Alerts", details: "Direct SMS dispatch and emergency notification system without relying on local internet.", color: "#f59e0b" },
  { id: "gps", label: "GPS Module (NEO-6M)", category: "sensor", description: "Geospatial Location Tracking", details: "Real-time latitude, longitude, and velocity tracking with high accuracy NMEA parsing.", color: "#8b5cf6" },
  { id: "iot", label: "IoT Architecture", category: "domain", description: "Smart Remote Telemetry", details: "End-to-end data pipeline from physical sensor readings to cloud dashboards & alerts.", color: "#3b82f6" }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: "Embedded Systems", category: "technical", description: "Firmware logic, interrupt routines, microcontroller architecture and pin mapping.", iconName: "Cpu", level: "Core Strength" },
  { name: "IoT (Internet of Things)", category: "technical", description: "Remote telemetry, cloud sensor streaming, Wi-Fi web servers, and wireless monitoring.", iconName: "Wifi", level: "Core Strength" },
  { name: "Arduino Uno", category: "technical", description: "Extensive rapid prototyping, C/C++ embedded programming, serial communication.", iconName: "CircuitBoard", level: "Expertise" },
  { name: "ESP8266 & NodeMCU", category: "technical", description: "Used for IoT connectivity, HTTP REST requests, and embedded Wi-Fi project prototyping.", iconName: "Radio", level: "Expertise" },
  { name: "ESP32 Platform", category: "technical", description: "Dual-core automation tasks, Bluetooth/BLE interfacing, and multi-sensor processing.", iconName: "Layers", level: "Applied Knowledge" },
  { name: "Sensor Interfacing", category: "technical", description: "Integration of Accelerometers (ADXL345/MPU6050), Ultrasonic (HC-SR04), Soil Moisture, IR, PIR.", iconName: "Activity", level: "Hands-on" },
  { name: "GSM Telephony (SIM800)", category: "technical", description: "AT commands, automated emergency SMS alerting, and cellular telecommunication protocols.", iconName: "PhoneCall", level: "Hands-on" },
  { name: "GPS Navigation (NEO-6M)", category: "technical", description: "NMEA sentence parsing, real-time vehicle coordinate tracking, and geofence triggering.", iconName: "Navigation", level: "Hands-on" },
  { name: "Circuit Connections & Breadboarding", category: "technical", description: "Schematic analysis, pull-up/down resistors, voltage divider networks, and relay isolation.", iconName: "Share2", level: "Hands-on" },
  { name: "IoT Prototyping & Automation", category: "technical", description: "End-to-end assembly from raw components to fully functional working demonstration units.", iconName: "Sliders", level: "Core Strength" },
  
  // Soft Skills
  { name: "Creativity & Innovation", category: "soft", description: "Developing novel, practical solutions for real-world automation and safety dilemmas.", iconName: "Lightbulb", level: "Mindset" },
  { name: "Critical Thinking & Debugging", category: "soft", description: "Systematic hardware troubleshooting, oscilloscope/multimeter signal verification.", iconName: "SearchCheck", level: "Methodology" },
  { name: "Project Management", category: "soft", description: "Structuring milestones, component procurement, and executing prototypes on schedule.", iconName: "Clock", level: "Capability" },
  { name: "Team Collaboration & Mentoring", category: "soft", description: "Guiding peer students through circuit wiring, microcontroller coding, and debugging.", iconName: "Users", level: "Collaboration" },
  { name: "Punctuality & Discipline", category: "soft", description: "Consistent work ethic, structured lab habits, and meticulous project execution.", iconName: "ShieldCheck", level: "Personal Attribute" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-01",
    number: "01",
    title: "Smart Accident Detection and Alert System",
    category: "EMBEDDED",
    tagline: "Automated emergency dispatch with real-time GPS coordinates & GSM SMS notification.",
    description: "An embedded safety solution that immediately detects vehicle collisions using motion/impact sensors and dispatches precise GPS location coordinates to emergency contacts via GSM.",
    longDescription: "The Smart Accident Detection and Alert System was engineered to eliminate critical delays in emergency response during road accidents. When a sudden high-G impact or abnormal vehicle tilt is sensed, the embedded controller validates the incident and triggers the GPS module to extract current latitude and longitude. The system then formats an emergency SMS with Google Maps coordinates and transmits it instantly via the GSM modem to pre-configured emergency services and family contacts.",
    objective: "Minimize emergency response time by automating incident detection and location broadcast without requiring driver intervention.",
    technologies: ["Arduino Uno", "GSM Module (SIM800L)", "GPS Module (NEO-6M)", "Accelerometer / Tilt Sensor", "Embedded C/C++"],
    keyComponents: ["Microcontroller Core (ATmega328P)", "NEO-6M GPS Receiver", "SIM800L GSM Telephony Modem", "Impact / Vibration Sensor Module", "Buzzer Alert & Reset Override Button"],
    developmentFocus: "Hardware interrupt optimization, reliable NMEA GPS parsing, and fail-safe GSM AT command transmission routines.",
    myContribution: "Designed circuit schematic, implemented sensor threshold algorithms to avoid false alarms, integrated GPS coordinate extraction, and programmed automated GSM messaging routines.",
    projectOutcome: "Successfully verified accurate coordinate dispatch within 5 seconds of impact simulation with high reliability.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80", caption: "Vehicle Telemetry & Automated Safety System Architecture" },
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", caption: "Microcontroller Circuitry & Sensor Interfacing" },
      { url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80", caption: "Real-time GPS Coordinate Visualization" }
    ],
    featured: true
  },
  {
    id: "proj-02",
    number: "02",
    title: "Smart Irrigation System using IoT",
    category: "IoT",
    tagline: "Automated precision agriculture using soil moisture analytics and ESP8266 Wi-Fi telemetry.",
    description: "An automated agricultural watering mechanism utilizing capacitive soil moisture sensors and ESP8266 for remote cloud monitoring and smart pump control.",
    longDescription: "Water scarcity and over-irrigation are primary challenges in agriculture. This project implements a closed-loop automated irrigation system that continuously samples moisture levels in the crop root zone. When the moisture drops below optimal agronomic thresholds, the controller autonomously energizes a DC water pump via relay isolation. Real-time soil moisture and pump state are transmitted wirelessly via ESP8266 Wi-Fi to a cloud dashboard for remote farmer observation.",
    objective: "Conserve water resources while maintaining optimal soil hydration through automated, sensor-driven pump switching and IoT monitoring.",
    technologies: ["ESP8266 / NodeMCU", "Soil Moisture Sensor", "Relay Control Module", "Mini Submersible Pump", "IoT Cloud / Web Dashboard"],
    keyComponents: ["ESP8266 Wi-Fi Controller", "Capacitive / Resistive Soil Moisture Probe", "1-Channel 5V Relay Module", "12V/5V DC Power Regulators", "Status LED & Manual Override"],
    developmentFocus: "Sensor calibration across varying soil types, Wi-Fi reconnection stability, and low-power interval sampling.",
    myContribution: "Wired the sensor-to-relay isolation circuitry, programmed threshold hysteresis to prevent rapid pump oscillation, and configured wireless telemetry streaming.",
    projectOutcome: "Demonstrated 35% estimated water savings in test beds with automated pump activation whenever soil moisture dropped below threshold.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80", caption: "Smart Agricultural IoT Monitoring Prototype" },
      { url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80", caption: "Soil Sensor and Automated Water Valve Actuator" }
    ],
    featured: true
  },
  {
    id: "proj-03",
    number: "03",
    title: "Intelligent Traffic Management System",
    category: "AUTOMATION",
    tagline: "Density-based dynamic traffic signal switching using IR sensors & embedded logic.",
    description: "A smart multi-junction traffic signal control system that dynamically allocates green signal time according to real-time lane vehicle density rather than fixed timers.",
    longDescription: "Conventional fixed-timer traffic lights cause unnecessary congestion when busy lanes wait for empty lanes. This Intelligent Traffic Management System utilizes synchronized infrared (IR) sensor arrays placed along road segments to measure vehicle queue density. The central microcontroller computes the relative congestion levels across 4 lanes and dynamically modulates green signal durations, prioritizing high-traffic corridors and reducing urban gridlock.",
    objective: "Eliminate unnecessary vehicular idling at empty intersections by dynamically adapting signal timings based on real-time road density.",
    technologies: ["Arduino / ATmega328P", "Infrared (IR) Sensor Array", "Traffic Light LED Display Modules", "Timer & State Machine Logic"],
    keyComponents: ["Central Microcontroller", "4-Way IR Obstacle / Density Sensors", "12-Channel Traffic LED Matrix (Red/Yellow/Green)", "Power Distribution Bus"],
    developmentFocus: "Multi-lane state machine logic, emergency vehicle prioritization override, and debounce filtering for sensor signals.",
    myContribution: "Structured the finite-state machine (FSM) control code, constructed the scaled 4-way physical road model, and calibrated sensor trigger distances.",
    projectOutcome: "Significantly improved junction clearance rate in scaled simulations by dynamically increasing green light duration for congested lanes.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80", caption: "Urban Traffic Signal Dynamic Routing Concept" },
      { url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80", caption: "Sensor Array and Microcontroller Breadboard Circuit" }
    ],
    featured: true
  },
  {
    id: "proj-04",
    number: "04",
    title: "GPS & GSM Vehicle Tracking System",
    category: "EMBEDDED",
    tagline: "Real-time remote vehicle location tracking with on-demand SMS coordinate queries.",
    description: "A standalone vehicle security and tracking unit providing continuous geospatial telemetry, speed tracking, and automated SMS location replies upon missed-call or message triggers.",
    longDescription: "Designed for vehicle fleet oversight and anti-theft security, this tracking system interfaces a high-sensitivity GPS receiver with a GSM/GPRS modem. When the owner sends an SMS command or triggers a security query, the device extracts the exact coordinates, converts them into an instant clickable Google Maps hyperlink, and replies via SMS. The system also supports continuous telemetry logging over cellular networks.",
    objective: "Provide an accessible, cost-effective vehicle tracking solution that delivers pinpoint location accuracy without expensive proprietary subscriptions.",
    technologies: ["Arduino Uno", "NEO-6M GPS Module", "SIM800 GSM Module", "Serial UART Communication", "Embedded C"],
    keyComponents: ["ATmega328P Core", "Active Ceramic Patch Antenna GPS", "SIM800 Quad-Band GSM Modem", "Lithium Battery Power Management"],
    developmentFocus: "Hardware UART / SoftwareSerial coordination, fast satellite acquisition (TTFF), and SMS buffer parsing.",
    myContribution: "Implemented the dual-serial communication pipeline, formatted dynamic Google Maps URL generation, and integrated power regulator circuitry for vehicle battery compatibility.",
    projectOutcome: "Delivered sub-3-meter positioning accuracy with instantaneous Google Maps link dispatch upon receiving mobile queries.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80", caption: "Geospatial Vehicle Navigation and Tracking Interface" },
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", caption: "GPS Receiver & GSM Telephony Circuit Board" }
    ],
    featured: false
  },
  {
    id: "proj-05",
    number: "05",
    title: "Sensor-Based Automation Projects",
    category: "ELECTRONICS",
    tagline: "Modular multi-sensor home and industrial automation prototypes.",
    description: "A comprehensive suite of embedded automation prototypes incorporating LDR light sensing, ultrasonic distance monitoring, and PIR motion detection for smart environments.",
    longDescription: "This series of hands-on projects explored the integration of diverse analog and digital transducers with microcontrollers. Highlights include automatic darkness-activated lighting (LDR + Relay), contactless water tank level monitor with overflow cut-off (Ultrasonic), and intruder detection systems (PIR + Alert buzzer). Each project focused on signal conditioning, noise filtering, and dependable actuator triggering.",
    objective: "Create modular, reusable embedded circuits that automate routine energy-saving and safety tasks in residential and educational environments.",
    technologies: ["Arduino", "LDR Sensors", "Ultrasonic Transducers (HC-SR04)", "PIR Sensors", "Relay Drivers"],
    keyComponents: ["Arduino Controller", "Optocoupler Relay Boards", "HC-SR04 Ultrasonic Transducer", "LDR Sensor with LM393 Comparator", "LCD 16x2 I2C Display"],
    developmentFocus: "Signal conditioning, analog-to-digital conversion precision, threshold hysteresis, and relay inductive kickback protection.",
    myContribution: "Designed circuit layouts on breadboards, programmed responsive sensor polling routines, and integrated LCD visual feedback displays.",
    projectOutcome: "Engineered 3 functional standalone automation prototypes widely used for classroom demonstrations and peer learning.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80", caption: "Embedded Sensor Circuitry & Prototyping Board" },
      { url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", caption: "Hardware Testing & Automation Calibration Lab" }
    ],
    featured: false
  },
  {
    id: "proj-06",
    number: "06",
    title: "Automated Plant Medicine & Fertilizer Supply — Wireless",
    category: "AUTOMATION",
    tagline: "Remote precision nutrient delivery system with wireless actuator switching.",
    description: "An automated wireless agricultural dosing apparatus designed to deliver controlled quantities of liquid fertilizers and plant medicine directly to crops via wireless triggering.",
    longDescription: "Precision fertilizer and pesticide application prevents chemical overuse and protects plant health. This system utilizes wireless RF/Wi-Fi control coupled with micro-peristaltic dosing pumps. Users can trigger timed or dosage-specific nutrient delivery wirelessly. The microcontroller controls high-precision liquid dispensing while monitoring fluid levels to prevent dry pump running.",
    objective: "Facilitate safe, wireless, and measured delivery of liquid plant nutrients without requiring manual chemical handling in fields.",
    technologies: ["Wireless RF / ESP8266", "Microcontroller Logic", "Peristaltic Dosing Pump", "Liquid Level Sensors", "Motor Driver Circuitry"],
    keyComponents: ["Wireless Receiver Unit", "12V Micro Dosing Pump", "L298N / MOSFET Switch Driver", "Float Switch Fluid Indicator", "Enclosure & Nozzle Network"],
    developmentFocus: "Pulse-width modulation (PWM) flow calibration, RF command validation, and chemical-resistant tubing assembly.",
    myContribution: "Developed the wireless transceiver communication routine, calibrated volumetric flow rates per pump cycle, and assembled the modular fluid delivery rig.",
    projectOutcome: "Achieved precise volumetric dispensing with wireless trigger actuation from over 20 meters range in test trials.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      { url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80", caption: "Agricultural Automation & Fertilizer Dosing System" },
      { url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80", caption: "Wireless Controller & Fluid Dispensing Valve Assembly" }
    ],
    featured: true
  }
];

export const HARDWARE_GALLERY: HardwareItem[] = [
  {
    id: "hw-01",
    name: "Arduino Uno R3",
    category: "Microcontroller",
    spec: "ATmega328P, 16MHz, 14 Digital I/O, 6 Analog Inputs",
    description: "The foundational prototyping powerhouse for embedded C programming and rapid hardware logic testing.",
    image: "https://images.unsplash.com/photo-1608555815763-4b455b819f79?auto=format&fit=crop&w=800&q=80",
    usage: "Smart Accident Detection, Traffic Management, Sensor Automation"
  },
  {
    id: "hw-02",
    name: "ESP8266 NodeMCU",
    category: "IoT Wireless SoC",
    spec: "Tensilica L106 32-bit, Integrated 802.11 b/g/n Wi-Fi",
    description: "Compact wireless microchip used for streaming sensor analytics directly to cloud web dashboards.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    usage: "Smart Irrigation IoT, Automated Wireless Fertilizer Supply"
  },
  {
    id: "hw-03",
    name: "NEO-6M GPS Module",
    category: "Navigation & Telemetry",
    spec: "50-Channel Engine, Sub-second TTFF, High Sensitivity",
    description: "High-precision satellite receiver providing real-time latitude, longitude, velocity, and UTC timestamps.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    usage: "Vehicle Tracking System, Accident Detection & Emergency Dispatch"
  },
  {
    id: "hw-04",
    name: "SIM800L GSM/GPRS Modem",
    category: "Cellular Telecommunication",
    spec: "Quad-band 850/900/1800/1900MHz, AT Command Control",
    description: "Enables direct SMS transmission and telephony alerts to pre-programmed mobile phone numbers.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    usage: "Emergency SMS Alerts, Vehicle Query Response"
  },
  {
    id: "hw-05",
    name: "Sensor Suite (IR, Ultrasonic, Soil, Motion)",
    category: "Transducers & Input",
    spec: "Analog & Digital Interfaces, 3.3V / 5V Logic Compatible",
    description: "A wide array of sensors converting physical environmental phenomena into digitized microcontroller inputs.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    usage: "Density-based Traffic, Soil Moisture Detection, Obstacle Sensing"
  },
  {
    id: "hw-06",
    name: "Relay & Power Actuator Drivers",
    category: "Actuation & Power Isolation",
    spec: "Optocoupler Isolation, 10A 250VAC Switching Capacity",
    description: "Safely bridges low-power 5V microcontrollers to high-current pumps, motors, and automated switching systems.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    usage: "Pump Triggering, Light Switching, Solenoid Valve Control"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Student Project Developer",
    organization: "Excel Engineering College",
    location: "Erode, Tamil Nadu",
    period: "2023 – 2026",
    highlights: [
      "Developed multiple working mini-projects and functional hardware prototypes using Arduino, ESP8266, and dedicated sensor modules.",
      "Integrated cellular GSM (SIM800) and GPS (NEO-6M) modules for real-time telemetry, anti-theft tracking, and automated emergency notification pipelines.",
      "Explored smart automation architectures, safety systems, and IoT data transmission across agriculture and intelligent traffic management domains.",
      "Actively assisted peers and student project teams in circuit debugging, breadboard schematic assembly, and microcontroller C/C++ coding."
    ],
    technologies: ["Embedded C", "Arduino IDE", "ESP8266 / ESP32", "Sensors Interfacing", "GSM / GPS Modules", "Circuit Prototyping"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Electronics & Communication Engineering",
    institution: "Excel Engineering College, Erode",
    period: "2023 – Present (Final Year)",
    score: "CGPA: 7.50",
    details: "Focused on Embedded Systems, Microcontroller Architecture, IoT Systems, Digital Signal Processing, and Hardware Circuit Prototyping.",
    badge: "Current Degree"
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Biology Stream",
    period: "2022",
    score: "63%",
    details: "Completed foundational education in Higher Secondary with focus on Sciences, Mathematics, and Physics.",
    badge: "HSC"
  },
  {
    degree: "Secondary Education (10th Grade)",
    institution: "JKK Munirajah Matric Higher Secondary School",
    period: "2020",
    score: "63%",
    details: "Completed Secondary School Leaving Certificate (SSLC) with solid grounding in science and analytical fundamentals.",
    badge: "SSLC"
  }
];
