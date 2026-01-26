import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchExperiences } from "../../../api/fetch";
import { fontWeight } from "@mui/system";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences().then(setExperiences);
  }, []);

  const formatDate = (date) => {
    if (!date) return "Nu";

    return new Date(date).toLocaleDateString("da-DK").replace(/\./g, ".");
  };

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Island Moments', sans-serif",
          color: "black",
          textAlign: "center",
        }}
      >
        Experience
      </Typography>
      {experiences.map((exp) => (
        <Accordion
          key={exp._id}
          sx={{
            mb: 2,
            backgroundColor: "#6985E0",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: 2,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%", // 🔑 VIGTIG
                minWidth: 0, // 🔑 VIGTIG
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "center",
                }}
              >
                {exp.positionEnglish}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  ml: 2,
                }}
              >
                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
              </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              backgroundColor: "#CEDAFF",
              color: "#000",
              borderTop: "1px solid #fff",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Typography>
              <strong>Company:</strong> {exp.company}
            </Typography>
            <Typography>
              <strong>City:</strong> {exp.city}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography fontWeight={600}>Job description:</Typography>
              {exp.tasks.map((task, i) => (
                <Typography key={i}>• {task}</Typography>
              ))}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography fontWeight={600}>Tools:</Typography>
              {exp.tools.map((tool, i) => (
                <Typography key={i}>• {tool}</Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
