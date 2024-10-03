import { IconSearch } from "@tabler/icons-react";

import "./App.css";

import { Button, Group, Menu, Stack, TextInput } from "@mantine/core";

function App() {
  return (
    <>
      <Stack p="xs">
        <Group p="xs" justify="space-between">
          <Stack gap={0} align="center">
            <div className="smooch text-left font-normal text-4xl text-emerald-400">
              Achi's
            </div>
            <div className="text-left font-medium text-sm bg-gradient-to-r from-emerald-500 to-green-600 text-transparent bg-clip-text">
              Farmer's Market
            </div>
          </Stack>
          <TextInput
            placeholder="Search here..."
            leftSection={<IconSearch size={20} />}
            radius="md"
            size="md"
          />
          <div />
        </Group>
        <Group className="bg-emerald-50 rounded p-4">
          <Button variant="light">Our Story</Button>
          <Button variant="light">Our Farming Methods</Button>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button variant="light">Organic</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item>Settings</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Stack>
    </>
  );
}

export default App;
