export interface Tech {
  name: string,
  description: string,
  icon: string
}

export interface TechType {
  techs: Tech[],
  type: string
}

export const techsWithImages: TechType[] = [
  {
    type: "BACKEND SERVICES",
    techs: [
      {
        name: "Spring Boot",
        description: `Spring Boot is an open source, microservice-based Java web framework. The  Spring Boot framework creates a fully production-ready environment that is completely configurable using its prebuilt code within its codebase. The microservice architecture provides developers with a fully enclosed application, including embedded application servers.`,
        icon: "../../../assets/tech-images/sb.png"
      },
      {
        name: "PostgreSQL",
        icon: "../../../assets/tech-images/psql.png",
        description: `PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. `
      }

    ]
  },
  {
    type: "FRONTEND SERVICES",
    techs: [
      {
        name: "Angular 13",
        description: `Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner. `,
        icon: "../../../assets/tech-images/ang.png"
      },
      {
        name: "Bootstrap",
        description: `Bootstrap is a giant collection of handy, reusable bits of code written in HTML, CSS, and JavaScript. It’s also a frontend development framework that enables developers and designers to quickly build fully responsive websites.`,
        icon: "../../../assets/tech-images/bootstrap.png"
      },
      {
        name: "Typescript",
        description: `TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft. TypeScript is both a language and a set of tools. TypeScript is a typed superset of JavaScript compiled to JavaScript. In other words, TypeScript is JavaScript plus some additional features.`,
        icon: "../../../assets/tech-images/ts.png"
      },
      {
        name: "Firebase Storage",
        description: `Firebase Cloud Storage is a service that developers can use to store and download files generated directly by clients.`,
        icon: "../../../assets/tech-images/fb.png"
      }
    ]
  },
  {
    type: "HOSTING PLATFORMS",
    techs: [
      {
        name: "Heroku",
        icon: "../../../assets/tech-images/heroku.png",
        description: `Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.`
      },
      {
        name: "Netlify",
        icon: "../../../assets/tech-images/netlify.png",
        description: `Netlify unites an entire ecosystem of modern tools and services into a single, simple workflow for building high performance sites and apps.`
      }
    ]
  }
];
