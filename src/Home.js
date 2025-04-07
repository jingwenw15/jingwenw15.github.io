import Navbar from './Navbar';

const Typewriter = ({ text }) => {
  return (
    <div className="typing-effect">
      {text}
    </div>
  )
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jingwen Wu</h1>
      </header>
      <main>
        <Navbar />
        <section>
          <div style={{ display: 'flex', flexDirection: 'row', }}>
            <img src={process.env.PUBLIC_URL + 'favicon.png'} style={{ width: '25%', height: '25%', marginRight: '5%' }} />
            <div>
              <Typewriter text={"Hi, I'm Jingwen!"} />
              <p>I recently graduated with a <b>Master's</b> in <b>Computer Science</b> (AI Track) at <b>Stanford University</b> in June 2024.</p>
              <p>I obtained my <b>B.S. with Distinction</b> in <b>Computer Science</b> (AI Track) in June 2023, also from <b>Stanford</b>.</p>
              <p>Connect with me on <a href="https://www.linkedin.com/in/jingwen15">LinkedIn</a> and <a href="https://github.com/jingwenw15">GitHub</a>! </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Work</h2>
            <p><b>Microsoft Corporation</b></p>
            <ul>
              <li>
              <b><i>July 2024 - Present</i>: Software Engineer, Azure Managed Redis</b>. 
              </li>
              <li>
                <b><i>Summer 2023</i>: Software Engineer Intern, Azure NGINXaaS</b>: I designed and implemented a proof-of-concept to use NGINXaaS for Azure as the ingress controller
                (traffic management, reverse proxy, L7 load balancing) for Azure Kubernetes Service, with advanced features such as SSL termination, SSL redirect, and health probing.
              </li>
              <li>
                <b><i>Summer 2022</i>: Software Engineer Intern, Azure Diagnostic Services</b>: I implemented, integrated, and deployed a new source of automated analysis to detect and
                display easy-to-digest performance insights from diagnostic traces of Azure customer applications (e.g., Azure App Services).
              </li>
              <li>
                <b><i>Summer 2021</i>: Explore Intern, Azure Diagnostic Services</b>: I wrote a proof-of-concept
                for an Azure Functions profiler, which provides low-level CPU and memory data to help developers identify bottlenecks and improve the performance of their Azure Functions.
              </li>
            </ul>
            <p><b>Stanford University</b></p>
            <ul>
              <li><b><i>Spring 2024</i>: Course Assistant, CS224N: Natural Language Processing with Deep Learning</b>: No class midterm... I graded assignments, mentored students
              for the final project, held office hours, answered student questions on forum, and helped compile final grades.</li>
              <li><b><i>Winter 2024</i>: Course Assistant, CS124: From Languages to Information</b>: Once again compiled the midterm, but also edited assignments, held office hours, answered 
              student questions on forum, graded assignments, etc.</li>
              <li><b><i>Fall 2023</i>: Course Assistant, CS145: Data Management and Data Systems</b>: Had fun writing the midterm; also held office hours, reviewed lesson plans, graded projects 
              & exams, answered student questions on forum, etc.</li>
              <li><b><i>Summer 2020</i>: Research Assistant, Radiological Sciences Laboratory, KBP Lab</b>: I investigated how computational acoustic models of the skull vary when using 
              different assumed relationships and CT scan parameters, to improve transcranial ultrasound therapies. </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Awards</h2>
          <ul>
            <li><b><a href="https://engineering.stanford.edu/students-academics/academics/frederick-emmons-terman-engineering-scholastic-award/terman-awards">Terman Award</a></b> - Awarded to top 30 graduating undergraduate students of the engineering department.</li>
            <li><b><a href="https://phibetakappa.stanford.edu/elected-students">Phi Beta Kappa</a></b> - Awarded for excellence and breadth of study in undergraduate academics.</li>
            <li><b>Speech and Debate</b> - 2x National Qualifier (2018, 2019); District + Valley Champion - National Extemporaneous Speaking (2019)</li>
          </ul>
        </section>
        <section>
          <h2>Courses</h2>
          <p>TLDR; I took a lot of CS classes, mainly in AI/ML since that was my specialization, but also in math/theory since I love it. I also know some stuff about systems, security, databases, comp bio, and web/mobile dev.</p>
          <ul>
            <li><b>Artificial Intelligence</b> (NLP, CV, DL, RL, Robotics): CS224N, CS231N, CS230, CS221, CS238, CS223A, CS124, CS131</li>
            <li><b>Math + CS Theory</b> (Calculus, Optimization, Discrete Math, Probability, Linear Algebra, Real Analysis, Complexity, Algorithms): MATH51, MATH52, MATH113, MATH115, CS103, CS109, CS154, CS361, CS161, CS205L</li>
            <li><b>Human-Computer Interaction</b> (Mobile/Web Dev, Social Computing): CS193X, CS47, CS278</li>
            <li><b>Systems + Security</b>: CS107, CS110, CS155, CS145</li>
            <li><b>Miscellaneous</b> (Graphics, Comp Bio, EE): CS148, CS274, ENGR40M, CS269I</li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li><b>Languages + Frameworks</b>: Python (NumPy, SciPy, PyTorch), C#, C++, C, Golang, JavaScript/HTML/CSS, Node.js, React, .NET, SQL</li>
            <li><b>Infrastructure</b>: Azure, Kubernetes, Docker, CI/CD</li>
            <li><b>Tools</b>: Git, Linux, Powershell, LaTeX, VS/VSCode</li>
            <li><b>Databases</b>: Firebase, Supabase, MongoDB</li>
            <li><b>Miscellaneous</b>: Public Speaking, Blender, Logic Pro, Canva :-)</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li><b><a href="https://github.com/jingwenw15/retinal-oct">Retinal OCT Classification</a></b> [CS230 Final Project]: Classifies retinal OCT images into 4 categories: CNV, DME, Drusen, and Normal (no disease).</li>
            <li><b><a href="https://github.com/jingwenw15/mancala">Mancala</a></b> [CS238 Final Project]: Plays Mancala using Reinforcement Learning techniques (Monte Carlo Tree Search, Q-Learning, Deep Q-Learning, Advantage Actor Critic).</li>
            <li><b><a href="https://github.com/jingwenw15/budget-utility-optimization">Budget Utility Optimization</a></b> [CS361 Final Project]: Multiobjective optimization of utility and money saved subject to a budget constraint (for college students).</li>
            <li><b><a href="https://github.com/jingwenw15/cadenza">Cadenza</a></b> [CS47 Final Project]: A mobile app as a social space for musicians: add lyric sheets, record song ideas onto each lyric sheet, connect with other musicians through posts.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()} Jingwen Wu. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home;