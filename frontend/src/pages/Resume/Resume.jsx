import { useState } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

export default function Resume() {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth={false} sx={{ maxWidth:{
        xs: "100%", // mobil
        md: "400px", // tablet
    }, py   : "50px", }}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          centered
          sx={{
            "& .MuiTab-root": {
              color: "#6985E0", // inaktiv tab tekst
              fontWeight: 500,
            },
            "& .Mui-selected": {
              color: "#fff", // aktiv tab tekst
              fontWeight: 700,
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#6985E0", // indikator farve
              height: 3,
              borderRadius: 2,
            },
          }}
        >
          <Tab label="Experience" />
          <Tab label="Education" />
        </Tabs>

        <Box sx={{ mt: 3 }}>
          {tab === 0 && <Experience />}
          {tab === 1 && <Education />}
        </Box>
      </Box>
    </Container>
  );
}
