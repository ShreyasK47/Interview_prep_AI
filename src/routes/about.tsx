import { Container } from "@/components/container"

export const AboutPage = () => {
  return (
    <div className="w-full py-12">
      <Container className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-muted-foreground text-lg">
          We’re passionate about helping people ace interviews using AI-powered
          tools. Our mission is to make interview preparation smarter,
          personalized, and more effective for everyone.
        </p>
        <p className="text-muted-foreground">
          From fresh graduates to experienced professionals, our platform is
          designed to give every candidate the confidence to succeed in
          interviews.
        </p>
      </Container>
    </div>
  )
}
