import { useMediaQuery } from "@mantine/hooks";
import {
  AppShell,
  Group,
  Button,
  Image,
  Text,
  Container,
  Grid,
  Card,
  Space,
  Title,
  BackgroundImage,
} from "@mantine/core";
import { useState, useEffect, useRef } from "react";
import ThemeSwitcher from "../ThemeSwitcher.jsx";
import { Link } from "react-router-dom";
import HayatLogo from "../HayatLogo.jsx";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconStar } from "@tabler/icons-react";
import { useMantineTheme } from "@mantine/core";

function LandPage() {
  const { colorScheme } = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const [logoSrc, setLogoSrc] = useState("/public/images/Logo.png");
  const [theme, setTheme] = useState(colorScheme === "dark" ? "dark" : "light"); // State to track theme

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setLogoSrc(
        storedTheme === "dark"
          ? "/public/images/Logo-dark.png"
          : "/public/images/Logo.png"
      );
    } else {
      const theme = document.documentElement.getAttribute(
        "data-mantine-color-scheme"
      );
      setLogoSrc(
        theme === "dark"
          ? "/public/images/Logo-dark.png"
          : "/public/images/Logo.png"
      );
    }
  }, []);

  const handleThemeChange = () => {
    const theme = document.documentElement.getAttribute(
      "data-mantine-color-scheme"
    );
    setLogoSrc(
      theme === "dark"
        ? "/public/images/Logo-dark.png"
        : "/public/images/Logo.png"
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Fatima Khaled",
      feedback:
        "I am extremely satisfied with the care I received. The staff was friendly and professional.",
      img: "/images/client1.png",
      rating: 5,
    },
    {
      name: "Ahmed Ali",
      feedback:
        "The medical team was very attentive and ensured I understood every step of my treatment.",
      img: "/images/client2.png",
      rating: 4,
    },
    {
      name: "Layla Jad",
      feedback:
        "The facilities are top-notch and the service was excellent. I highly recommend this hospital.",
      img: "/images/client3.png",
      rating: 5,
    },
    {
      name: "Omar Nasser",
      feedback:
        "I had a great experience. The doctors were knowledgeable and the environment was very comfortable.",
      img: "/images/client4.png",
      rating: 4,
    },
    {
      name: "Hassan Mohammed",
      feedback:
        "The level of care and attention to detail here is outstanding. I felt very well cared for.",
      img: "/images/client5.png",
      rating: 5,
    },
    {
      name: "Sara Aseel",
      feedback:
        "It was a very good experience. I appreciate how easy it is to find essential information and details about the departments.",
      img: "/images/client6.png",
      rating: 4,
    },
  ];

  const departments = [
    {
      title: "Pediatric",
      desc: "The pediatric department focuses on the medical care of infants, children.",
      img: "/images/department1.jpg",
    },
    {
      title: "Radiology",
      desc: "Radiology departments perform various medical imaging procedures.",
      img: "/images/department2.jpeg",
    },
    {
      title: "Surgery",
      desc: "Surgical department has operating rooms for surgical procedures.",
      img: "/images/department3.jpg",
    },
    {
      title: "Oncology",
      desc: "Oncology department focuses on the treatment of cancer diseases.",
      img: "/images/department4.webp",
    },
    {
      title: "Cardiology",
      desc: "Cardiology department specializes in treating heart conditions.",
      img: "/images/department5.jpg",
    },
    {
      title: "Neurology",
      desc: "Neurology department deals with disorders of the nervous system.",
      img: "/images/department6.jpg",
    },
    {
      title: "Orthopedics",
      desc: "Orthopedics department focuses on musculoskeletal system issues.",
      img: "/images/department7.jpg",
    },
    {
      title: "Dermatology",
      desc: "Dermatology department addresses skin-related health issues.",
      img: "/images/department8.webp",
    },
  ];

  const teamMembers = [
    {
      name: "Khaled Albaz",
      role: "Cybersecurity Engineer",
      bio: "Khaled ensures robust cybersecurity for our medical consultation system, safeguarding sensitive data.",
    },
    {
      name: "Ahmad Aljaghbeir ",
      role: "Cybersecurity Engineer",
      bio: "Ahmad specializes in securing our system against potential threats, ensuring patient information remains confidential.",
    },
    {
      name: "Heba El Zaher",
      role: "Software Engineer",
      bio: "Heba designs and optimizes our medical consultation system, focusing on functionality and user experience.",
    },
    {
      name: "Moutasim El Ayoubi ",
      role: "Software Engineer",
      bio: "Moutasim builds and maintains our system, emphasizing efficiency and user-friendly design.",
    },
  ];

  const [doctorVisible, setDoctorVisible] = useState(false);
  const [aboutUsVisible, setAboutUsVisible] = useState(false);

  const doctorRef = useRef(null);
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const doctorObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setDoctorVisible(true);
        } else {
          setDoctorVisible(false);
        }
      });
    }, options);

    const aboutUsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutUsVisible(true);
        } else {
          setAboutUsVisible(false);
        }
      });
    }, options);

    if (doctorRef.current) {
      doctorObserver.observe(doctorRef.current);
    }
    if (aboutUsRef.current) {
      aboutUsObserver.observe(aboutUsRef.current);
    }

    return () => {
      if (doctorRef.current) {
        doctorObserver.unobserve(doctorRef.current);
      }
      if (aboutUsRef.current) {
        aboutUsObserver.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <HayatLogo image={logoSrc} />
          <Group gap={isMobile ? 8 : "md"}>
            <ThemeSwitcher onChange={handleThemeChange} />
            <Button variant="light" component={Link} to="/login">
              Login
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      <Container size="lg">
        <Grid align="center" justify="center">
          <Grid.Col span={isMobile ? 12 : 6}>
            <div
              ref={doctorRef}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                size="md"
                align="center"
                style={{
                  marginBottom: "16px",
                  opacity: doctorVisible ? 1 : 0,
                  transform: `translateX(${doctorVisible ? 0 : "-20px"})`,
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                }}
              >
                Back
              </Text>
              <Image
                src="/images/doctor.png"
                alt="Doctor"
                style={{
                  maxWidth: "100%",
                  opacity: doctorVisible ? 1 : 0,
                  transform: `translateX(${doctorVisible ? 0 : "-20px"})`,
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                }}
              />
            </div>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 6}>
            <Title align="center" order={1}>
              Empowering Lives Through Transformative Healthcare
            </Title>
            <Text align="center" size="md" mt="md" mb={isMobile ? 40 : 0}>
              Enhancing lives with innovative, privacy-driven medical systems,
              advanced security, and cutting-edge technology.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      <BackgroundImage
        src={theme === "light" ? "/images/bg.png" : "/images/dbg.jpeg"}
        style={{ transition: "opacity 0.5s ease-in-out" }}
      >
        <Container pt={50} size="lg">
          <Title align="center" order={1} mt={0}>
            About Us
          </Title>
          <Space h="md" />
          <Grid align="center" justify="center">
            <Grid.Col span={isMobile ? 12 : 6} ref={aboutUsRef}>
              <Text size="md" mx="auto" style={{ maxWidth: 600 }}>
                At Hayat, we are committed to delivering exceptional healthcare
                to our community. Our dedicated team of experienced healthcare
                professionals and state-of-the-art medical technology provide
                compassionate, patient-centered care.
                <br />
                <br />
                Our mission is to improve the well-being of our patients by
                offering high-quality medical services while actively engaging
                with our community to promote health and wellness. Your health
                and comfort are our top priorities, and we are honored to be
                your trusted healthcare partner.
              </Text>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 6}>
              <Image
                src="/images/aboutus.png"
                alt="About Us"
                style={{
                  maxWidth: "100%",
                  opacity: aboutUsVisible ? 1 : 0,
                  transform: `translateX(${aboutUsVisible ? 0 : "100px"})`,
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </BackgroundImage>

      <Container pb={100} pt={50} size="lg">
        <Title align="center" order={1} mb={50}>
          Departments
        </Title>
        <Space h="md" />
        <Slider {...settings}>
          {departments.map((dept, index) => (
            <Card p="lg" key={index} withBorder={true}>
              <Image src={dept.img} alt={dept.title} height={150} />
              <Title order={4}>{dept.title}</Title>
              <Text size="sm">{dept.desc}</Text>
            </Card>
          ))}
        </Slider>
      </Container>

      <BackgroundImage
        src={theme === "light" ? "/images/bg.png" : "/images/dbg.jpeg"}
        style={{ transition: "opacity 0.5s ease-in-out" }}
      >
        <Container pb={100} pt={50}>
          <Title align="center" order={1} mt={0}>
            Patients Testimonials
          </Title>
          <Space h="lg" />
          <Slider {...settings2}>
            {testimonials.map((testimonial, index) => (
              <Card shadow="sm" p="lg" key={index} withBorder={true}>
                <Group position="center" direction="column" align="center">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    radius="xl"
                  />
                  <Text size="md" weight={500} mt="md">
                    {testimonial.name}
                  </Text>
                  <Group spacing="xs" mt="xs">
                    {Array.from({ length: 5 }, (_, i) => (
                      <IconStar
                        key={i}
                        size={16}
                        color={
                          i < Math.round(testimonial.rating)
                            ? "#FFC107"
                            : "#E0E0E0"
                        }
                        fill={
                          i < Math.round(testimonial.rating)
                            ? "#FFC107"
                            : "none"
                        }
                      />
                    ))}
                  </Group>
                  <Text
                    size="sm"
                    mt="xs"
                    align="center"
                    style={{ flexGrow: 1 }}
                  >
                    {testimonial.feedback}
                  </Text>
                </Group>
              </Card>
            ))}
          </Slider>
        </Container>
      </BackgroundImage>

      <Container pt={50}>
        <Title align="center" order={1} mt={0}>
          Team Members
        </Title>
        <Space h="xl" />
        <Grid>
          {teamMembers.map((member, index) => (
            <Grid.Col span={isMobile ? 12 : 3} key={index}>
              <Card
                shadow="sm"
                p="lg"
                style={{ height: "100%" }}
                withBorder={true}
              >
                <Title order={4}>{member.name}</Title>
                <Text size="sm">{member.role}</Text>
                <Text size="xs" mt="xs">
                  {member.bio}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem 0",
          marginTop: "50px",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Container>
          <Text>© Hayat Medical - 2024</Text>
        </Container>
      </footer>
    </AppShell>
  );
}

export default LandPage;
