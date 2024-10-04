import { Stack } from "@mantine/core";

const About = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-full lg:w-1/3 bg-neutral-50">
        <Stack p="xl" gap="xl" id="about">
          <div className="text-center font-bold text-4xl lg:text-6xl">
            About Us
          </div>

          <div className="kaushan text-center font-bold text-4xl text-emerald-500 hover:text-emerald-600 whitespace-nowrap">
            Market? Market!
          </div>

          <p className="text-center">
            This platform serves as a vibrant hub for our community of
            small-scale farmers, connecting local growers with consumers. It
            enables direct access to a diverse selection of fresh, organically
            cultivated fruits and vegetables for which the region is celebrated.
            <br />
            <br />
            As a consumer, your journey begins with exploring these profiles,
            where you can feel the farmers' passion and commitment to
            sustainable agriculture. With a few clicks, you connect directly
            with these local heroes, bypassing traditional middlemen, and
            ensuring fair prices for everyone involved.
          </p>
        </Stack>
      </div>
    </div>
  );
};
export default About;
