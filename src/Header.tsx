import { Button, Flex, Group, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Group p="lg" justify="space-between" gap={0} className="shadow-lg">
      <Group>
        <Flex gap={0} align="center" justify="center" className="w-full ">
          <Link to="/">
            <div className="kaushan text-left font-medium text-4xl text-emerald-600 whitespace-nowrap">
              Market? Market!
            </div>
          </Link>
          <TextInput
            className="ml-10 w-full lg:w-[320px] "
            placeholder="Search here..."
            leftSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            }
            radius="md"
            size="md"
          />
        </Flex>
      </Group>
      <Group>
        <Link to="/">
          <Button variant="subtle">Home</Button>
        </Link>
        <a href="#farms">
          <Button variant="subtle">Farms</Button>
        </a>
        <a href="#about">
          <Button variant="subtle">About</Button>
        </a>
        <a>
          <Button variant="subtle">Contact</Button>
        </a>
      </Group>
    </Group>
  );
};

export default Header;
