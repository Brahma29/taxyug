"use client";

import Icons from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

//Assets
import heroImage from "@/assets/images/hero_image.png";
import ourMission from "@/assets/images/our_mission.png";
import avatar from "@/assets/images/avatar.png";

//Components
import { NewsLetter } from "@/components/NewsLetter";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative">
        <Image
          src={heroImage}
          alt="taxyug - accounting and finance solutions"
          className="absolute top-0 left-0 h-full object-cover -z-10"
        />

        <div className="bg-black bg-opacity-70 md:px-10">
          <div className="max-w-7xl mx-auto w-full md:py-28 py-10 md:px-0 px-6 h-full top-0 left-0 flex items-center">
            <div className="text-center mx-auto md:w-2/3">
              <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
                GST and Finance Solutions for your company
              </h1>

              <p className="text-white my-7 md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                unde magnam excepturi at exercitationem dolor aut asperiores
                quasi a quia?
              </p>

              <Link
                href="/"
                className="px-8 py-2 border-2 border-primary text-lg text-white font-medium bg-primary hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:px-10 px-6 max-w-7xl mx-auto flex justify-end">
        <div className="grid md:grid-cols-3 md:gap-0 gap-4 md:w-[80%]">
          <ServiceCard
            icon={<Icons.Accounting />}
            title="Accounting Solutions"
          />

          <ServiceCard
            icon={<Icons.Taxation />}
            title="Direct & Indirect Taxation"
          />

          <ServiceCard
            icon={<Icons.Audit />}
            title="Audit and Consultancy Service"
          />

          <div />

          <ServiceCard
            icon={<Icons.Secreterial />}
            title="Secreterial Services"
          />

          <ServiceCard icon={<Icons.Listing />} title="Listing Matters" />

          <ServiceCard icon={<Icons.OtherMatters />} title="Other Matters" />

          <ServiceCard icon={<Icons.OtherMatters />} title="Other Matters" />

          <div />
          <div className="md:absolute left-10 md:w-[90%] top-1/2 md:-translate-y-1/2 p-10 bg-primary bg-opacity-20 -z-10 md:h-1/2 flex items-center">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold">
                Jessica W. Louie is the owner of JWL Accounting
              </h2>

              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                atque quod asperiores
              </p>

              <Link href="/">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-primary">
                    ALL SERVICES
                  </p>
                  <Icons.RightArrow />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 max-w-7xl mx-auto">
        <div className="flex items-stretch">
          <div className="bg-black p-16 text-white md:w-1/2 md:gap-0 gap-10 flex flex-col justify-between">
            <h3 className="text-4xl font-bold text-primary">Our Mission</h3>

            <p className="opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              accusantium consequuntur eum tempora, deleniti iusto nihil fugit
              in recusandae! Ut pariatur itaque minima omnis, suscipit quos,
              fugiat in fuga dolorem, aliquam id cumque deleniti error nisi
              molestiae. Ducimus, cupiditate temporibus!
            </p>

            <p className="opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem fugiat ab praesentium consequatur tempora magnam harum
              neque veniam, laboriosam modi.
            </p>

            <p className="opacity-70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              eaque ad odit maxime alias rerum aspernatur voluptatibus, non
              natus error corporis? Voluptas magnam ut, omnis, dolorum optio
              iure numquam consectetur officia neque laudantium ab fugiat animi
              totam, odio sed autem?
            </p>
          </div>
          <div className="relative w-1/2 md:block hidden">
            <div className="bg-gradient-to-r from-black to-transparent absolute h-full w-full" />
            <Image src={ourMission} alt="our_mission" className="h-full" />
          </div>
        </div>
      </section>

      <section className="md:px-10 py-20 px-6 max-w-7xl mx-auto">
        <div>
          <h3 className="text-center text-4xl font-bold text-primary">
            Why choose us?
          </h3>

          <div className="flex justify-around gap-20 mt-20 md:flex-nowrap flex-wrap">
            <div className="flex flex-col gap-3 items-center text-center">
              <Icons.HandShake />

              <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                eum?
              </p>

              <p className="text-7xl font-extrabold opacity-20 text-primary">
                01.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center text-center">
              <Icons.HandShake />

              <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                eum?
              </p>

              <p className="text-7xl font-extrabold opacity-20 text-primary">
                02.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center text-center">
              <Icons.HandShake />

              <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                eum?
              </p>

              <p className="text-7xl font-extrabold opacity-20 text-primary">
                03.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 py-20 px-6 max-w-7xl mx-auto">
        <div>
          <div className="mx-auto w-10/12">
            <h3 className="text-center text-4xl font-bold mb-4 text-primary">
              Testimonial
            </h3>
            <p className="text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              in asperiores accusamus iure! Magnam ex sapiente laboriosam
              aspernatur aperiam. Doloremque odit hic quod possimus vitae?
            </p>
          </div>

          <div className="grid md:grid-cols-3 mt-20">
            <div className="p-6 flex flex-col justify-between gap-4 border-b md:border-r border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 border-b border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 border-b md:border-l border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 border-b md:border-r border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 border-b border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 border-b md:border-l border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 md:border-r md:border-b-0 border-b border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 md:border-r md:border-b-0 border-b border-primary">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 border-b border-primary md:border-0">
              <p className="text-lg">
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur fugit harum culpa quisquam? Asperiores dolore
                in nihil”
              </p>
              <div className="flex items-center gap-4">
                <Image src={avatar} alt="testimonial_1" className="w-10 h-10" />
                <p className="text-xl font-medium">Ramesh Lakhani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />

      <Footer />
    </main>
  );
}
const ServiceCard = ({ icon, title }) => (
  <div className="p-12 h-64 flex flex-col justify-around border border-primary text-primary bg-white">
    {icon}

    <p className="text-xl font-semibold mt-12">{title}</p>
  </div>
);
