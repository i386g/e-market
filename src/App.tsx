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
      <Stack p="xs">
        <Group p="xs" justify="space-between">
          <Group>
            <Stack gap={0} align="center">
              <div className="smooch text-left font-normal text-4xl text-emerald-400">
                Achi's
              </div>
              <div className="text-left font-medium text-sm bg-gradient-to-r from-emerald-500 to-green-600 text-transparent bg-clip-text">
                Farmer's Market
              </div>
            </Stack>
            <Button variant="subtle">Home</Button>
            <Button variant="subtle">Farms</Button>
            <Button variant="subtle">About</Button>
            <Button variant="subtle">Contact</Button>
          </Group>
          <Group>
            <TextInput
              placeholder="Search here..."
              leftSection={<IconSearch size={20} />}
              radius="md"
              size="md"
            />
          </Group>
        </Group>

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
