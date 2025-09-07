import { Container } from "@/components/container"
import { Sparkles } from "lucide-react"

export const ServicesPage = () => {
  return (
    <div className="w-full py-12">
      <Container className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-muted-foreground text-lg">
          Explore how our AI-driven interview assistant can help you grow and
          succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">AI Mock Interviews</h2>
            <p className="text-muted-foreground">
              Simulate real interviews with AI feedback to refine your answers
              and build confidence.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Personalized Insights</h2>
            <p className="text-muted-foreground">
              Identify strengths and weaknesses with detailed analysis powered
              by AI.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Practice Questions</h2>
            <p className="text-muted-foreground">
              Access a curated bank of interview questions tailored to your role
              and industry.
            </p>
          </div>
        </div>

        <p className="flex items-center text-gray-800 font-semibold">
          Ready to start? Let AI help you ace your next interview <Sparkles className="ml-2" />
        </p>
      </Container>
    </div>
  )
}
