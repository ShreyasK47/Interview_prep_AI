import { Sparkles } from "lucide-react"
import Marquee from "react-fast-marquee"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { MarqueImg } from "@/components/marquee-img"
import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold">
              – Rethink how you
            </span>
            <br />
            win interviews and stand out
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Your personal interview coach, powered by AI. Practice with
            real-time feedback, simulate tricky questions, and sharpen the
            skills recruiters actually look for. More confidence. Better
            outcomes.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            300k+
            <span className="block text-xl text-muted-foreground font-normal">
              Job offers unlocked
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.5M+
            <span className="block text-xl text-muted-foreground font-normal">
              Mock interviews completed
            </span>
          </p>
        </div>

        {/* image section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="assets/img/hero.jpg"
            alt="Interview practice with AI"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Interview Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">
              Meet your AI mentor
            </h2>
            <p className="text-sm text-neutral-500">
              Get tailored feedback, question insights, and strategies designed
              to match your role and industry. Practice smarter, not harder.
            </p>

            <Button className="mt-3">
              Generate <Sparkles />
            </Button>
          </div>
        </div>
      </Container>

      {/* marquee section */}
      <div className="w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with AI-powered insights and tailored practice
          for every interview.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt="AI interview preparation"
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Step into your next interview prepared and confident. From coding
              rounds to behavioral questions, our AI adapts to your needs and
              helps you shine when it matters most.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
