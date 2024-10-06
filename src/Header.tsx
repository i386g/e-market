import { Button, Flex, Group, Image, Menu, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import AgricartLogo from "./../public/Agricart.png";

import useScrollToHash from "./useScrollToHash";

const Header = () => {
  useScrollToHash();
  return (
    <Group p="lg" justify="space-between" gap={0} className="shadow-lg">
      <Group>
        <Flex gap={0} align="center" justify="center" className="w-full ">
          <Link to="/">
            <Image src={AgricartLogo} alt="logo" />
          </Link>
          <TextInput
            className="ml-10 w-full lg:w-[320px] hidden lg:block"
            placeholder="Search here..."
            leftSection={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <Group className="hidden lg:block">
          <Link to="/">
            <Button variant="subtle">Home</Button>
          </Link>
          <Link to="/#farms">
            <Button variant="subtle">Our Farms</Button>
          </Link>
          <Link to="/#about">
            <Button variant="subtle">About Us</Button>
          </Link>
        </Group>
        <div className="block lg:hidden">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button variant="subtle">Menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item component={Link} to="/#farms">
                Our Farms
              </Menu.Item>
              <Menu.Item component={Link} to="/#about">
                About Us
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </Group>
    </Group>
  );
};

export default Header;
