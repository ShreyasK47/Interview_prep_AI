import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"

export const ContactPage = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container className="max-w-3xl space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Questions, feedback, or collaboration ideas? Drop us a message —
            we’ll get back to you soon.
          </p>
        </div>

        <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-700 shadow-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition min-h-[150px]"
          />

          <div className="text-center">
            <Button
              type="submit"
              className="px-8 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Container>
    </div>
  )
}
