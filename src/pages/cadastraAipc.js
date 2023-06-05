import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { AccountProfile } from 'src/sections/account/account-profile';
import { AccountProfileDetails } from 'src/sections/account/account-profile-details-aipc';

const Page = () => (
  <>
    <Head>
      <title>
        AIPC
      </title>
    </Head>
    <Box
   
      component="main"
      sx={{
        background: "red",

        flexGrow: 1,
        py: 8
      }}
    >
      <Container 
        maxWidth="lg">

        <Stack 
        spacing={3}>
          <div>
            
            <Typography variant="h4">
              Cadastro de AIPC
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
              
            >
              {/* <Grid
                xs={12}
                md={6}
                lg={4}
                sx={{
                  background: 'red'
                 }}
              >
                <AccountProfile />
              </Grid> */}
              <Grid
                xs={12}
                md={6}
                lg={8}
                sx={{
                  background: 'blue'
                  
                 }}
              >
                <AccountProfileDetails />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
