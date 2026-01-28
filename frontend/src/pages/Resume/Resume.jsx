import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, Tabs, Tab } from "@mui/material";
import { FaLock } from "react-icons/fa6";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

export default function Resume() {
  const [tab, setTab] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const completed = localStorage.getItem("memoryGameCompleted") === "true";
    setIsUnlocked(completed);

    if (!completed) {
      setTimeout(() => {
        navigate("/game");
      }, 3000);
    }
  }, [navigate]);

  if (!isUnlocked) {
    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 4rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center", color: "#001c7a" }}>
          <FaLock
            style={{ fontSize: "4rem", opacity: 0.5, marginBottom: "1rem" }}
          />
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            RESUMÉ LOCKED!
          </h2>
          <p style={{ opacity: 0.7, marginBottom: "1rem" }}>
            Complete the memory game to unlock the resumé
          </p>
          <span style={{ opacity: 0.5, fontSize: "0.875rem" }}>
            Redirecting to game...
          </span>
        </Box>
      </Box>
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: {
          xs: "100%", // mobil
          md: "400px", // tablet
        },
        py: "50px",
      }}
    >
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
