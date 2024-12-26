// src/components/Portfolio.js
export default function Portfolio() {
    const projects = [
      {
        title: "The Flavor Lab Catering Co.",
        description: "Metro-Detroit's premier catering service.",
        image: "/images/flavor-lab.jpg", // Placeholder, update with real images
        link: "https://www.flavorlabmi.com",
      },
      {
        title: "The Flavor Lab Culinary Collective",
        description: "A commissary kitchen for up-and-coming chefs.",
        image: "/images/culinary-collective.jpg", // Placeholder, update with real images
        link: "https://www.theflavorlab.kitchen",
      },
      {
        title: "The Brownie Gourmet",
        description: "The best brownies you'll ever have.",
        image: "/images/brownie-gourmet.jpg", // Placeholder, update with real images
        link: "https://www.thebrowniegourmet.com",
      },
      {
        title: "Happily Ever Altered",
        description: "Alterations by Sonsia Belfiore, tailoring extraordinaire.",
        image: "/images/happily-ever-altered.jpg", // Placeholder, update with real images
        link: "https://www.happilyeveraltered.com",
      },
    ];
  
    return (
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Portfolio</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Explore some of our featured projects and see the difference Sugarcoded can make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow rounded overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  