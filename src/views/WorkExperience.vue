<template>
  <article id="view-work-experience" class="app-content-container">
    <h1>
      Work Experience
    </h1>

    <section id="momox">
      <h2>Momox</h2>

      <p>
        Software Enginner at <a href="https://www.momox.de" target="_blank">Momox</a>.
        Tecnologies: Python (Django and Flask), SQL, MongoDB, VueJs, OpenShift, RabbitMQ,
        Grafana, git, Jira, MacOS.
      </p>
    </section>

    <section id="freela">
      <h2>Freelancing</h2>

      <p>
        Freelancing small projects while looking for a job in Berlin.
      </p>
    </section>

    <section id="virtus">
      <h2>Virtus</h2>

      <section id="virtus-intro">
        <p>
          Virtus is a project-based Brazilian company with (at the time) circa 200 employees
          (mostly software developers and designers) providing products to
          some of the world's top IT companies.
        </p>
        <p>
          I worked in two very different projects/realities:
          Asus Brazil (2 years) and HP US/Brazil (1 year),
          so I have the experience to talk to important stakeholders
          (such as John Landry and Cael Filho).
        </p>
      </section>

      <section id="virtus-position">
        <h3>Progress in the company:</h3>
        <p>
          I started as a Junior Software Engineer (in January 2018),
          4 months later I was promoted to Intermediate Software Engineer (due to my tech skills),
          1 year after that I was promoted to Senior Software Engineer
          (owing to my people and management skills).
        </p>
        <p>
          My team in the Asus Project was Web Development focused and the services provided
          (RESTful API) by our system was also consumed by ASUS games/apps to push new campaigns.
          Technologies: Python/Django, AngularJs, NGINX, SQL, git, Linux, Jenkins, Tuleap.
        </p>
        <p>
          Our HP Project was Data Science focused and my team was responsible for
          the data analysis/visualization.
          Technologies: R, Spark, Python, NoSQL, Tableau and Databricks.
        </p>
      </section>

      <section>
        <h3>Key Responsibilities: </h3>
        <ul>
          <li>
            Lead a team (of 5 to 9) engineers with age ranging from 22 to 50,
            including women, European teammates and master students;
          </li>
          <li>
            Deliver Results to clients via Skype calls;
          </li>
          <li>
            Scrum Master tasks (Sprint Planning, Sprint Review, Sprint Retrospective, etc);
          </li>
          <li>
            Training of on-site and remote interns;
          </li>
          <li>
            Code Review (on our Git repository and the related tests on Jenkins);
          </li>
          <li>
            Be flexible in terms of development tasks:
            code on Backend, Frontend or ETL depending on demand and allocated resources;
          </li>
          <li>
            Deploy on test, stage and production servers (AWS)
            and manage Databricks clusters (AWS resources);
          </li>
          <li>
            Planning of working hours and holidays of the team;
          </li>
          <li>
            Present Databricks on HP's Spark Day 2017 at HP office.
          </li>
        </ul>
      </section>

      <section>
        <h3>Presentations, Publications and Awards:</h3>
        <ul>
          <li>
            [Presentation] Databricks: Real Use Cases. HP Spark Day, Porto Alegre, September 2017.
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'WorkExperience'
}
</script>

<style lang="scss" scoped>
#view-work-experience {
  p, ul {
    font-size: 1.15em;
    margin-bottom: 0;
    text-align: -moz-left;
    text-align: -webkit-left;
    text-align: justify;
  }

  a {
    text-decoration: none;
  }

  section li {
    list-style: circle;
  }

  > section {
    margin-top: 3rem;

    section {
      margin-top: 1.5rem;
    }
  }

  h3 {
    text-align: -moz-left;
    text-align: -webkit-left;
    text-align: left;
  }
}
</style>
