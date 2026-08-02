import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Founder's Story",
  description:
    "The story behind TESDEF — how Tamarakuro Kuroye's passion for the Niger Delta environment and community led to the founding of TESDEF.",
};

export default function FounderPage() {
  return (
    <>
      <section className="bg-forest py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">The founder</p>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Tamarakuro Kuroye
            </h1>
            <p className="mt-4 text-lg text-white/70">Founder & Executive Director, TESDEF</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 flex h-40 w-40 items-center justify-center rounded-full bg-mint text-5xl font-bold text-primary mx-auto">
              TK
            </div>

            <div className="prose prose-lg max-w-none text-ink">
              <p className="lead font-semibold text-forest">
                "I grew up beside the creeks of Gbaramatu Kingdom. As a child, those waterways were alive — full of fish, lined with mangroves, and thick with the sounds of birds I couldn't name. By the time I finished secondary school, the creeks were quieter, the banks thinner, and the people — my people — were struggling in ways they hadn't before."
              </p>

              <p>
                Tamarakuro Kuroye was born and raised in Gbaramatu Kingdom, Delta State, Nigeria — a place of extraordinary natural beauty and, in recent decades, extraordinary environmental pressure. She watched the mangroves retreat, the water quality decline, and the young people of her community leave in search of opportunities the land could no longer provide.
              </p>

              <p>
                After completing a degree in Environmental Studies and a Master's in Community Development, she spent seven years working with international NGOs across sub-Saharan Africa. She learned how development could succeed — and how it so often failed when it arrived without listening. She watched well-funded programmes collapse the moment the implementing organisations departed, leaving communities no better equipped to manage their own futures.
              </p>

              <p>
                In 2015, she came home. She came back not with a programme already designed, but with a commitment to ask, to listen, and to build something that the people of Gbaramatu Kingdom would own and sustain long after any external support ended.
              </p>

              <p>
                TESDEF was registered in that same year with five initial staff, a small office in Warri, and the conviction that lasting change begins at the community level and works outward — not the other way around.
              </p>

              <blockquote className="border-l-4 border-fresh pl-6 italic text-muted">
                "We are not here to rescue anyone. We are here to stand alongside communities and help them build the future they already envision for themselves. The expertise is already in the community. The knowledge is already there. Our job is to support it, resource it, and get out of the way."
              </blockquote>

              <p>
                Over the decade that followed, TESDEF grew from a small community organisation into a recognised foundation with eight active projects, partnerships with government agencies and international organisations, and a team of thirty-five staff and volunteers. But Tamarakuro's approach has never changed: every programme begins with the community, and every success is shared with the community.
              </p>

              <p>
                She speaks at international climate and development forums, mentors young women in leadership, and continues to make regular visits to every community TESDEF serves — not as a VIP visitor, but as a familiar face who eats at community tables and listens more than she speaks.
              </p>

              <p className="font-semibold text-forest">
                "The Niger Delta will heal. The young people of Gbaramatu Kingdom will thrive. I believe this completely. My job — TESDEF's job — is to make sure we do everything in our power to help that future arrive."
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/about" variant="secondary" size="lg">About TESDEF</Button>
              <Button href="/contact" variant="primary" size="lg">Contact the foundation</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
