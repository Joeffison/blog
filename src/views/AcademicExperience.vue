<template>
  <article id="view-academic-experience">
    <section class="app-content-container">
      <h1>
        {{$t('Academic Experience')}}
      </h1>
    </section>

    <section id="tud" class="app-content-container">
      <h2>
        Exchange in Germany<br />
        TUD - Technische Universität Dresden<br />
        Wintersemester/2013 - Sommersemester/2014
      </h2>
      <p>
        I lived in Dresden (Germany) for 2 semesters, as part of my research project on Smart Grids.
        <br>I joined the Distributed Systems Engineering Master Program and my supervisors were:
        Dr.-Ing. Andrey Elísio Monteiro Brito, Dr.-Ing. Elke Franz and PD Dr Dr Horst Lazarek.
      </p>

      <section>
        <h3>Presentations:</h3>
        <ul>
          <li>
            <a href="http://www.inf.tu-dresden.de/content/institutes/sya/dud/lectures/2014sommersemester/HSTruEGrid/presentation%20may%2015th_joeffison.pdf"
               target="_blank">
              Electric Intelligence: Concepts and features
            </a>
          </li>
        </ul>
      </section>
    </section>

    <section id="ufcg" class="app-content-container">
      <section id="ufcg-intro">
        <h2>
          Bachelor in Computer Science<br />
          UFCG - Universidade Federal de Campina Grande<br />
          mar/2010 - apr/2015
        </h2>
        <p>
          UFCG is a public state university.
          Since 2006, our Bachelor in Computer Science has received the highest quality score
          granted by
          "<a href="http://www.computacao.ufcg.edu.br/departamento/informes/cienciadacomputacao5estrelas"
             target="_blank">Editora Abril</a>". I finished the Bachelor program within 8 semesters
          and my extracurricular activities include joining 3 research labs
          (SPLab, LSD and the Security & Privacy Lab in Dresden), publishing a paper,
          tutoring 2 disciplines and attending/organizing a few tech conferences:
        </p>
      </section>
      <section class="row row-eq-height">
        <div class="col-xl-8">
          <ul>
            <li>
              01/2012 - 06/2013 Tutor for "Theory of Computation" classes
            </li>
            <li>
              06/2011 - 12/2012 Tutor for "Discrete Mathematics" classes
            </li>
            <li>
              [<a href="static/pdf/sast_2012.pdf">Paper</a> +
              <a href="http://splab.computacao.ufcg.edu.br/publications/journal-and-conference-papers" target="_blank">Presentation</a>]
              ANDRADE, Joeffison S.
              Automating Test Case Creation and Execution for Embedded Real-time Systems.
              6th Brazilian Workshop on Systematic and Automated Software Testing -
              Sociedade Brasileira de Computação. Sep 23, 2012. Pages 53-62 in the conference annals
            </li>
            <li>
              3 Silver Medals on the Programming Olympiad, granted by the state of Paraíba, Brazil
            </li>
            <li>
              Organization:
              Flisol (Festival Latinoamericano de Instalação de Software Livre) 2015, Campina Grande.
              April, 2015
            </li>
            <li>
              Organization:
              TruEGrid - Trustworthyness and Energy-Efficient Smart Grids 2012, Campina Grande, UFCG.
              June, 2013
            </li>
            <li>
              Software Freedom Day: 2009, 2010, 2011, 2012, 2014, 2015
            </li>
            <li>
              Flisol: 2010, 2011, 2012, 2013, 2015
            </li>
            <li>
              TruEGrid - Trustworthyness and Energy-Efficient Smart Grids 2013, Campina Grande, UFCG.
              June, 2013
            </li>
            <li>
              6th Brazilian Workshop on Systematic and Automated Software Testing: 2012
            </li>
          </ul>
        </div>
        <div class="col-xl-4">
          <img id="img-old-flisol-2015" src="static/images/large/background/team_flisol_2015.jpg">
        </div>
      </section>

      <section>
        <h3>Citations of my work:</h3>
        <ul>
          <li>
            <a href="http://dspace.sti.ufcg.edu.br:8080/jspui/bitstream/riufcg/1367/1/PEDRO%20Y%C3%93SSIS%20SILVA%20BARBOSA%20-%20DISSERTA%C3%87%C3%83O%20PPGCC%202014..pdf"
               target="_blank">
              Preservando a Privacidade em Smart Grids Através de Adição de Ruído.
              Barbosa, P. Y. S. February, 2014. Pages 53, 74-76.
            </a>
          </li>
        </ul>
      </section>
    </section>

    <section id="lsd" class="app-content-container">
      <h2>
        Research: Distributed Systems Engineering<br />
        LSD - Laboratório de Sistemas Distribuídos<br />
        dec/2012 - sep/2013
      </h2>
      <p>
        <a href="https://www.lsd.ufcg.edu.br/#/" target="_blank">
          LSD
        </a>
        (Distributed Systems Laboratory) is most proud of the creation of the
        <a href="http://ourgrid.lsd.ufcg.edu.br/overview.php" target="_blank">
          OurGrid</a>.
        My project was on Smart Grids and my supervisor was Dr.-Ing. Andrey Elísio Monteiro Brito
        (graduated at Technische Universität Dresden).
        He introduced me to Distributed Systems,
        working on cloud services and the concept of Smart Grids.
        We built an open source tool to create simulated data for our research,
        which was continued on the project at TU Dresden.
      </p>
    </section>

    <section class="app-content-container">
      <h2>
        Research: Software Testing Engineering<br />
        SPLab - Software Practices<br />
        jun/2011 - dec/2012
      </h2>

      <p>
        Software Practices Laboratory is a lab for Software Engineering projects at UFCG.
        I worked on Software Testing Engineering with PhD Patricia Duarte de Lima Machado
        (graduated at University of Edinburgh, UK) and
        Dr. Wilkerson de Lucena Andrade (graduated at Universidade Federal de Campina Grande).
        Our work led to the creation of the
        <a href="https://sites.google.com/site/realtimepco/" target="_blank">RealtimePCO</a>,
        tool to create tests to assure a software implementation matches its specification
        (including time constraints).
      </p>
    </section>
  </article>
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage'

export default {
  name: 'AcademicExperience',
  components: { BackgroundImage }
}
</script>

<style lang="scss" scoped>
#view-academic-experience {
  p, ul {
    font-size: 1.15em;
    margin-bottom: 0;
    text-align: -moz-left;
    text-align: -webkit-left;
    text-align: left;
  }

  section li {
    list-style: circle;

    &:after {
      content: ";";
      margin-left: -0.5ch;
    }

    &:last-child:after {
      content: ".";
    }
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

  @media only screen and (max-width: 1199px) {
    #img-old-flisol-2015 {
      max-width: 400px;
      width: 100%;
    }
  }
}
</style>
