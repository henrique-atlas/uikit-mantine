import { Grid, NativeSelect, Tabs } from "@mantine/core";
import { ContainedTextInput } from "../components/Inputs/TextInput";
import { ContainedNativeSelect } from "../components/Inputs/ContainedNativeSelect";

export function CompanyOverviewContent() {
  return (
    <Tabs keepMounted={false} defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">General Information</Tabs.Tab>
        <Tabs.Tab value="second">Account Contact</Tabs.Tab>
        <Tabs.Tab value="third">Documents</Tabs.Tab>
        <Tabs.Tab value="fourth">Notes</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        <Grid m={2} columns={16}>
          <Grid.Col span={4}>
            <ContainedTextInput label="Customer Legal Name" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedNativeSelect
              label="Customer DBA"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedTextInput label="Tax Id Registration Number" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedTextInput label=" Website" />
          </Grid.Col>
        </Grid>

        <Grid m={2} columns={16}>
          <Grid.Col span={4}>
            <ContainedNativeSelect
              label="Region"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedNativeSelect
              label="Industry"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedNativeSelect
              label="Language"
            />
          </Grid.Col>
        </Grid>

        <Grid m={2} columns={16}>
          <Grid.Col span={4}>
            <ContainedTextInput label="Status" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedTextInput label="Solution" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContainedTextInput label="KYC Check" />
          </Grid.Col>
        </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
