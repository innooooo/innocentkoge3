let isOpen = false;

function toggleNotification() {
  const dropdown = document.getElementById('notification-dropdown');
  const notificationsWarning = document.getElementById("notification-icon");
  const icon = document.getElementById("icon");

  if (!isOpen) {
    dropdown.style.display = 'block';
    icon.innerText +=" 2 new notifications";
    notificationsWarning.style.width="228px";
    notificationsWarning.style.borderRadius="5px";
    icon.style.color="white";
    isOpen = true;
  } else {
        icon.innerText ="🔔";
        notificationsWarning.style.position="relative";
        notificationsWarning.style.display="flex";
        notificationsWarning.style.flexDirection="column";
        notificationsWarning.style.alignItems="center";
        notificationsWarning.style.justifyContent="center";
        notificationsWarning.style.width="50px";
        notificationsWarning.style.height="50px";
        notificationsWarning.style.borderRadius="50%";
        notificationsWarning.style.backgroundColor="rgb(170, 10, 85)";
        notificationsWarning.style.cursor="pointer";
        dropdown.style.display = 'none';
        isOpen = false;
  }

   
}  