import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

export const ContactPage = () => {
  return (
    <div className="w-full py-12">
      <Container className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          Have questions or suggestions? We’d love to hear from you.
        </p>
        <form className="space-y-4 max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full rounded-md border border-gray-300 px-3 py-2 h-32"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </Container>
    </div>
  )
}
