import { IconSearch } from "@tabler/icons-react";

import "./App.css";

import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

function App() {
  return (
    <>
      <Stack>
        <Group p="xs" justify="space-between">
          <Group>
            <Stack gap={0} align="center">
              <div className="kaushan text-left font-medium text-4xl text-emerald-600">
                Market? Market!
              </div>
            </Stack>
            <TextInput
              placeholder="Search here..."
              leftSection={<IconSearch size={20} />}
              radius="md"
              size="md"
            />
          </Group>
          <Group>
            <Button variant="subtle">Home</Button>
            <Button variant="subtle">Farms</Button>
            <Button variant="subtle">About</Button>
            <Button variant="subtle">Contact</Button>
          </Group>
        </Group>

        <div className="h-screen bg-emerald-200 relative">
          <Image
            className="object-cover h-screen backdrop-blur-xl"
            src="/doctor-tinieblas-twX-cWl-8OM-unsplash.jpg"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm p-8 rounded-xl bg-white/20 ">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-center font-bold text-4xl text-white">
                Discover Our Beautiful Farms
              </div>
              <div className="text-center font-medium text-xl text-white">
                Experience nature's bounty at our three unique farms. Fresh
                produce, stunning landscapes, and unforgettable experiences
                await you.
              </div>
              <div className="flex flex-row gap-4">
                <Button variant="white" radius="md" size="md">
                  View Farms
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Stack p="xl" gap="xl">
          <div className="text-center font-bold text-4xl">Our Farms</div>
          <Grid p="xl" gutter="xl">
            <Grid.Col span={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    className="object-cover h-72"
                    src="/johannes-hofmann-4EhPFRHbNjU-unsplash.jpg"
                  />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Farm 1</Text>
                  <Badge color="pink">Featured</Badge>
                </Group>
                <Stack>
                  <Text size="sm" c="dimmed">
                    Story and methods goes here.
                  </Text>
                  <Text size="sm" c="dimmed">
                    Products goes here.
                  </Text>
                </Stack>
                <Button fullWidth mt="md" radius="md">
                  Visit Shop
                </Button>
              </Card>
            </Grid.Col>

            <Grid.Col span={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    className="object-cover h-72"
                    src="/marcus-wallis-OSkyHq4GpZA-unsplash.jpg"
                  />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Farm 2</Text>
                  <Badge color="pink">On Sale</Badge>
                </Group>
                <Stack>
                  <Text size="sm" c="dimmed">
                    Story and methods goes here.
                  </Text>
                  <Text size="sm" c="dimmed">
                    Products goes here.
                  </Text>
                </Stack>
                <Button fullWidth mt="md" radius="md">
                  Visit Shop
                </Button>
              </Card>
            </Grid.Col>

            <Grid.Col span={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    className="object-cover h-72"
                    src="/thomas-le-pRJhn4MbsMM-unsplash.jpg"
                  />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Farm 3</Text>
                  <Badge color="pink">Newly Opened</Badge>
                </Group>
                <Stack>
                  <Text size="sm" c="dimmed">
                    Story and methods goes here.
                  </Text>
                  <Text size="sm" c="dimmed">
                    Products goes here.
                  </Text>
                </Stack>
                <Button fullWidth mt="md" radius="md">
                  Visit Shop
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
