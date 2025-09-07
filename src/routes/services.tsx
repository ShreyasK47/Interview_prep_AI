import { Container } from "@/components/container"
import { Sparkles, Brain, ClipboardCheck, BarChart3 } from "lucide-react"

export const ServicesPage = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <Container className="space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to practice smarter, grow faster, and walk into
            your interviews with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition group">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-4 group-hover:bg-gray-900 transition">
              <Brain className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              AI Mock Interviews
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Experience realistic mock interviews that adapt to your responses.
              Get instant AI-driven feedback on tone, clarity, and structure to
              fine-tune your answers.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition group">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-4 group-hover:bg-gray-900 transition">
              <BarChart3 className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Personalized Insights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Understand your unique strengths and improvement areas with
              detailed analytics. Our AI gives you actionable tips tailored to
              your goals and career path.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition group">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-4 group-hover:bg-gray-900 transition">
              <ClipboardCheck className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Practice Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Access a dynamic library of interview questions curated for
              different industries and roles — from technical coding rounds to
              behavioral scenarios.
            </p>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center">
          <p className="inline-flex items-center text-lg font-semibold text-gray-800">
            Ready to get started? Let AI guide you to interview success
            <Sparkles className="ml-2 w-5 h-5 text-yellow-500" />
          </p>
        </div>
      </Container>
    </div>
  )
}
