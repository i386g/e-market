import { Stack } from "@mantine/core";

const About = () => {
  return (
    <section className="p-10 px-40 bg-neutral-50 h-[60vh]">
      <Stack p="xl" gap="xl" id="about">
        <div className="kaushan text-center font-bold text-4xl">
          Market? Market!
        </div>

        <p className="text-center">
          This platform serves as a vibrant hub for our community of small-scale
          farmers, connecting local growers with consumers. It enables direct
          access to a diverse selection of fresh, organically cultivated fruits
          and vegetables for which the region is celebrated.
          <br />
          <br />
          As a consumer, your journey begins with exploring these profiles,
          where you can feel the farmers' passion and commitment to sustainable
          agriculture. With a few clicks, you connect directly with these local
          heroes, bypassing traditional middlemen, and ensuring fair prices for
          everyone involved.
        </p>
      </Stack>
    </section>
  );
};
export default About;
