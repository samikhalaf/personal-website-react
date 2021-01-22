import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="about-container">
      <div className="brief">
        <h3>Sobre mí</h3>
        <div className="alert">
          <p>
            🚨 Ahora mismo ando buscando trabajo de Desarrollador Web Fullstack
            Junior, tanto de front como de backend, me encantan ambos.
          </p>
          <p>
            Si estás contratando, échale un ojo a alguno de mis repos para
            hacerte una idea de como programo 🔥.
          </p>
        </div>
        <p>
          Soy entusiasta de la tecnología y el desarrollo de software. Tras
          varios años trabajando de gestor cultural y productor audiovisual
          freelance, he decidido dar el salto y pasar del hobby a lo profesional
          ⚡️.
        </p>
        <p>
          Recientemente he terminado un Bootcamp de Desarrollo Web Full Stack en
          Upgrade Hub, formación que complemento con certificaciones en
          seguridad y sistemas. Tengo ganas de continuar desarrollandome como
          profesional en un entorno de trabajo real.
        </p>
        <p>
          Tengo facilidad para trabajar en equipo, y aportar soluciones
          creativas a los contratiempos que se ocasionan.
        </p>
      </div>

      <div className="tech">
        <h3>Tecnologías que manejo</h3>

        <h4>IDE's y herramientas de colaboración</h4>
        <div className="ide">
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-image"
              alt="Visual Studio Code"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
            />
          </a>

          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Git"
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="GitHub"
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
            />
          </a>
        </div>

        <h4>Lenguajes de programación</h4>
        <div className="languages">
          <a
            href="https://developer.mozilla.org/es/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-image"
              alt="HTML5"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
            />
          </a>

          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-image"
              alt="CSS3"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            />
          </a>

          <a href="https://www.sass-lang.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Sass"
              src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/057/full/scsslogo.png"
            />
          </a>

          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-image"
              alt="JavaScript"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-image"
              alt="TypeScript"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            />
          </a>

          <a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Node.js"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            />
          </a>

          <a href="https://www.php.net/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="PHP"
              src="https://pngimg.com/uploads/php/php_PNG7.png"
            />
          </a>
        </div>

        <h4>Frameworks</h4>
        <div className="frameworks">
          <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="React"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
          </a>

          <a href="https://angular.io/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Angular"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            />
          </a>

          <a href="https://symfony.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Symfony"
              src="https://avatars3.githubusercontent.com/u/143937?v=4"
            />
          </a>

          <a href="https://expressjs.com/es/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Express"
              src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
            />
          </a>
        </div>

        <h4>Bases de datos</h4>
        <div className="databases">
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="MySQL"
              src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-securing-mysql-and-connecting-wso-servers-yasassri-blog-18.png"
            />
          </a>

          <a href="https://www.mongodb.com/es" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="MongoDB"
              src="https://www.todavianose.com/wp-content/uploads/2018/04/mongo-db-design.png"
            />
          </a>
        </div>

        <h4>Otras tecnologías guays</h4>
        <div className="others">
          <a href="https://httpd.apache.org/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Apache"
              src="https://manualesit.com/wp-content/uploads/apache2-660x330.png"
            />
          </a>

          <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Nginx"
              src="https://linuxtips.us/wp-content/uploads/nginx-logo.png"
            />
          </a>

          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Docker"
              src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png"
            />
          </a>

          <a href="https://www.fsf.org/es" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Linux"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"
            />
          </a>

          <a href="https://wordpress.org/" target="_blank" rel="noreferrer">
            <img
              className="tech-image"
              alt="Wordpress"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/600px-WordPress_blue_logo.svg.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
