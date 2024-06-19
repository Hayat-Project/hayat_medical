import {
  Input,
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
import { useState } from "react";
import { IconMessage } from "@tabler/icons-react";
import { auth } from "../../Config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Mfa() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [otp, setOtp] = useState(true);
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      console.log("onCaptchVerify: initializing reCAPTCHA");
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log("callback: reCAPTCHA verified");
            },
            "expired-callback": () => {
              console.log("expired-callback: reCAPTCHA expired");
            },
          }
        );
        window.recaptchaVerifier.render().then((widgetId) => {
          console.log("reCAPTCHA rendered, widgetId:", widgetId);
        });
      } catch (error) {
        console.error("Error initializing RecaptchaVerifier:", error);
      }
    } else {
      console.log("onCaptchVerify: reCAPTCHA already initialized");
    }
  }

  function onSignup() {
    console.log("onSignup: start");
    onCaptchVerify();

    if (!window.recaptchaVerifier) {
      console.error("onSignup: recaptchaVerifier is not initialized");
      return;
    }

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+971" + phoneNumber;
    console.log("onSignup: formatted phone number:", formatPh);

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setOtp(false);
        console.log("OTP sent successfully!");
      })
      .catch((error) => {
        console.error(
          "onSignup: Error during sign-in with phone number:",
          error
        );
      });
  }

  function onOTPVerify() {
    console.log("otp " + userOtp);
    window.confirmationResult
      .confirm(userOtp)
      .then(async (res) => {
        console.log(res);
        navigate("/doctorDashboard/overview");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div id="recaptcha-container"></div>
      {otp ? (
        <Grid mt={200}>
          <Grid.Col span={isMobile ? 1 : 4.5}></Grid.Col>
          <Grid.Col span={isMobile ? 10 : 2.5}>
            <Card shadow="sm" withBorder radius="md">
              <Title order={2}>Two-Factor Authentication</Title>
              <Text>Fill in your phone number to receive the code</Text>
              <Space h="lg" />
              <Input.Wrapper>
                <Input
                  size="lg"
                  leftSection={<IconMessage size={22} />}
                  placeholder="Insert your phone number"
                  onChange={(event) =>
                    setPhoneNumber(event.currentTarget.value)
                  }
                />
              </Input.Wrapper>
              <Space h="xl" />
              <Group justify="center">
                <Button variant="outline">Cancel</Button>
                <Button onClick={onSignup}>Send SMS</Button>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      ) : (
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
      )}
    </>
  );
}

export default Mfa;
