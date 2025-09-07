import { Container } from "@/components/container"

export const AboutPage = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <Container className="max-w-4xl space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We’re on a mission to revolutionize interview preparation with
            AI-powered tools that make practice smarter, personalized, and
            effective for everyone.
          </p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            It all started with a simple idea — interviews should be about
            showing your true potential, not stumbling over unexpected
            questions. We built this platform to give candidates a safe space to
            practice, learn, and grow using the latest in AI technology. Today,
            thousands of learners rely on our tools to sharpen their skills and
            land opportunities that change their lives.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-muted-foreground text-sm">
              Empower every job seeker with confidence and clarity by providing
              AI-driven feedback and realistic interview simulations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-muted-foreground text-sm">
              A world where interviews are fair, accessible, and focused on true
              talent — not nerves or guesswork.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
            <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
              <li>Accessibility for all learners</li>
              <li>Innovation through AI</li>
              <li>Confidence built on practice</li>
              <li>Empathy for every candidate’s journey</li>
            </ul>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Together, let’s change how the world prepares for interviews.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you’re a fresh graduate taking your first step or a seasoned
            professional aiming higher, our platform is here to support your
            journey — every step of the way.
          </p>
        </div>
      </Container>
    </div>
  )
}
