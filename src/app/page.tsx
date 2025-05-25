import React from 'react'
import Link from 'next/link'
import { MapPinIcon, CheckCircleIcon, CodeBracketIcon, ChartBarIcon, ServerStackIcon, BoltIcon } from '@heroicons/react/24/solid'
import { ThemeToggle } from './components/ThemeToggle'
import { ScrollFadeIn } from './components/ScrollFadeIn'

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <ThemeToggle />
      {/* Hero + Terminal Section */}
      <section className="section pb-0">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left: Main Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-2">
              <div>
                <h1 className="heading text-4xl md:text-5xl mb-1">Ben Baker</h1>
                <h2 className="subheading text-2xl mb-2">Software Engineer</h2>
              </div>
              <img
                src="/profile.jpg"
                alt="Profile photo of Ben Baker"
                className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover object-[center_20%] border-4 border-primary shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 max-w-xl">
              Building robust, scalable data platforms, real-time metrics dashboards, and automated graph data solutions. Fullstack engineer with a passion for backend, data, and analytics.
            </p>
            <div className="flex flex-wrap gap-3 mb-2 text-base">
              <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                <MapPinIcon className="w-5 h-5 text-blue-500" /> Waterford, ME
              </span>
              <span className="flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                <CheckCircleIcon className="w-5 h-5 text-green-500" /> Open to Developer & Data Engineering roles
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 mb-6">
              <span className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                <ServerStackIcon className="w-5 h-5" /> GCP
              </span>
              <span className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">
                <ServerStackIcon className="w-5 h-5" /> AWS
              </span>
              <span className="flex items-center gap-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
                <ServerStackIcon className="w-5 h-5" /> ETL
              </span>
              <span className="flex items-center gap-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full">
                <CodeBracketIcon className="w-5 h-5" /> Fullstack
              </span>
              <span className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full">
                <ChartBarIcon className="w-5 h-5" /> Data Engineering
              </span>
              <span className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                <ServerStackIcon className="w-5 h-5" /> Cloud Infra
              </span>
              <span className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">
                <BoltIcon className="w-5 h-5" /> Real-Time Dashboards
              </span>
            </div>
            <div className="flex gap-4 flex-wrap mt-2">
              <Link href="mailto:bbakercello@gmail.com" className="btn-primary">
                Contact Me
              </Link>
              <Link href="https://github.com/ben-baker-software" target="_blank" className="btn-secondary">
                GitHub
              </Link>
              <a 
                href="/resume/ben_baker_resume.pdf" 
                download="Ben_Baker_Resume.pdf"
                className="btn-primary transition-transform duration-200 hover:scale-105 hover:bg-primary/90"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* Right: Terminal */}
          <div className="md:w-[420px] flex flex-col justify-center">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-4 text-xs text-gray-400">~/ben_baker</span>
              </div>
              {/* Terminal Body */}
              <div className="px-6 py-6 font-mono text-sm text-gray-100 space-y-2">
                <div><span className="text-green-400">$</span> whoami</div>
                <div className="pl-4 text-blue-300">Software Engineer III | Fullstack & Data Specialist</div>

                <div className="mt-4"><span className="text-green-400">$</span> ls ./expertise</div>
                <div className="pl-4 text-purple-300">Dataflow  BigQuery  Dataform  Cloud Run  PubSub  Cloud Functions  Terraform  Airflow  API-Design  Multi-Tenant-Systems  Real-Time-Dashboards  Graph-DB-Automation  Neo4j-Integration</div>

                <div className="mt-4"><span className="text-green-400">$</span> cat ./focus.txt</div>
                <div className="pl-4 text-yellow-300">Building robust, scalable data platforms, real-time metrics dashboards, and automated graph data solutions</div>

                <div className="mt-4"><span className="text-green-400">$</span> grep -i "interests" profile.json</div>
                <div className="pl-4 text-pink-300">["cloud-data", "automation", "real-time-visualization", "graph-db", "ai-ml", "team-collaboration"]</div>

                <div className="mt-4"><span className="text-green-400">$</span> curl api.availability.com</div>
                <div className="pl-4 text-green-300">&#123; status: "Open to new opportunities", location: "Hybrid/Remote" &#125;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <ScrollFadeIn>
        <section className="section">
          <div className="container">
            <h2 className="heading text-center mb-12">Technical Expertise</h2>
            
            {/* Cloud Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Cloud Technologies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* GCP Expertise */}
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <ServerStackIcon className="w-8 h-8 mr-3 text-primary" />
                      <h4 className="text-xl font-semibold">Google Cloud Platform</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Data & Analytics</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Dataflow', 'BigQuery', 'Dataform', 'PubSub', 'Cloud Logging'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Compute & Serverless</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Cloud Run', 'Cloud Functions', 'App Engine'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Infrastructure</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Terraform', 'Cloud IAM', 'VPC', 'Cloud Storage'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>

                {/* AWS Expertise */}
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <ServerStackIcon className="w-8 h-8 mr-3 text-secondary" />
                      <h4 className="text-xl font-semibold">Amazon Web Services</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Data & Analytics</h5>
                        <div className="flex flex-wrap gap-2">
                          {['DynamoDB', 'Kinesis', 'Glue', 'Athena'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Serverless</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Lambda', 'API Gateway', 'S3'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Development & DevOps */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Development & DevOps</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Version Control</h4>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'Conventional Commits', 'GitLab CI/CD', 'GitLab Components', 'GitHub Actions'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Languages & Frameworks</h4>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Node.js'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Databases</h4>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {['PostgreSQL', 'Neo4j', 'Redis', 'Microsoft SQL Server'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Professional Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Project Management</h4>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {['JIRA', 'Agile Methodologies', 'Kanban', 'Sprint Planning'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Leadership & Communication</h4>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {['Technical Leadership', 'DB Meetings', 'Team Collaboration', 'Documentation'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Experience Section */}
      <ScrollFadeIn>
        <section className="section bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
          <div className="container">
            <h2 className="heading text-center mb-12">Professional Experience</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <ScrollFadeIn>
                <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold gradient-text">Professional Software Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-300">05/2025 - Present</p>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Dematic Software</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Working on warehouse solutions control tower, focusing on real-time data metrics and cloud infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Developing DevOps solutions in GCP, including GitLab CI/CD pipelines and GitLab components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Building TypeScript APIs and React applications with React Flow and Carbon UI components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Implementing real-time data metrics using Python and cloud infrastructure</span>
                    </li>
                  </ul>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn>
                <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold gradient-text">Software Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-300">01/2023 - Present</p>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">VividCloud</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Migrated complex Microsoft SQL ETL workflows to BigQuery and developed serverless APIs with Cloud Run</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Built Airflow DAGs and Python data normalization libraries integrated into Dataflow pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Designed metric processor leveraging Redis and Neo4j for real-time warehouse insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Built GCP infrastructure with Terraform, transitioning EDP into a scalable multi-tenant platform</span>
                    </li>
                  </ul>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <h2 className="heading text-center mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollFadeIn>
              <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Master of Contemporary Classical Music</h3>
                <p className="text-gray-600 dark:text-gray-300">Boston Conservatory at Berklee</p>
                <p className="text-gray-500 dark:text-gray-400">08/2017 - 05/2019</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn>
              <div className="experience-card transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Bachelor of Cello Performance</h3>
                <p className="text-gray-600 dark:text-gray-300">The Eastman School of Music</p>
                <p className="text-gray-500 dark:text-gray-400">08/2012 - 05/2016</p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
