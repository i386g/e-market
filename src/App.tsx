import { IconSearch } from "@tabler/icons-react";

import "./App.css";

import { Button, Group, Stack, TextInput } from "@mantine/core";

function App() {
  return (
    <>
      <Stack p="xs">
        <Group p="xs" justify="space-between">
          <Stack gap={0} align="center">
            <div className="smooch text-left font-normal text-4xl text-emerald-400">
              Achi's
            </div>
            <div className="text-left font-semibold text-sm bg-gradient-to-r from-emerald-500 to-green-600 text-transparent bg-clip-text">
              Farmer's Market
            </div>
          </Stack>
          <TextInput
            placeholder="Search here..."
            leftSection={<IconSearch size={20} />}
            radius="md"
            size="md"
          />
          <Group>
            <Button variant="light">Click me</Button>
          </Group>
        </Group>
      </Stack>
    </>
  );
}

export default App;
