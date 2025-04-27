import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "experience", name: "Experience" },
    { id: "education", name: "Education" },
    { id: "certifications", name: "Certifications" },
    { id: "contact", name: "Contact" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-gray-100 font-['Poppins'] text-gray-800">
      {/* Hero Section - Full Width */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative w-full">
        <div className="text-center px-4">
          <motion.img
            src="/profile.jpg" // Should resolve to /portfolio/profile.jpg
            alt="Jasmandeep Singh"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onError={(e) => console.log("Image load error:", e)} // Debug
          />
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jasmandeep Singh
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Java Developer
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/jasmandeep15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jasmandeep-singh-8460b3174/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:jasmandeep1551999@gmail.com"
              className="text-white hover:text-gray-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={28} />
            </motion.a>
            <motion.a
              href="/resume_JASMAN_DEEP.pdf" // Should resolve to /portfolio/resume_JASMAN_DEEP.pdf
              download="resume_JASMAN_DEEP.pdf"
              className="text-white hover:text-gray-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => console.log("Download attempted:", e)} // Debug
            >
              <FaFileDownload size={28} />
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* Navbar - Full Width */}
      <nav className="bg-white shadow-lg sticky top-0 z-10">
        <div className="px-4 py-4">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <motion.a
                  href={`#${section.id}`}
                  className={`text-gray-700 hover:text-blue-600 font-medium text-sm sm:text-base md:text-lg ${
                    activeSection === section.id
                      ? "text-blue-600 underline"
                      : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content - Full Width with Responsive Padding */}
      <main className="px-4 py-12">
        {/* About */}
        <motion.section
          id="about"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            About Me
          </h2>
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            whileHover={cardHover}
          >
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Results-driven Full Stack Java Developer with over 3 years of
              experience in designing and deploying scalable web applications.
              Proficient in building RESTful APIs, integrating front-end and
              back-end systems, and optimizing performance, security, and
              accessibility. Skilled in Agile development, SEO-friendly
              solutions, and workflow automation. Passionate about delivering
              high-quality software solutions while continuously enhancing
              technical expertise. Seeking a challenging role in Full Stack
              Development, Front-End, Back-End, or Software Engineering to
              leverage skills, contribute effectively, and drive innovation.
            </p>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
            {[
              "HTML5, CSS3",
              "JavaScript (ES6+)",
              "ReactJS",
              "Bootstrap, Redux",
              "Java",
              "Spring Boot, MVC, Hibernate",
              "Relational Databases (SQL, MySQL)",
              "JPA, Microservices, RESTful APIs",
              "Git, Github",
              "Scrum Methodology, Lombok",
              "Maven, NPM, CI/CD",
              "Docker, Kubernetes",
              "Agile Development",
            ].map((skill) => (
              <motion.div
                key={skill}
                className="bg-blue-50 p-2 sm:p-3 rounded-lg text-center text-blue-800 font-medium text-xs sm:text-sm md:text-base hover:bg-blue-100 transition-all duration-300"
                whileHover={cardHover}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Projects
          </h2>
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            whileHover={cardHover}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              God Words
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
              Developed an interactive web application with a dynamic "quote of
              the day" feature using React.js, Redux, and Spring Boot. Optimized
              API performance, reducing response time by 30% and improving
              frontend load times by 20%.
            </p>
            <motion.a
              href="https://jasmandeep15.github.io/god-words-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-3 sm:px-4 py-2 sm:py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Experience
          </h2>
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            whileHover={cardHover}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              Full Stack Java Developer
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Digaxy Solutions Pvt. Ltd. - India | 10/2021 - 10/2024
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Project: ERP System
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm sm:text-base">
              <li>
                Designed and integrated scalable RESTful APIs using Spring Boot,
                Microservices, and API Gateway, ensuring high availability and
                performance.
              </li>
              <li>
                Engineered a high-performance ERP system for schools in Tier-2
                and Tier-3 cities, featuring modules for attendance tracking,
                homework assignment, fee management, and student performance
                reporting.
              </li>
              <li>
                Developed responsive and dynamic user interfaces using ReactJS
                and Redux, enhancing usability and accessibility across desktop
                and mobile platforms.
              </li>
              <li>
                Technologies Used: Java, Spring Boot, ReactJS, MySQL, OAuth, JWT
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Education
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
              whileHover={cardHover}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Punjab University - India | 2024 | 75.93%
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
              whileHover={cardHover}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Bachelor of Science: Computer Science
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Shri Guru Tegh Bahadur Khalsa College - Delhi University, India
                | 2021 | CGPA: 7.25
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          id="certifications"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Certifications
          </h2>
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            whileHover={cardHover}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              Masters Program - Full-Stack Java Developer
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Simplilearn Certified | 2025
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm sm:text-base">
              <li>
                Object-oriented Java Programming: Data Structures & Beyond
              </li>
              <li>Java Web Pages & Database Management</li>
              <li>
                Spring MVC & Advanced Java Frontend Web Application Development
              </li>
              <li>Web Application Testing & DevOps</li>
              <li>Full Stack Java Developer Capstone</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Contact
          </h2>
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center"
            whileHover={cardHover}
          >
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="mailto:jasmandeep1551999@gmail.com"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={20} sm:size={24} className="mr-2" /> Email
              </motion.a>
              <motion.a
                href="https://github.com/jasmandeep15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} sm:size={24} className="mr-2" /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jasmandeep-singh-8460b3174/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} sm:size={24} className="mr-2" /> LinkedIn
              </motion.a>
              <motion.a
                href="/resume_JASMAN_DEEP.pdf" // Should resolve to /portfolio/resume_JASMAN_DEEP.pdf
                download="resume_JASMAN_DEEP.pdf"
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => console.log("Download attempted:", e)} // Debug
              >
                <FaFileDownload size={20} sm:size={24} className="mr-2" />{" "}
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm sm:text-base">
          © 2025 Jasmandeep Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
