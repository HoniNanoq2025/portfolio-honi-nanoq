import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchExperiences, fetchEducations } from "../../api/fetch";
import styles from "./Timeline.module.css";

export default function Timeline() {
  const [timelineItems, setTimelineItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eduData, expData] = await Promise.all([
          fetchEducations(),
          fetchExperiences(),
        ]);

        // Tag kun de sidste 2 fra hver
        const recentEdu = [...eduData]
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .slice(0, 2);

        const recentExp = [...expData]
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .slice(0, 2);

        // Kombiner og sortér efter startDate (nyeste først)
        const combined = [...recentEdu, ...recentExp].sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate),
        );

        setTimelineItems(combined);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* "falsk" dataobjekt */
  const fakeExperience = {
    type: "experience",
    positionEnglish: "This could be with you",
    company: "This could be your company",
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <h1 className={`${styles.header} ${styles.risqueFont}`}>
          RECENT TIMELINE
        </h1>

        {/* Mobile View (default) */}
        <div className={styles.mobileView}>
          {/* Combined Timeline */}
          <div className={styles.mobileTimeline}>
            {/* Vertical line */}
            <div className={styles.mobileVerticalLine}></div>

            <div className={styles.mobileItems}>
              {timelineItems.map((item, index) => (
                <div key={index} className={styles.mobileItem}>
                  {/* Dot */}
                  <div className={styles.mobileDot}></div>

                  <div>
                    {/* Section badge */}
                    <span
                      className={`${styles.typeBadge} ${styles.risqueFont}`}
                    >
                      {item.type === "education" ? "Education" : "Experience"}
                    </span>

                    <h3
                      className={`${styles.mobileTitle} ${styles.rockSaltFont}`}
                    >
                      {item.type === "education"
                        ? item.title
                        : item.positionEnglish}
                    </h3>
                    <p className={`${styles.mobileText} ${styles.poppinsFont}`}>
                      {item.type === "education"
                        ? item.courseProvider
                        : `${item.company}${item.city ? `, ${item.city}` : ""}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View (enhancement) */}
        <div className={styles.desktopView}>
          {/* Column Headers */}
          <div className={styles.columnHeaders}>
            <div className={styles.headersWrapper}>
              <h2 className={`${styles.columnHeader} ${styles.risqueFont}`}>
                Education
              </h2>
              <h2 className={`${styles.columnHeader} ${styles.risqueFont}`}>
                Experience
              </h2>
            </div>
          </div>

          {/* Timeline Items */}
          <div className={styles.desktopTimeline}>
            {/* Central white line */}
            <div className={styles.centerLine}></div>

            {/* Timeline entries */}
            <div className={styles.timelineItems}>
              {timelineItems.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.itemWrapper}>
                    {/* Education (Left) */}
                    <div className={styles.educationColumn}>
                      {item.type === "education" && (
                        <div>
                          <h3
                            className={`${styles.desktopTitle} ${styles.rockSaltFont}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`${styles.desktopText} ${styles.poppinsFont}`}
                          >
                            {item.courseProvider}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className={styles.centerDot}>
                      <div className={styles.dot}></div>
                    </div>

                    {/* Experience (Right) */}
                    <div className={styles.experienceColumn}>
                      {item.type === "experience" && (
                        <div>
                          <h3
                            className={`${styles.desktopTitle} ${styles.rockSaltFont}`}
                          >
                            {item.positionEnglish}
                          </h3>
                          <p
                            className={`${styles.desktopText} ${styles.poppinsFont}`}
                          >
                            {item.company}
                            {item.city && `, ${item.city}`}
                          </p>
                        </div>
                      )}

                      {/* Hardcoded CTA experience (desktop only) */}
                      {index === 0 && (
                        <Link to="/contact" className={styles.fakeExperience}>
                          <h3
                            className={`${styles.desktopTitle} ${styles.rockSaltFont}`}
                          >
                            This could be with you
                          </h3>
                          <p
                            className={`${styles.desktopText} ${styles.poppinsFont}`}
                          >
                            This could be your company
                          </p>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
