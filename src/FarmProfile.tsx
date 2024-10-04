import { Card, Group, Image, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";
import ContactImage from "./assets/Contact";
import { FARMS } from "./common";

const FarmProfile = () => {
  const { pathname } = useLocation();
  const farmId = pathname.split("/")[2];
  const farmDetails = FARMS.find((farm) => farm.id === farmId);

  const style = {
    backgroundImage: `url(${farmDetails?.farm_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  if (!farmDetails) {
    return <div>Farm not found</div>;
  }

  return (
    <>
      <div style={style} className="h-[calc(100vh-82px)] relative">
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl z-50">
          <h1 className="text-4xl lg:text-7xl text-white font-semibold whitespace-nowrap">
            {farmDetails.farm_name}
          </h1>
        </div>
      </div>
      <section className="p-10 px-6">
        <div className="text-center font-bold text-4xl lg:text-6xl text-green-800">
          Our Story
        </div>
        <div className="flex items-center p-10 gap-10">
          <p className="flex-1 p-4 whitespace-break-spaces">
            {farmDetails.farm_details.farm_story}
          </p>
        </div>
      </section>
      <section className="p-10 px-6 bg-neutral-50">
        <div className="flex items-start p-10 gap-10 h-full">
          <div className="flex flex-col h-full">
            <div className="font-bold text-4xl text-green-800 mb-6">
              Farming Methods and Techniques
            </div>
            <p className="flex-1 p-0 whitespace-break-spaces text-left">
              {farmDetails.farm_details.farm_methods}
            </p>
          </div>

          <img
            src={farmDetails.farm_image}
            alt="farm-image"
            className="rounded-lg w-[500px] h-full object-cover my-auto"
          />
        </div>
      </section>
      <section className="p-10 px-6">
        <div className="text-center font-bold text-4xl lg:text-6xl text-green-800">
          Our Products
        </div>
        <div className="flex items-center p-10 gap-10">
          <p className="flex-1 p-4 text-center">
            {farmDetails.farm_details.farm_seasonal_description}
          </p>
        </div>
        <div className="flex items-center justify-center p-10 gap-10 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full px-40 py-10">
            {farmDetails.farm_details.farm_seasonal_products.map((item) => (
              <Card shadow="sm" padding="lg" radius="lg" withBorder>
                <Card.Section>
                  <Image
                    className="object-cover h-72"
                    src={item.product_image}
                  />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{item.product_name}</Text>
                </Group>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="p-10 px-40 bg-neutral-50">
        <div className="flex items-start p-10 gap-20 h-full ">
          <div className="w-[500px] h-[500px]">
            <ContactImage />
          </div>

          <div className="flex flex-col h-full pt-20 pl-20">
            <div className="font-bold text-4xl text-green-800 mb-10">
              Contact Us
            </div>
            <p className="flex-1 p-0 whitespace-break-spaces">
              {farmDetails.farm_location}
            </p>
            <p className="flex-1 p-0 whitespace-break-spaces">
              {farmDetails.farm_email}
            </p>
            <p className="flex-1 p-0 whitespace-btchreak-spaces">
              {farmDetails.farm_phone}
            </p>
            <p className="flex-1 p-0 whitespace-break-spaces">
              {farmDetails.farm_social_media}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FarmProfile;
