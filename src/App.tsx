import "./App.css";

import { Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import { FARMS } from "./common";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Stack gap={0}>
        <div className="h-screen bg-emerald-200 relative hero-bg">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl z-50">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-center font-bold text-4xl lg:text-7xl text-white lg:whitespace-nowrap shadow-sm">
                Discover Our Beautiful Farms
              </div>
              <div className="text-center font-medium text-xl text-white">
                Experience nature's bounty at our three unique farms. Fresh
                produce, stunning landscapes, and unforgettable experiences
                await you.
              </div>
              <div className="flex flex-row gap-4">
                <Link to="/#farms">
                  <Button
                    color="#000000"
                    radius="md"
                    size="md"
                    className="text-emerald-500 text-lg font-semibold hover:text-emerald-600"
                  >
                    View Farms
                  </Button>
                </Link>
                <Link to="/#about">
                  <Button variant="light" color="white" radius="md" size="md">
                    About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Stack p="xl" gap="xl" id="farms">
          <div className="text-center font-bold text-4xl lg:text-6xl">
            Our Farms
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full ">
            {FARMS.map((farm, index) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
                <Card.Section>
                  <Image className="object-cover h-72" src={farm.farm_image} />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{farm.farm_name}</Text>
                </Group>
                <Stack>
                  <Text size="sm" c="dimmed" className="line-clamp-3">
                    {farm.farm_details.farm_story}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {farm.farm_details.farm_seasonal_products
                      .map((item) => item.product_name)
                      .join(", ")}
                  </Text>
                </Stack>
                <Button
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => navigate(`/profile/${farm.id}`)}
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </Stack>

        <About />
      </Stack>
    </>
  );
}

export default App;
