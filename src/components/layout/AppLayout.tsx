import {
  AppShell,
  Group,
  Navbar,
  ThemeIcon,
  UnstyledButton,
  Text,
  Header,
  ActionIcon,
} from "@mantine/core";
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from "@tabler/icons";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconGitPullRequest size={16} />,
    color: "blue",
    label: "Pull Requests",
  },
  { icon: <IconAlertCircle size={16} />, color: "teal", label: "Open Issues" },
  { icon: <IconMessages size={16} />, color: "violet", label: "Discussions" },
  { icon: <IconDatabase size={16} />, color: "grape", label: "Databases" },
];

function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppShell
      padding="md"
      fixed={false}
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>{/* <User /> */}</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            {/* <Logo colorScheme={colorScheme} /> */}
            {/* <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === "dark" ? (
                <IconSun size={16} />
              ) : (
                <IconMoonStars size={16} />
              )}
            </ActionIcon> */}
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[8],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default AppLayout;
