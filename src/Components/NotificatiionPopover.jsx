import { useState } from "react";
import { Popover, ActionIcon, rem, Notification, Stack, Text } from "@mantine/core";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function NotificationPopover() {
  const [opened, setOpened] = useState(false);
  const iconsStyle = { width: rem(28.5), height: rem(28.5) };
  const notificationsList = [
    {
      id: 1,
      type: "appointment",
      title: "New Appointment Scheduled",
      content: "Patient John Doe has scheduled an appointment for tomorrow at 10:00 AM.",
    },
    {
      id: 2,
      type: "labResult",
      title: "Lab Results Available",
      content: "Patient Jane Smith's lab results for blood test #12345 are now available.",
    },
    {
      id: 3,
      type: "patientUpdate",
      title: "Patient Information Updated",
      content: "Patient David Brown's contact information has been updated.",
    },
    {
      id: 4,
      type: "reminder",
      title: "Prescription Refill Reminder",
      content: "Patient Mary Jones's prescription for medication #12345 is due for a refill.",
    },
    {
      id: 5,
      type: "urgent",
      title: "Urgent Patient Message",
      content: "Patient Sarah Miller has sent an urgent message requiring your attention.",
    },
  ];

  const [notifications, setNotifications] = useState(notificationsList);

  const handleCloseNotification = (notificationId) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.filter((notification) => notification.id !== notificationId);
      return updatedNotifications;
    });
  };

  const handleClearAllNotifications = () => {
    setNotifications([]); 
  };

  return (
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <ActionIcon
          onClick={() => setOpened((o) => !o)}
          variant="default"
          size="xl"
          radius="md"
        >
          <IoNotificationsOutline style={iconsStyle} />
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown>
        {notifications.length > 0 ? (
          <Text component={Link} onClick={() => handleClearAllNotifications()}> Clear All </Text>
        ) : (
          <Text>No new notifications</Text>
        )}
        <Stack>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              withBorder
              title={notification.title}
              onClose={() => handleCloseNotification(notification.id)}
            >
              {notification.content}
            </Notification>
          ))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

export default NotificationPopover;
