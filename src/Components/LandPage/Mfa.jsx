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
import { auth, db } from "../../Config/firebase"; // Ensure this import is correct
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
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
        const docRef = doc(db, "doctors", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const phone = docSnap.data().phone_number;
          setPhoneNumber(phone);

          if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
              auth,
              "recaptcha-container",
              {
                size: "invisible",
                callback: (response) => {
                  console.log("reCAPTCHA verified");
                },
                "expired-callback": () => {
                  console.log("reCAPTCHA expired");
                },
              }
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
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchPhoneNumber();
  }, []);

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

  function onOTPVerify() {
    window.confirmationResult
      .confirm(userOtp)
      .then((res) => {
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
