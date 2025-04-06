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
          <Navbar/>
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
                <li>Software Engineer [July 2024 - Current] - Developer Division, Azure Managed Redis</li>
                <li>Software Engineer Intern [Summer 2023] - Developer Division, Azure NGINX</li>
                <li>Software Engineer Intern [Summer 2022] - Developer Division, Azure Diagnostic Services</li>
                <li>Explore Intern [Summer 2021] - Developer Division, Azure Diagnostic Services</li>
              </ul>
              <p><b>Stanford University</b></p>
              <ul>
                <li>Course Assistant [Spring 2024] - CS224N: Natural Language Processing with Deep Learning</li>
                <li>Course Assistant [Winter 2024] - CS124: From Languages to Information</li>
                <li>Course Assistant [Fall 2023] - CS145: Data Management and Data Systems</li>
                <li>Research Assistant [Summer 2020] - Radiological Sciences Laboratory, KBP Lab</li>
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