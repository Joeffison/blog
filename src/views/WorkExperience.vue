<template>
  <article id="view-work-experience">
    <section class="app-content-container">
      <h1>
        Work Experience
      </h1>
    </section>

    <section id="momox" class="app-content-container">
      <h2>Momox</h2>

      <p>
        To those who ever talked to me on something more relevant than the weather,
        It was not a surprise that I would end up at a company selling books.
        Just working surrounded by hundreads of books makes me code much more enthusiastically
        (I hope they set more book shelves in our new office).
        My coming to the company was the apice of a long process, which I will have to describe in a
        post, but I can't deny it has been quite fun to work
        at <a href="https://www.momox.de" target="_blank">Momox</a>.
      </p>

      <section>
        <h3>My Scope (Software Engineer):</h3>
        <ul>
          <li>
            Maintain the legacy systems
            (Python 2 and Django) for our Media Warehouses.
          </li>
          <li>
            Build the new Warehouse systems (VueJs, Python 3, Flask, MongoDB)
            for our two markets (media and fashion).
          </li>
          <li>
            Log events with Statsd and use this data to create monoitoring dashboards and reports
            on Grafana.
          </li>
          <li>
            [Miscellaneous] These technologies and tools are also involved in my work:
            SQL, OpenShift, RabbitMQ, Docker, Pipenv, git and Jira.
          </li>
        </ul>
      </section>
    </section>

    <section id="freela" class="app-content-container">
      <h2>Freelancing</h2>

      <p>
        Nearing the end of my contract with my previous company,
        I was already decided it was time to move back to Germany.
        At the end of my contract, closing 3 years at Virtus,
        I fly to Berlin with nothing certain in terms of job,
        but I was positive I could find the perfect match for me.
        It was a long process applying for jobs and going through interviews.
        I don't think I have ever missed to be at the office as badly as at that time.
        So I started freelancing in short projects while looking for a job in Berlin.
      </p>
    </section>

    <section id="virtus">
      <h2 class="app-content-container">Virtus</h2>

      <section class="app-content-container" id="virtus-intro">
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

      <background-image :image-src="'static/images/large/background/team-virtus.jpg'">
      </background-image>

      <section class="app-content-container" id="virtus-position">
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

      <div class="app-content-container row">
        <div class="col-md-9">
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
        </div>
        <div class="col-md-3">
          <img src="static/images/large/polaroids/team-hp.png" alt="Team HP 1">
          <img src="static/images/large/polaroids/team-hp2.png" alt="Team HP 2">
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage'

export default {
  name: 'WorkExperience',
  components: { BackgroundImage }
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
