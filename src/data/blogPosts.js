const blogPosts = [
  {
    id: "automatic-smart-speed-governor",
    title: "Automatic Smart Speed Governor",
    date: "2016-06-01",
    tags: ["IoT", "Automotive"],
    summary:
      "An IoT-based smart speed governor that automatically limits vehicle speed using sensor data and real-time control systems.",
    content: `## Automatic Smart Speed Governor

An IoT-based project that implements an automatic speed limiting system for vehicles. Using GPS and accelerometer sensors, the system monitors vehicle speed in real-time and automatically engages the throttle controller when speed limits are exceeded.

### Key Features
- Real-time GPS tracking
- Automatic throttle control
- Speed limit database
- Mobile app for monitoring

### Technologies Used
- Arduino/ESP8266
- GPS Module
- Accelerometer
- Mobile App (Android)`,
  },
  {
    id: "image-prediction",
    title: "Image Prediction",
    date: "2017-12-04",
    tags: ["Machine Learning", "Computer Vision"],
    summary:
      "Image classification and prediction using convolutional neural networks on standard datasets.",
    content: `## Image Prediction

Built an image classification system using Convolutional Neural Networks (CNNs). The model was trained on standard image datasets and achieved competitive accuracy rates.

### Approach
- Data preprocessing and augmentation
- CNN architecture design
- Training with transfer learning
- Model evaluation and optimization

### Results
Achieved high accuracy on test sets using architectures like VGG and ResNet.`,
  },
  {
    id: "optical-character-recognition",
    title: "Optical Character Recognition",
    date: "2018-01-07",
    tags: ["Machine Learning", "OCR"],
    summary:
      "OCR system for extracting text from images using deep learning techniques.",
    content: `## Optical Character Recognition

Developed an OCR pipeline that extracts text from images using deep learning. The system handles various fonts, orientations, and noise conditions.

### Pipeline
1. Image preprocessing
2. Text detection
3. Character segmentation
4. Character recognition
5. Post-processing

### Technologies
- TensorFlow
- OpenCV
- Python`,
  },
  {
    id: "tumour-class-prediction",
    title: "Tumour Class Prediction",
    date: "2018-08-08",
    tags: ["Machine Learning", "Medical Imaging"],
    summary:
      "Deep learning model for classifying tumour types from radiology and pathology images.",
    content: `## Tumour Class Prediction

Applied deep learning to classify tumour types from medical images. This project aimed to assist radiologists in making faster and more accurate diagnoses.

### Approach
- Dataset: Radiology and pathology images
- Model: Custom CNN with transfer learning
- Evaluation: Accuracy, precision, recall, F1-score

### Impact
The model showed promise in assisting medical professionals with tumour classification, achieving competitive results with state-of-the-art methods.`,
  },
  {
    id: "template-protection",
    title: "Template Protection",
    date: "2018-10-04",
    tags: ["Security", "Biometrics"],
    summary:
      "Biometric template protection techniques for securing fingerprint and face recognition systems.",
    content: `## Template Protection

Research on protecting biometric templates in recognition systems. Implemented cancelable biometric techniques that allow template renewal without changing the biometric trait.

### Methods
- Biometric salting
- Cancelable biometrics
- Secure sketch schemes

### Applications
Fingerprint and face recognition systems requiring privacy protection.`,
  },
  {
    id: "results-webpage",
    title: "Results Webpage",
    date: "2019-06-30",
    tags: ["Web Development"],
    summary:
      "Web application for displaying and managing examination results.",
    content: `## Results Webpage

Built a web application for displaying examination results with features for filtering, sorting, and exporting data.

### Features
- Responsive design
- Data filtering and sorting
- PDF export functionality
- Admin dashboard

### Technologies
- HTML/CSS/JavaScript
- Backend API
- Database integration`,
  },
  {
    id: "getting-started-opencv",
    title: "Getting Started with OpenCV with C++",
    date: "2019-10-27",
    tags: ["OpenCV", "C++", "Tutorial"],
    summary:
      "Beginner's guide to using OpenCV library with C++ for computer vision tasks.",
    content: `## Getting Started with OpenCV with C++

A comprehensive tutorial on setting up and using OpenCV with C++ for computer vision applications.

### Topics Covered
- Installation and setup
- Basic image operations
- Image filtering
- Color space conversions
- Drawing on images

### Code Examples
Includes practical code examples for each concept covered.`,
  },
  {
    id: "basics-opencv",
    title: "Basics of OpenCV with C++",
    date: "2019-10-30",
    tags: ["OpenCV", "C++", "Tutorial"],
    summary:
      "Deep dive into OpenCV fundamentals with C++ including image processing and feature detection.",
    content: `## Basics of OpenCV with C++

Continuation of the OpenCV tutorial series, covering more advanced topics.

### Topics Covered
- Image transforms
- Histogram equalization
- Edge detection
- Contour detection
- Feature matching

### Practical Applications
Real-world examples demonstrating each concept.`,
  },
  {
    id: "sample-markdown",
    title: "Sample Markdown",
    date: "2020-02-28",
    tags: ["Tutorial", "Markdown"],
    summary:
      "Demonstration of markdown formatting features for Beautiful Jekyll blog posts.",
    content: `## Sample Markdown Post

This is a sample post demonstrating various markdown formatting options available in the blog.

### Features Demonstrated
- Headers (H1-H6)
- Bold, italic, strikethrough
- Lists (ordered and unordered)
- Code blocks
- Blockquotes
- Images and links
- Tables

> "The only way to do great work is to love what you do." - Steve Jobs`,
  },
  {
    id: "covid19-world-map",
    title: "Covid-19 World Map",
    date: "2020-04-29",
    tags: ["Web Development", "Data Visualization"],
    summary:
      "Interactive world map visualizing Covid-19 spread and statistics in real-time.",
    content: `## Covid-19 World Map

An interactive web application that visualizes the global spread of Covid-19 using real-time data.

### Features
- Interactive world map
- Real-time data updates
- Country-wise statistics
- Trend charts
- Time slider for historical data

### Technologies
- D3.js for visualization
- REST API for data
- Responsive design

### Live Demo
Hosted on Netlify with automatic data updates.`,
  },
  {
    id: "predict-number",
    title: "Predict Number",
    date: "2020-05-16",
    tags: ["Machine Learning", "TensorFlow.js", "Web"],
    summary:
      "Browser-based handwritten digit recognition using TensorFlow.js and a pre-trained MNIST model.",
    content: `## Predict Number

A web application that recognizes handwritten digits (0-9) directly in the browser using TensorFlow.js.

### How It Works
1. Draw a digit on the canvas
2. The image is processed and fed to a pre-trained neural network
3. The model predicts the digit with confidence scores

### Technology Stack
- TensorFlow.js for client-side ML
- Pre-trained MNIST model
- HTML5 Canvas for drawing
- Pure JavaScript (no framework)

### Features
- Real-time prediction
- Confidence scores for all digits
- Clean, intuitive interface
- No server required - runs entirely in browser`,
  },
  {
    id: "gui-python-packages",
    title: "GUI for Python Packages",
    date: "2020-06-13",
    tags: ["Python", "Tools"],
    summary:
      "Desktop GUI application for managing Python packages with a visual interface.",
    content: `## GUI for Python Packages

A desktop application that provides a graphical interface for managing Python packages.

### Features
- Install, update, and remove packages
- Search PyPI repository
- Virtual environment management
- Dependency visualization
- Package version history

### Technologies
- Python
- Tkinter/PyQt
- pip integration`,
  },
  {
    id: "conda-configuration",
    title: "Conda Configuration for TensorFlow",
    date: "2020-06-20",
    tags: ["Python", "TensorFlow", "Tutorial"],
    summary:
      "Step-by-step guide to configure Conda environments for TensorFlow development.",
    content: `## Conda Configuration for TensorFlow

A comprehensive guide to setting up Conda environments optimized for TensorFlow development.

### Topics Covered
- Conda installation
- Environment creation
- CUDA and cuDNN setup
- TensorFlow installation
- Common issues and solutions

### Best Practices
- Environment isolation
- Dependency management
- GPU configuration`,
  },
  {
    id: "markdown-live-editor",
    title: "Markdown Live Editor",
    date: "2020-06-20",
    tags: ["Web Development", "Tools"],
    summary:
      "Real-time markdown editor with live preview and export capabilities.",
    content: `## Markdown Live Editor

A web-based markdown editor with real-time preview.

### Features
- Split-pane editing
- Live preview
- Syntax highlighting
- Export to HTML/PDF
- GitHub-flavored markdown support

### Technologies
- JavaScript
- marked.js for parsing
- highlight.js for code blocks`,
  },
  {
    id: "nvidia-sli",
    title: "NVIDIA SLI Configurations",
    date: "2020-06-20",
    tags: ["Hardware", "NVIDIA"],
    summary:
      "Guide to setting up and optimizing NVIDIA SLI configurations for multi-GPU setups.",
    content: `## NVIDIA SLI Configurations

A guide to configuring NVIDIA SLI for multi-GPU setups.

### Topics
- SLI bridge requirements
- BIOS settings
- Driver configuration
- Game profiles
- Performance tuning

### Considerations
- Power requirements
- Heat management
- Compatibility`,
  },
  {
    id: "nvidia-drivers",
    title: "NVIDIA Drivers Configuration",
    date: "2020-06-20",
    tags: ["NVIDIA", "Setup"],
    summary:
      "Guide to installing and configuring NVIDIA GPU drivers on different operating systems.",
    content: `## NVIDIA Drivers Configuration

Step-by-step guide to NVIDIA driver installation and configuration.

### Platforms Covered
- Windows
- Linux (Ubuntu/CentOS)
- CUDA toolkit integration

### Topics
- Driver installation
- NVIDIA settings
- CUDA setup
- Troubleshooting common issues`,
  },
  {
    id: "pytorch-gpu-cpu",
    title: "PyTorch GPU & CPU Configurations",
    date: "2020-06-20",
    tags: ["PyTorch", "Deep Learning"],
    summary:
      "Guide to configuring PyTorch for both GPU and CPU environments.",
    content: `## PyTorch GPU & CPU Configurations

Comprehensive guide to setting up PyTorch for optimal performance on both GPU and CPU.

### GPU Setup
- CUDA compatibility
- cuDNN installation
- GPU memory management

### CPU Optimization
- MKL/OPENBLAS configuration
- Multi-threading setup

### Code Examples
- Device detection
- Tensor placement
- Data loading optimization`,
  },
  {
    id: "jupyter-docker",
    title: "Running Jupyter in Docker",
    date: "2020-06-20",
    tags: ["Docker", "Jupyter", "DevOps"],
    summary:
      "Guide to running Jupyter notebooks in Docker containers for reproducible environments.",
    content: `## Running Jupyter in Docker

How to containerize Jupyter notebooks using Docker for reproducible data science environments.

### Topics
- Docker basics
- Jupyter Docker Stacks
- Custom Dockerfile
- Volume mounting
- Port mapping

### Benefits
- Reproducible environments
- Easy sharing
- Dependency isolation`,
  },
  {
    id: "tensorflow-gpu-cpu",
    title: "TensorFlow GPU & CPU Configurations",
    date: "2020-06-20",
    tags: ["TensorFlow", "Deep Learning"],
    summary:
      "Guide to configuring TensorFlow for GPU and CPU training environments.",
    content: `## TensorFlow GPU & CPU Configurations

Complete guide to TensorFlow setup for both GPU and CPU environments.

### GPU Configuration
- CUDA toolkit installation
- cuDNN setup
- GPU device configuration

### CPU Configuration
- Multi-threading
- Intel MKL optimization

### Memory Management
- Memory growth settings
- Mixed precision training`,
  },
  {
    id: "software-design",
    title: "Software Design",
    date: "2020-09-18",
    tags: ["Software Engineering", "Design Patterns"],
    summary:
      "Overview of software design principles, patterns, and best practices.",
    content: `## Software Design

Exploration of fundamental software design principles and patterns.

### Topics
- SOLID principles
- Design patterns (GoF)
- Architectural patterns
- UML diagrams
- Code review best practices

### Key Takeaways
- Separation of concerns
- Don't repeat yourself (DRY)
- Keep it simple (KISS)
- Composition over inheritance`,
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    date: "2020-09-23",
    tags: ["Distributed Systems", "Architecture"],
    summary:
      "Notes on distributed systems concepts including consensus, replication, and fault tolerance.",
    content: `## Distributed Systems

Key concepts in distributed systems design and implementation.

### Topics
- CAP theorem
- Consensus algorithms (Raft, Paxos)
- Consistency models
- Replication strategies
- Fault tolerance
- Distributed caching

### Real-world Examples
- Google Spanner
- Apache Kafka
- Redis Cluster`,
  },
  {
    id: "pdf-conversions",
    title: "PDF Conversions using Python",
    date: "2020-09-27",
    tags: ["Python", "Tutorial"],
    summary:
      "Guide to converting between PDF and other formats using Python libraries.",
    content: `## PDF Conversions using Python

How to convert PDF files to various formats and vice versa using Python.

### Libraries Covered
- PyPDF2
- pdf2image
- docx2pdf
- reportlab

### Conversions
- PDF to text
- PDF to images
- Images to PDF
- Word to PDF
- HTML to PDF`,
  },
  {
    id: "python-39-whats-new",
    title: "What's New in Python 3.9",
    date: "2020-10-06",
    tags: ["Python", "Release"],
    summary:
      "Overview of new features and improvements in Python 3.9 release.",
    content: `## What's New in Python 3.9

Exploring the exciting new features in Python 3.9.

### New Features
- Dictionary merge operators (|)
- String methods (removeprefix, removesuffix)
- Type hinting generics
- New parser (PEG)
- Performance improvements

### Code Examples
Practical examples demonstrating each new feature.`,
  },
  {
    id: "linux-commands",
    title: "Getting Started with Linux Commands",
    date: "2020-10-13",
    tags: ["Linux", "Tutorial"],
    summary:
      "Beginner's guide to essential Linux commands for daily development tasks.",
    content: `## Getting Started with Linux Commands

Essential Linux commands every developer should know.

### Topics
- File navigation (ls, cd, pwd)
- File operations (cp, mv, rm, mkdir)
- Text processing (grep, sed, awk)
- Process management (ps, top, kill)
- Permissions (chmod, chown)
- Package management (apt, yum)

### Tips and Tricks
Useful shortcuts and combinations.`,
  },
  {
    id: "high-performance-computing",
    title: "High Performance Computing",
    date: "2020-11-03",
    tags: ["HPC", "Parallel Computing"],
    summary:
      "Introduction to high performance computing concepts and parallel programming.",
    content: `## High Performance Computing

Overview of HPC concepts and parallel computing paradigms.

### Topics
- Parallel architectures
- MPI programming
- OpenMP
- GPU computing (CUDA)
- Performance optimization
- Benchmarking

### Applications
- Scientific simulations
- Machine learning training
- Data processing`,
  },
  {
    id: "robotic-process-automation",
    title: "Robotic Process Automation",
    date: "2020-11-09",
    tags: ["RPA", "Automation"],
    summary:
      "Introduction to Robotic Process Automation and its applications in business workflows.",
    content: `## Robotic Process Automation

Understanding RPA and its impact on business processes.

### What is RPA
- Software robots automating repetitive tasks
- Rule-based automation
- No-code/low-code platforms

### Tools
- UiPath
- Automation Anywhere
- Blue Prism

### Use Cases
- Data entry automation
- Invoice processing
- Customer onboarding`,
  },
  {
    id: "edge-computing",
    title: "Edge Computing",
    date: "2020-11-23",
    tags: ["Edge Computing", "IoT"],
    summary:
      "Overview of edge computing architecture, benefits, and real-world applications.",
    content: `## Edge Computing

Exploring edge computing and its role in modern architectures.

### What is Edge Computing
- Processing data near the source
- Reduced latency
- Bandwidth optimization

### Architecture
- Edge devices
- Edge servers
- Fog computing
- Cloud integration

### Applications
- IoT
- Autonomous vehicles
- Smart cities
- Real-time analytics`,
  },
  {
    id: "python-39-deep-dive",
    title: "Python 3.9 Deep Dive",
    date: "2020-11-29",
    tags: ["Python", "Advanced"],
    summary:
      "In-depth exploration of Python 3.9 features with practical code examples.",
    content: `## Python 3.9 Deep Dive

A comprehensive look at Python 3.9's features beyond the basics.

### Advanced Topics
- PEG parser internals
- Performance benchmarks
- Migration guide from 3.8
- Backward compatibility
- New standard library modules

### Benchmarks
Performance comparisons showing improvements.`,
  },
  {
    id: "pdf-compress-python",
    title: "PDF Compress Using Python",
    date: "2021-01-10",
    tags: ["Python", "Tools"],
    summary:
      "Techniques for compressing PDF files using Python libraries.",
    content: `## PDF Compress Using Python

How to reduce PDF file size using Python.

### Methods
- Image compression
- Font subsetting
- Stream optimization
- Object compression

### Libraries
- PyPDF2
- Pikepdf
- Ghostscript wrapper

### Results
Before/after comparisons with different documents.`,
  },
  {
    id: "vscode-error",
    title: "VSCode Error",
    date: "2021-07-13",
    tags: ["VSCode", "Debugging"],
    summary:
      "Common VSCode errors and their solutions for Python development.",
    content: `## VSCode Error Troubleshooting

Common VSCode errors encountered during Python development and how to fix them.

### Issues Covered
- Pylance not loading
- Import resolution failures
- Debugger connection issues
- Terminal integration problems

### Solutions
Step-by-step fixes for each issue.`,
  },
  {
    id: "academia-or-industry",
    title: "Academia or Industry",
    date: "2021-01-01",
    tags: ["Career", "Reflection"],
    summary:
      "Reflections on choosing between academic research and industry software engineering careers.",
    content: `## Academia or Industry

A personal reflection on the choice between pursuing academia and joining the industry.

### Considerations
- Research freedom vs. product impact
- Publication pressure vs. shipping code
- Teaching vs. mentoring engineers
- Work-life balance
- Financial considerations

### Personal Journey
My experience navigating this decision and what I learned along the way.`,
  },
  {
    id: "grad-student-perspective",
    title: "A Perspective of a Current Computer Grad Student",
    date: "2021-01-01",
    tags: ["Personal", "Graduate School"],
    summary:
      "Personal perspective on the graduate school experience in computer science.",
    content: `## A Perspective of a Current Computer Grad Student

Reflections on the graduate school journey in computer science.

### Topics
- Choosing a research area
- Working with advisors
- Publication process
- Work-life balance
- Career preparation
- Building relationships

### Advice for Prospective Students
Tips based on personal experience.`,
  },
  {
    id: "blockchain",
    title: "BlockChain",
    date: "2020-01-01",
    tags: ["Blockchain", "Technology"],
    summary:
      "Introduction to blockchain technology and its applications beyond cryptocurrency.",
    content: `## Blockchain

An overview of blockchain technology and its applications.

### What is Blockchain
- Distributed ledger technology
- Cryptographic hashing
- Consensus mechanisms

### Applications
- Cryptocurrency
- Supply chain
- Smart contracts
- Identity verification`,
  },
  {
    id: "creational-patterns",
    title: "Creational Patterns",
    date: "2020-01-01",
    tags: ["Design Patterns", "Software Engineering"],
    summary:
      "Overview of creational design patterns in software engineering.",
    content: `## Creational Patterns

Design patterns focused on object creation mechanisms.

### Patterns Covered
- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

### When to Use
Guidelines for selecting the appropriate pattern.`,
  },
  {
    id: "federated-learning",
    title: "Federated Learning",
    date: "2021-01-01",
    tags: ["Machine Learning", "Privacy"],
    summary:
      "Overview of federated learning for privacy-preserving machine learning.",
    content: `## Federated Learning

Introduction to federated learning and its role in privacy-preserving ML.

### What is Federated Learning
- Training models without sharing raw data
- Local model training
- Secure aggregation

### Applications
- Mobile keyboard prediction
- Healthcare
- Financial services

### Challenges
- Communication efficiency
- Non-IID data
- Security concerns`,
  },
  {
    id: "where-am-i",
    title: "Where am I",
    date: "2021-01-01",
    tags: ["Personal", "Reflection"],
    summary:
      "Personal reflection on career journey and future aspirations.",
    content: `## Where am I

A personal reflection on where I am in my career and life journey.

### Looking Back
- Academic achievements
- Professional growth
- Personal milestones

### Looking Forward
- Goals and aspirations
- Skills to develop
- Impact I want to make`,
  },
  {
    id: "medical-image-analysis",
    title: "Medical Image Analysis with Deep Learning",
    date: "2021-01-01",
    tags: ["Deep Learning", "Medical Imaging"],
    summary:
      "Overview of deep learning techniques applied to medical image analysis.",
    content: `## Medical Image Analysis with Deep Learning

Exploring deep learning applications in medical imaging.

### Topics
- CNN architectures for medical imaging
- Data augmentation techniques
- Transfer learning
- Segmentation methods
- Classification approaches

### Applications
- X-ray analysis
- MRI segmentation
- Histopathology
- Retinal imaging`,
  },
];

export default blogPosts;
