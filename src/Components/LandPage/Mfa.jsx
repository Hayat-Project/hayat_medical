import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Title,
  Space,
  Group,
  Card,
  Text,
  Center,
  PinInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../functions/firebase"; // Ensure this is the correct import for firebase auth
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Mfa() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [otp, setOtp] = useState(true);
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const email = Cookies.get("email");
        const response = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/get-phone-number/${email}`);
        const data = await response.json();
          console.log("Reached data", data)
        if (response.ok) {
          setPhoneNumber(data.phoneNumber);
          initializeRecaptcha(data.phoneNumber);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching phone number: ", error);
      }
    };

    fetchPhoneNumber();
  }, []);

  function initializeRecaptcha(phone) {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("reCAPTCHA verified", response);
            },
            "expired-callback": () => {
              console.log("reCAPTCHA expired");
            },
          },
      );

      window.recaptchaVerifier
          .render()
          .then((widgetId) => {
            console.log("reCAPTCHA rendered, widgetId:", widgetId);
            if (phone) {
              onSignup(phone);
            }
          })
          .catch((error) => {
            console.error("Error rendering reCAPTCHA:", error);
          });
    } else if (phone) {
      onSignup(phone);
    }
  }

  function onSignup(phone) {
    if (!window.recaptchaVerifier) {
      console.error("recaptchaVerifier is not initialized");
      return;
    }

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+971" + phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setOtp(false);
          console.log("OTP sent successfully!");
        })
        .catch((error) => {
          console.error("Error during sign-in with phone number:", error);
        });
  }

  function onOTPVerify(e) {
      e.preventDefault()
    window.confirmationResult
        .confirm(userOtp)
        .then((res) => {
          console.log("Confirmed login");
          navigate("/doctorDashboard/overview");
        })
        .catch((err) => {
          console.error("Error verifying OTP:", err);
        });
  }

  return (
      <>
        <div id="recaptcha-container"></div>
        <Grid mt={200}>
          <Grid.Col span={isMobile ? 1 : 4.5}></Grid.Col>
          <Grid.Col span={isMobile ? 10 : 2.5}>
            <Card shadow="sm" withBorder radius="md">
              <Title order={2}>Verify your phone</Title>
              <Text>We sent you an OTP to your phone number</Text>
              <Space h="lg" />
              <Center>
                <PinInput
                    length={6}
                    placeholder=""
                    size="md"
                    onComplete={(value) => setUserOtp(value)}
                />
              </Center>
              <Space h="xl" />
              <Group justify="center">
                <Button variant="outline">Cancel</Button>
                <Button onClick={onOTPVerify}>Submit</Button>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </>
  );
}

export default Mfa;
