import Image from "next/image"
import { Globe, Mail, Github, Linkedin, FileText } from "lucide-react"
import SkillBadge from "@/components/skill-badge"
import ExperienceItem from "@/components/experience-item"
import ProjectCard from "@/components/project-card"
import OrganizationItem from "@/components/organization-item"
import JournalItem from "@/components/journal-item"
import LanguageSwitch from "@/components/LanguageSwitch"
import PrintButton from "@/components/PrintButton"
import TranslatedText from "@/components/TranslatedText"
import { LanguageProvider } from "@/context/LanguageContext"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="max-w-4xl mx-auto px-4 py-8 print:px-2 print:py-4 print:max-w-full">
        <div className="flex justify-end space-x-2 mb-4 no-print">
          <PrintButton />
          <LanguageSwitch />
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 print:mb-4 print:flex-row print:items-start">
          <div className="flex-1 pr-0 md:pr-4 print:pr-4">
            <h1 className="text-3xl font-bold print:text-xl">R. Billiyan Mulkan Ghifari</h1>
            <p className="text-gray-700 mt-2 print:mt-1 print:text-xs max-w-full md:max-w-xl print:max-w-[80%]">
              <TranslatedText
                id="Seorang Software Engineer berpengalaman dengan rekam jejak 3 tahun dalam pengembangan web dan Android, saat ini menempuh gelar master di Universitas Brawijaya. Saya adalah pembelajar cepat dan sangat adaptif, mendorong inovasi di bidang teknologi dengan menggabungkan keahlian dan pendidikan berkelanjutan untuk memberikan hasil yang berdampak dan optimal."
                en="An experienced Software Engineer with a 3-year track record in web and Android development, currently pursuing a master's degree at Universitas Brawijaya. Simultaneously, I am a quick learner and highly adaptable, driving innovation in the technology field by combining expertise with ongoing education to deliver impactful and optimal results."
              />
            </p>
            <p className="flex items-center text-gray-600 mt-2 text-sm print:text-xs print:mt-1">
              <Globe className="h-4 w-4 mr-2 print:h-3 print:w-3 print:mr-1" /> Malang, Indonesia
            </p>

            <div className="flex space-x-3 mt-4">
              <a
                href="https://ybiill.github.io"
                className="text-gray-700 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-5 w-5 print:h-4 print:w-4" />
              </a>
              <a href="mailto:billy.funciona@gmail.com" className="text-gray-700 hover:text-gray-900">
                <Mail className="h-5 w-5 print:h-4 print:w-4" />
              </a>
              <a
                href="https://github.com/ybiill"
                className="text-gray-700 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 print:h-4 print:w-4" />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <Linkedin className="h-5 w-5 print:h-4 print:w-4" />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FileText className="h-5 w-5 print:h-4 print:w-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 print:mt-0 print:ml-4">
            <Image
              src="/profile.png"
              alt="R. Billiyan Mulkan Ghifari"
              width={150}
              height={150}
              className="rounded-md object-cover shadow-lg print:w-20 print:h-20 imageResponsive"
            />
          </div>
        </div>

        {/* Professional Experience Section */}
        <section className="mb-12 print:mb-4">
          <h2 className="text-xl font-bold mb-6 print:text-lg print:mb-2">
            <TranslatedText id="Pengalaman Profesional" en="Professional Experience" />
          </h2>

          <ExperienceItem
            company="PT Digital Inti Data"
            role={<TranslatedText id="Software Engineer" en="Software Engineer" />}
            period="Jul 2022 - Nov 2024"
            location="Jakarta"
            technologies={["PHP", "Laravel", "CodeIgniter", "JavaScript", "Vue.js", "MySQL"]}
          >
            <ul className="list-disc pl-5 space-y-1 text-gray-700 print:text-xs print:space-y-0">
              <li>
                <TranslatedText
                  id="Berkolaborasi dengan tim pengembangan untuk membuat aplikasi yang disesuaikan dengan kebutuhan produk perusahaan dan permintaan klien."
                  en="Collaborated with the development team to create applications tailored to both company product requirements and client requests."
                />
              </li>
              <li>
                <TranslatedText
                  id="Mengembangkan sistem berbasis web menggunakan PHP untuk backend, memanfaatkan framework Laravel dan CodeIgniter, serta menggunakan JavaScript dengan framework Vue.js untuk frontend."
                  en="Developed web-based systems using PHP for the backend, leveraging Laravel and CodeIgniter frameworks, and utilized JavaScript with the Vue.js framework for the frontend."
                />
              </li>
              <li>
                <TranslatedText
                  id="Mengimplementasikan sistem manajemen database menggunakan MySQL."
                  en="Implemented database management systems using MySQL."
                />
              </li>
            </ul>
          </ExperienceItem>

          <ExperienceItem
            company="PT Netsindo Sentra Computama"
            role="Web Developer"
            period="Mar 2022 - Jun 2022"
            location="Jakarta"
            technologies={["PHP", "CodeIgniter", "MySQL"]}
          >
            <ul className="list-disc pl-5 space-y-1 text-gray-700 print:text-xs print:space-y-0">
              <li>
                Collaborated with the development team to create applications that meet company product requirements and
                client requests.
              </li>
              <li>
                Developed web-based ERP applications for laboratory systems using PHP with the CodeIgniter framework and
                MySQL.
              </li>
            </ul>
          </ExperienceItem>

          <ExperienceItem
            company="Namatech"
            role="Front-end Web Developer"
            period="Aug 2021 - Oct 2021"
            location="Tulungagung"
            technologies={["PHP", "Laravel"]}
          >
            <ul className="list-disc pl-5 space-y-1 text-gray-700 print:text-xs print:space-y-0">
              <li>
                Collaborated with the development team to develop applications that will become company products or
                client requests.
              </li>
              <li>Developed the interface of the kkuljaem learning website using PHP with the Laravel framework.</li>
            </ul>
          </ExperienceItem>

          <ExperienceItem
            company="Illiyin Studio"
            role="Android Developer"
            period="Apr 2021 - May 2021"
            location="Malang"
            technologies={["Android", "Java"]}
          >
            <ul className="list-disc pl-5 space-y-1 text-gray-700 print:text-xs print:space-y-0">
              <li>
                Developed the appearance of a mobile-based application and collaborated with the back-end web developer
                team to ensure the application runs well.
              </li>
            </ul>
          </ExperienceItem>

          <ExperienceItem
            company="Informatics Engineering Study Program, UIN Malang"
            role="Laboratory Assistant"
            period="2019 - 2021"
            location="Malang"
            technologies={[
              "Data Structure",
              "Digital Electronics",
              "Computer Network",
              "Distributed Systems",
              "Mobile Programming",
            ]}
          >
            <ul className="list-disc pl-5 space-y-1 text-gray-700 print:text-xs print:space-y-0">
              <li>
                Data structure (2019), Digital electronics (2019), Computer network (2020), Distributed systems and
                networks (2021), Mobile Programming (2021)
              </li>
            </ul>
          </ExperienceItem>

          {/* Add more ExperienceItem components here with TranslatedText */}
        </section>

        {/* Education Section */}
        <section className="mb-12 print:mb-4">
          <h2 className="text-xl font-bold mb-6 print:text-lg print:mb-2">
            <TranslatedText id="Pendidikan" en="Education" />
          </h2>

          <div className="mb-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Universitas Brawijaya</h3>
                <p className="text-gray-700">
                  <TranslatedText id="Magister Ilmu Komputer" en="Master of Computer Science" />
                </p>
              </div>
              <span className="text-gray-600">2023 - Present</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-700 print:text-xs">
              <li>
                <TranslatedText
                  id="Pengalaman: Presenter di International Conference on Sustainable Information Engineering and Technology (SIET) 2024."
                  en="Experience: Presenter at the International Conference on Sustainable Information Engineering and Technology (SIET) 2024."
                />
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">UIN Maulana Malik Ibrahim Malang</h3>
                <p className="text-gray-700">Bachelor of Computer Science</p>
              </div>
              <span className="text-gray-600">2018 - 2023</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-700 print:text-xs">
              <li>
                Awards: First Place Winner in the Summer Program of UIN Malang in collaboration with USIM Malaysia.
              </li>
              <li>
                Experience: Facilitator for the 2021 Summer Program of UIN Malang in collaboration with UTM Malaysia.
              </li>
            </ul>
          </div>

          {/* Add UIN Maulana Malik Ibrahim Malang education details here */}
        </section>

        {/* Organization Section */}
        <section className="mb-12 print:mb-4">
          <h2 className="text-xl font-bold mb-6 print:text-lg print:mb-2">
            <TranslatedText id="Organisasi" en="Organization" />
          </h2>

          <OrganizationItem
            organization="Ngalam Backend Community"
            role={<TranslatedText id="Manajer Komunitas" en="Community Manager" />}
            period="2023 - Present"
          />

          <OrganizationItem
            organization="Amipro (Asosiasi Mahasiswa Islam Probolinggo)"
            role="President"
            period="2021 - 2022"
          />

          <OrganizationItem organization="FKMTIF PTAI Indonesia" role="President" period="2020 - 2022" />

          <OrganizationItem
            organization="Mobile Community All Platforms (MOCAP)"
            role="Web Developer"
            period="2020 - 2022"
          />

          <OrganizationItem
            organization="HIMATIF Encoder UIN Malang"
            role="Chairman Of Public Relation Division"
            period="2019 - 2021"
          />

          {/* Add more OrganizationItem components here */}
        </section>

        {/* Skills Section */}
        <section className="mb-12 print:mb-4">
          <h2 className="text-xl font-bold mb-6 print:text-lg print:mb-2">
            <TranslatedText id="Keterampilan" en="Skills" />
          </h2>

          <div className="mb-4">
            <h3 className="font-medium mb-2">
              <TranslatedText id="Pemrograman" en="Programming" />
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge>PHP</SkillBadge>
              <SkillBadge>JavaScript</SkillBadge>
              <SkillBadge>SQL</SkillBadge>
              <SkillBadge>CodeIgniter</SkillBadge>
              <SkillBadge>Laravel</SkillBadge>
              <SkillBadge>Vue.js</SkillBadge>
              <SkillBadge>Flutter</SkillBadge>
              <SkillBadge>Java</SkillBadge>
              <SkillBadge>Kotlin</SkillBadge>
              <SkillBadge>HTML</SkillBadge>
              <SkillBadge>CSS</SkillBadge>
              <SkillBadge>Python</SkillBadge>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Design</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge>Canva</SkillBadge>
              <SkillBadge>Figma</SkillBadge>
              <SkillBadge>Logo</SkillBadge>
              <SkillBadge>Poster</SkillBadge>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Others</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge>Scrum</SkillBadge>
              <SkillBadge>Public Speaking</SkillBadge>
              <SkillBadge>Kanban</SkillBadge>
              <SkillBadge>SLDC</SkillBadge>
              <SkillBadge>Waterfall</SkillBadge>
            </div>
          </div>

          {/* Add Design and Other skills sections here */}
        </section>

        {/* Projects Section */}
        <section className="mb-12 print:mb-4">
          <h2 className="text-xl font-bold mb-6 print:text-lg print:mb-2">
            <TranslatedText id="Proyek" en="Projects" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-2">
            <ProjectCard
              title="AndikaSari Catering Management"
              url="https://catering.andikasari.com"
              description={
                <TranslatedText
                  id="Saya mengkhususkan diri dalam membuat aplikasi full-stack menggunakan Laravel, Vue.js dan MySQL, memastikan pengembangan yang lancar dan efisien."
                  en="I specialize in creating full-stack applications using Laravel, Vue.js and MySQL, ensuring seamless and efficient development."
                />
              }
              technologies={["Laravel", "Vue.js", "MySQL"]}
            />

            <ProjectCard
              title="Ruang Digital Elektromedis (Ruddis)"
              description="I serve as a System Analyst, assisting the team in translating application requirements into technical implementation aspects to ensure that the developed applications align with their intended objectives."
              technologies={["System Analysis"]}
            />

            <ProjectCard
              title="WESB Batu"
              url="https://wesb-nandhi.com"
              description="I specialize in creating full-stack applications using Laravel and MySQL, ensuring seamless and efficient development."
              technologies={["Laravel", "MySQL"]}
            />

            <ProjectCard
              title="Lego (Legalisir Online)"
              url="https://lego.ptspkotamalang.net"
              description="Collaborate with the team and build with Codeigniter framework and MySQL for the database."
              technologies={["CodeIgniter", "MySQL"]}
            />

            <ProjectCard
              title="Siginjai Mobile"
              url="https://play.google.com/store/apps/details?id=xyz.poldajambi.anggot"
              description="Collaborate with the team and build with Java Android for front-end in mobile device."
              technologies={["Java", "Android"]}
            />

            <ProjectCard
              title="Kkuljaem-korean Student"
              url="https://student.kkuljaemkorean.com/log"
              description="Collaborate with the team and build with laravel framework for front-end."
              technologies={["Laravel"]}
            />

            <ProjectCard
              title="Doho Medical Record"
              description="Build with Codeigniter framework and MySQL for the database."
              technologies={["CodeIgniter", "MySQL"]}
            />

            {/* Add more ProjectCard components here */}
          </div>
        </section>

        {/* Journal Section */}
        <section>
          <h2 className="text-xl font-bold mb-6 print:text-lg print:mb-2">
            <TranslatedText id="Publikasi Jurnal" en="Journal Publications" />
          </h2>

          <JournalItem
            title={
              <TranslatedText
                id="Analisis dan Perancangan Software Pengukuran Matriks Skala dan Kompleksitas Kode Program"
                en="Analysis and Design of Software for Measuring Scale Matrix and Program Code Complexity"
              />
            }
            journal="Journal Automation Computer Information System"
            date="May 2024"
          />

          <JournalItem
            title="Pemodelan Proses Bisnis Manajemen Proyek Berdasarkan Project Management Body of Knowledge (PMBOK)"
            journal="ILKOMNIKA Journal of Computer Science and Applied Informatics"
            date="April 2022"
          />

          {/* Add more JournalItem components here */}
        </section>
      </main>
    </LanguageProvider>
  )
}

