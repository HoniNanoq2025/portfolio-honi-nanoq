import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchEducations } from "../../../api/fetch";

export default function Education() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetchEducations().then(setEducations);
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
        Education
      </Typography>
      {educations.map((edu) => (
        <Accordion
          key={edu._id}
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
                {edu.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  ml: 2,
                }}
              >
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
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
              <strong>School / Provider:</strong>
              <br />
              {edu.courseProvider}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography fontWeight={600}>Competences:</Typography>
              {edu.skills.map((skill, i) => (
                <Typography key={i}>• {skill}</Typography>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
