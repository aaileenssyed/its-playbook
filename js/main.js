const playbooks = [
  {
    category: "Identity & Access",
    title: "User cannot log in",
    summary: "Use this when a user cannot access Microsoft 365, Windows, VPN, SSO, or an internal application.",
    ask: [
      "Which system are you trying to access?",
      "What exact error message do you see?",
      "When did the issue start?",
      "Did you recently change your password?",
      "Is MFA prompting, failing, or not appearing?",
      "Can you sign in from a different browser or device?"
    ],
    check: [
      "Verify the user's identity before making account changes.",
      "Check whether the issue affects one app or all systems.",
      "Check account status: locked, disabled, expired, password reset required, or MFA issue.",
      "Review recent failed sign-ins and sign-in location if available.",
      "Confirm whether there is a service outage or known authentication issue."
    ],
    steps: [
      "Confirm the scope: device login, email, VPN, SSO, or only one application.",
      "Verify identity using the approved process.",
      "Check the account in the identity system for lockout, expiration, or disabled status.",
      "If locked, unlock the account only after identity is verified.",
      "If password reset is needed, follow the approved reset process and require a password change if policy requires it.",
      "Confirm MFA registration and authentication method are working.",
      "Have the user test with a fresh browser session or private window.",
      "Document the root cause and user confirmation."
    ],
    escalate: "Escalate if there are signs of compromise, impossible travel, MFA fatigue, repeated failed attempts, unusual location, or if the account cannot be safely verified.",
    doc: "Verified user identity. Checked account status and confirmed the account was locked after failed sign-in attempts. Unlocked the account, confirmed MFA was working, and user successfully signed in. No suspicious sign-in activity observed."
  },
  {
    category: "Identity & Access",
    title: "MFA device lost or changed",
    summary: "Use this when a user has a new phone, lost phone, broken authenticator app, or cannot complete MFA.",
    ask: [
      "Do you still have access to your old device?",
      "Are you receiving push notifications, SMS codes, or no prompt at all?",
      "Did you recently change phones or reinstall the authenticator app?",
      "Are you able to verify identity through an approved alternate method?"
    ],
    check: [
      "Confirm identity before resetting MFA.",
      "Check current MFA methods on the account.",
      "Check whether the account shows suspicious sign-in attempts.",
      "Confirm if temporary access/passcode options are allowed by policy."
    ],
    steps: [
      "Verify identity using the approved process.",
      "Review current MFA methods and determine whether the old method is unusable.",
      "Remove or reset only the affected MFA method according to policy.",
      "Have the user enroll a new authenticator method.",
      "Ask the user to complete a test sign-in.",
      "Review sign-in activity if the request seems unusual.",
      "Document the MFA change and verification method used."
    ],
    escalate: "Escalate if the user cannot be verified, the request is urgent but identity is unclear, or there are suspicious sign-in attempts around the same time.",
    doc: "User identity verified. Old MFA method was no longer available due to phone replacement. MFA method was reset according to policy. User enrolled new authenticator method and completed a successful test sign-in."
  },
  {
    category: "Identity & Access",
    title: "Account locked repeatedly",
    summary: "Use this when an account keeps locking after being unlocked, usually because saved credentials or a service are using an old password.",
    ask: [
      "When did the repeated lockouts begin?",
      "Did you recently change your password?",
      "Are you signed into email, Wi-Fi, VPN, mobile mail, or shared devices?",
      "Does the lockout happen immediately or after a few minutes?"
    ],
    check: [
      "Verify identity before account changes.",
      "Check lockout timestamps and source device if available.",
      "Look for old credentials stored in Outlook, mobile mail, VPN, Wi-Fi, mapped drives, or Credential Manager.",
      "Check whether a scheduled task or service account is using the user’s credentials."
    ],
    steps: [
      "Unlock the account only after verification.",
      "Ask the user to stop sign-in attempts temporarily.",
      "Identify the lockout source using available logs or timestamps.",
      "Remove old saved credentials from Credential Manager, browsers, email clients, VPN, and mobile devices.",
      "Have the user sign in once using the current password.",
      "Monitor whether the lockout repeats.",
      "Escalate with timestamps and suspected source if the source cannot be identified."
    ],
    escalate: "Escalate if lockouts continue after removing cached credentials, if the lockout source is a server/service, or if failed attempts look malicious.",
    doc: "Account was repeatedly locking after a recent password change. Cleared saved credentials from local device and email client, confirmed successful sign-in, and monitored for repeated lockout. No further lockouts observed."
  },
  {
    category: "Identity & Access",
    title: "Access request for a restricted system",
    summary: "Use this when a user asks for access to an application, folder, system, role, or security group.",
    ask: [
      "Which system or resource do you need access to?",
      "What business task requires this access?",
      "Who is your manager or approver?",
      "Is this new access, changed access, or lost access?",
      "Do you need read-only access or edit/admin access?"
    ],
    check: [
      "Do not grant access just because the user asks.",
      "Verify the user’s role and business need.",
      "Confirm approval from the correct owner or manager.",
      "Check existing group membership and compare it to the requested access.",
      "Apply least privilege: only the access needed, not broader access."
    ],
    steps: [
      "Identify the exact system, folder, application, or group required.",
      "Confirm the correct approval path.",
      "Check current access and group membership.",
      "Add the user only to the approved group or role.",
      "Ask the user to sign out and back in if group membership needs to refresh.",
      "Confirm access works and no extra access was granted.",
      "Document approval, group name, and validation."
    ],
    escalate: "Escalate if the request involves admin rights, privileged access, sensitive data, unclear ownership, or no valid approval.",
    doc: "Verified business need and approval before making changes. Confirmed user was missing from the required access group. Added user to the approved group, asked user to sign out and back in, and confirmed access worked."
  },
  {
    category: "Identity & Access",
    title: "Shared drive or folder permission issue",
    summary: "Use this when a user cannot open, edit, or see a network folder, shared drive, or department folder.",
    ask: [
      "What folder path are you trying to access?",
      "Can you see the folder but not open it, or can you not see it at all?",
      "Were you able to access it before?",
      "Do coworkers in the same role have access?",
      "Do you need read-only or edit access?"
    ],
    check: [
      "Confirm the folder path and exact permission error.",
      "Check whether the user is on VPN or the corporate network if remote.",
      "Verify group membership rather than adding direct permissions when possible.",
      "Check whether the share itself is online and reachable.",
      "Confirm approval if new access is needed."
    ],
    steps: [
      "Confirm whether this is an access issue or connectivity issue.",
      "Have the user test another shared resource.",
      "Check group membership and folder access model.",
      "If access is missing, get approval from the folder owner.",
      "Add the user to the correct group if approved.",
      "Ask the user to sign out/in or reconnect VPN if needed.",
      "Confirm access and document the change."
    ],
    escalate: "Escalate if the folder server is unreachable, permissions are inherited incorrectly, the owner is unknown, or sensitive data access is unclear.",
    doc: "Confirmed user could reach other network resources but lacked access to the requested folder. Verified approval and added user to the correct folder access group. User reconnected session and confirmed folder access."
  },
  {
    category: "Microsoft 365",
    title: "Outlook desktop not syncing",
    summary: "Use this when Outlook desktop is delayed, not receiving mail, or stuck while Outlook web works normally.",
    ask: [
      "Does Outlook on the web work?",
      "Is the issue only on the desktop app?",
      "Do you see 'Working Offline', password prompts, or send/receive errors?",
      "When did the issue start?",
      "Are other Microsoft 365 apps working?"
    ],
    check: [
      "If webmail works, the mailbox is likely accessible and the issue may be local.",
      "Check internet connection and Microsoft 365 sign-in status.",
      "Check Outlook status bar for offline mode or sync errors.",
      "Check cached credentials and profile corruption.",
      "Check for service advisories if multiple users are affected."
    ],
    steps: [
      "Confirm Outlook web works.",
      "Restart Outlook and check for offline mode.",
      "Restart the device if uptime is high.",
      "Check Microsoft 365 account sign-in and license state.",
      "Clear cached credentials if repeated sign-in prompts appear.",
      "Check Office updates.",
      "Create a new Outlook profile if sync remains broken.",
      "Confirm send and receive works before closing."
    ],
    escalate: "Escalate if multiple users are affected, mail flow is down, mailbox errors appear server-side, or profile rebuild does not resolve the issue.",
    doc: "Confirmed Outlook web worked, isolating the issue to the desktop client. Restarted Outlook, checked offline mode, cleared cached credentials, restarted the device, and confirmed email sync resumed."
  },
  {
    category: "Microsoft 365",
    title: "Teams audio, camera, or meeting issue",
    summary: "Use this when Teams cannot detect a camera/microphone, meetings freeze, or the user cannot join calls.",
    ask: [
      "Is the issue with one meeting or all meetings?",
      "Does the camera or microphone work in another app?",
      "Are you using a headset, docking station, or external camera?",
      "Do you see a device permission prompt?",
      "Are you on VPN, Wi-Fi, or wired connection?"
    ],
    check: [
      "Check Teams device settings for selected camera, mic, and speaker.",
      "Check Windows privacy permissions for camera and microphone.",
      "Check whether browser Teams works if desktop Teams fails.",
      "Check network quality if calls freeze or drop.",
      "Check for Teams updates or cached client issues."
    ],
    steps: [
      "Have the user test audio/video in Teams settings.",
      "Confirm the correct input/output devices are selected.",
      "Test the device in another app.",
      "Check Windows privacy permissions.",
      "Restart Teams and the device.",
      "Try Teams web as a temporary workaround.",
      "Clear Teams cache if the desktop client continues failing.",
      "Confirm the user can join a test meeting."
    ],
    escalate: "Escalate if hardware is not detected by Windows, the issue affects many users, or network quality appears to be the root cause.",
    doc: "Verified microphone and camera worked in Windows. Corrected Teams device settings, restarted Teams, and confirmed successful test call. Browser Teams was provided as a temporary workaround during troubleshooting."
  },
  {
    category: "Microsoft 365",
    title: "OneDrive not syncing files",
    summary: "Use this when files are stuck syncing, show red X icons, or do not appear across devices.",
    ask: [
      "Which files or folders are not syncing?",
      "Do you see red X, blue sync arrows, or an error message?",
      "Are you signed into OneDrive with the correct account?",
      "Is the file open somewhere else?",
      "Do you have enough local and cloud storage?"
    ],
    check: [
      "Check OneDrive sign-in status.",
      "Check sync icons and error details.",
      "Check file name/path length and invalid characters.",
      "Check storage limits.",
      "Check whether the file is locked, too large, or blocked."
    ],
    steps: [
      "Confirm OneDrive is running and signed in.",
      "Open OneDrive sync status and read the exact error.",
      "Rename files with invalid characters or very long paths.",
      "Close files that may be locked by an application.",
      "Pause and resume sync.",
      "Restart OneDrive.",
      "Check web OneDrive to confirm whether the cloud copy exists.",
      "Escalate if sync database corruption or account-side issue is suspected."
    ],
    escalate: "Escalate if files are missing from both local and cloud locations, there is possible data loss, or sync reset is needed beyond normal support scope.",
    doc: "Checked OneDrive sync status and found blocked files due to invalid filename characters. Renamed affected files, resumed sync, and confirmed files appeared correctly in OneDrive web."
  },
  {
    category: "Microsoft 365",
    title: "Office activation or license issue",
    summary: "Use this when Word, Excel, Outlook, or other Office apps show unlicensed product or activation errors.",
    ask: [
      "Which Office application shows the error?",
      "What exact activation message appears?",
      "Are you signed into Office with your work/school account?",
      "Can you access Microsoft 365 in a browser?",
      "Did this start after a password change or device change?"
    ],
    check: [
      "Check if the user has the correct license assigned.",
      "Check whether Office is signed into the right account.",
      "Check internet connectivity and date/time settings.",
      "Check for cached credential issues.",
      "Check whether multiple accounts are signed into Office."
    ],
    steps: [
      "Confirm the user can sign into Microsoft 365 web.",
      "Check license assignment.",
      "Sign out of Office apps and sign back in with the correct account.",
      "Clear cached credentials if Office keeps using an old account.",
      "Run Office update/repair if activation remains broken.",
      "Restart the device and test Office apps again.",
      "Document whether the issue was licensing, sign-in, or local activation."
    ],
    escalate: "Escalate if the license is missing and cannot be assigned by your role, or if activation servers/service health show issues.",
    doc: "Confirmed user had a valid license. Office was signed into an old account. Signed out, cleared cached credentials, signed in with the correct account, and confirmed Office activated successfully."
  },
  {
    category: "Endpoint & Windows",
    title: "Slow Windows laptop",
    summary: "Use this when a laptop is slow to start, apps freeze, Teams/Outlook lag, or the device feels generally unstable.",
    ask: [
      "When did the slowness start?",
      "Is it all apps or specific apps?",
      "Does it happen on battery, dock, or all the time?",
      "Has the device been restarted recently?",
      "Did any updates or new software install recently?"
    ],
    check: [
      "Check Task Manager for CPU, memory, disk, and startup impact.",
      "Check storage space.",
      "Check Windows Update status.",
      "Check uptime and restart history.",
      "Check endpoint/security alerts.",
      "Check whether Teams/Outlook cache is the main issue."
    ],
    steps: [
      "Confirm the device name and symptoms.",
      "Check Task Manager while the issue is happening.",
      "Restart the device if uptime is high.",
      "Disable unnecessary startup apps if allowed.",
      "Check for pending Windows or driver updates.",
      "Check disk space and clean temporary files if needed.",
      "Review endpoint alerts and recent crashes.",
      "Escalate if hardware failure, repeated crashes, or reimage/replacement is needed."
    ],
    escalate: "Escalate if disk health is failing, memory is insufficient, malware is suspected, crashes repeat, or the device needs hardware repair/reimage.",
    doc: "Reviewed performance symptoms and confirmed high startup load with extended uptime. Restarted device, checked Task Manager, reduced approved startup items, verified updates, and confirmed improved performance."
  },
  {
    category: "Endpoint & Windows",
    title: "BitLocker recovery prompt",
    summary: "Use this when a Windows device boots to a BitLocker recovery screen and asks for a recovery key.",
    ask: [
      "What changed before the prompt appeared? BIOS update, hardware change, docking change, or Windows update?",
      "What is the device name or asset tag?",
      "Is this a company-managed device?",
      "Can you read the recovery key ID shown on the screen?"
    ],
    check: [
      "Verify the user and device ownership before releasing a recovery key.",
      "Match the recovery key ID exactly.",
      "Check device management records for the correct key.",
      "Look for recent BIOS/TPM/security changes.",
      "Confirm whether the device should be escalated due to repeated BitLocker prompts."
    ],
    steps: [
      "Verify user identity and device assignment.",
      "Ask for the recovery key ID from the BitLocker screen.",
      "Locate the matching recovery key in the approved management system.",
      "Provide the key only after verification.",
      "Have the user boot into Windows and confirm access.",
      "Check for recent update or TPM event if possible.",
      "Document key release and reason."
    ],
    escalate: "Escalate if the device is not assigned to the user, the key ID does not match, the device repeatedly asks for a key, or theft/tampering is suspected.",
    doc: "Verified user identity and device assignment. Matched recovery key ID to the managed device record, provided the correct recovery key, and confirmed successful boot into Windows."
  },
  {
    category: "Endpoint & Windows",
    title: "Windows update failure",
    summary: "Use this when Windows updates fail, get stuck, or repeatedly roll back after restart.",
    ask: [
      "What update error code appears?",
      "How long has the update been failing?",
      "Is the device low on storage?",
      "Does the update fail during download, install, or restart?",
      "Is this device remote or on-site?"
    ],
    check: [
      "Check available disk space.",
      "Check Windows Update history and error code.",
      "Check whether the device has pending restarts.",
      "Check network connection and VPN if updates require internal management.",
      "Check whether endpoint management shows failed deployment."
    ],
    steps: [
      "Restart the device and retry update if a pending reboot exists.",
      "Free disk space if storage is low.",
      "Run Windows Update troubleshooter or approved repair commands.",
      "Retry update installation.",
      "Check update history and confirm successful install.",
      "Escalate if update repeatedly fails with the same error or requires endpoint management action."
    ],
    escalate: "Escalate if updates fail repeatedly, the device is missing critical patches, repair commands fail, or the device requires reimage/remediation through endpoint management.",
    doc: "Checked update history and found repeated failure due to insufficient disk space. Cleared temporary files, restarted device, reran update, and confirmed update installed successfully."
  },
  {
    category: "Endpoint & Windows",
    title: "Software installation request",
    summary: "Use this when a user asks to install software, a browser extension, a driver, or a desktop application.",
    ask: [
      "What software do you need and why?",
      "Is this for a business or academic task?",
      "Is there a license or approval already provided?",
      "What device needs the software?",
      "Is there a required version?"
    ],
    check: [
      "Do not install unapproved software just because it is requested.",
      "Check approved software catalog or standard application list.",
      "Check licensing and eligibility.",
      "Check device compatibility and admin rights policy.",
      "Check security reputation if the software is unfamiliar."
    ],
    steps: [
      "Confirm business need and device details.",
      "Check whether the software is already approved.",
      "Confirm license and approval if required.",
      "Install through the approved deployment method.",
      "Verify the application opens correctly.",
      "Document version installed and any approval used.",
      "Escalate if software is unapproved, restricted, or requires licensing review."
    ],
    escalate: "Escalate if software is unapproved, requests admin rights, handles sensitive data, conflicts with policy, or has licensing restrictions.",
    doc: "Confirmed business need and approval. Verified software was approved and licensed. Installed the approved version through the standard method and confirmed the application opened successfully."
  },
  {
    category: "Endpoint & Windows",
    title: "Disk space full",
    summary: "Use this when a device is low on storage, cannot update, cannot save files, or applications fail due to disk capacity.",
    ask: [
      "What error message are you seeing?",
      "Are you unable to save files or install updates?",
      "Do you store large files locally?",
      "Are OneDrive or downloads taking up space?",
      "Is this a shared or assigned device?"
    ],
    check: [
      "Check available disk space.",
      "Review Downloads, Recycle Bin, temporary files, and large local folders.",
      "Check OneDrive sync settings and offline files.",
      "Check whether old profiles are consuming space.",
      "Avoid deleting user data without permission."
    ],
    steps: [
      "Confirm low storage in Windows settings.",
      "Identify what categories are using space.",
      "Empty temporary files and Recycle Bin if approved.",
      "Move large user files to approved cloud or network storage if appropriate.",
      "Remove unused approved applications only if permitted.",
      "Retry the failed update or application task.",
      "Escalate if storage cannot be recovered or drive replacement is needed."
    ],
    escalate: "Escalate if the disk is failing, encrypted storage is affected, business data may be lost, or space cannot be recovered safely.",
    doc: "Confirmed device had critically low storage. Reviewed storage usage, cleared temporary files, emptied Recycle Bin with user approval, moved large noncritical files to approved storage, and confirmed normal operation resumed."
  },
  {
    category: "Networking & VPN",
    title: "VPN connects but internal apps do not load",
    summary: "Use this when the VPN status says connected but internal websites, shared drives, or apps still fail.",
    ask: [
      "Which internal app or URL are you trying to access?",
      "Does regular internet work while connected to VPN?",
      "Do any other internal resources work?",
      "What error message appears?",
      "Are you on home Wi-Fi, public Wi-Fi, or mobile hotspot?",
      "Did this work before?"
    ],
    check: [
      "Confirm VPN profile and connection status.",
      "Check whether the issue is one user or multiple users.",
      "Check hostname vs IP access if available.",
      "If IP works but hostname fails, suspect DNS.",
      "If neither works, suspect routing, firewall, VPN policy, or app outage.",
      "Check whether the user is in the correct access group."
    ],
    steps: [
      "Confirm the VPN client shows connected.",
      "Confirm normal internet connectivity.",
      "Test another internal resource.",
      "Test the affected resource by hostname and, if available, IP address.",
      "Disconnect and reconnect VPN.",
      "Restart the device if the route/DNS cache may be stale.",
      "Check access group or VPN profile assignment.",
      "Escalate with app URL, error, device name, VPN status, and test results."
    ],
    escalate: "Escalate if DNS, routing, VPN policy, firewall rule, or application outage is suspected, especially if multiple users are affected.",
    doc: "Confirmed VPN connected and internet worked. User could access other internal resources but the affected app failed by hostname. Collected screenshot, device name, app URL, VPN profile, and test results. Escalated with suspected DNS/application routing issue."
  },
  {
    category: "Networking & VPN",
    title: "Wi-Fi connected but no internet",
    summary: "Use this when a device connects to Wi-Fi but websites, email, or apps cannot reach the internet.",
    ask: [
      "Are other devices on the same Wi-Fi working?",
      "Is this home, campus, office, or public Wi-Fi?",
      "Does wired connection work if available?",
      "Do you see 'connected, no internet' or another message?",
      "Did this start after moving locations or changing password?"
    ],
    check: [
      "Check whether the issue is one device or the network.",
      "Check IP address assignment.",
      "Check DNS resolution.",
      "Check captive portal requirements on guest/public networks.",
      "Check if VPN or security software is blocking traffic."
    ],
    steps: [
      "Confirm other devices on the same network work.",
      "Forget and reconnect to Wi-Fi if credentials may be stale.",
      "Restart Wi-Fi adapter or device.",
      "Check IP configuration for valid IP, gateway, and DNS.",
      "Try pinging gateway and a public IP if allowed.",
      "Run DNS test using a known website name.",
      "Check captive portal or network sign-in page.",
      "Escalate if network equipment or access point issue is suspected."
    ],
    escalate: "Escalate if many users are affected, the device gets no valid IP address, the gateway is unreachable, or access point/controller issues are suspected.",
    doc: "Confirmed issue affected only one device. Device had stale Wi-Fi profile. Removed saved network, reconnected with current credentials, verified valid IP configuration, and confirmed internet access restored."
  },
  {
    category: "Networking & VPN",
    title: "DNS issue: website or app not resolving",
    summary: "Use this when a website or internal app does not open by name, but connectivity may still exist.",
    ask: [
      "What exact website or hostname fails?",
      "Does the issue happen on one device or multiple devices?",
      "Can you open other websites?",
      "Does the resource work by IP address if available?",
      "Are you on VPN or local network?"
    ],
    check: [
      "DNS turns names into IP addresses, so name failure can be DNS even when internet works.",
      "Check nslookup results if available.",
      "Check DNS server assigned to the device.",
      "Check VPN DNS behavior for internal names.",
      "Check whether the domain is misspelled, expired, blocked, or down."
    ],
    steps: [
      "Confirm the exact hostname.",
      "Test another website to confirm general connectivity.",
      "Use nslookup to see if the name resolves.",
      "Compare results on another device or network.",
      "Flush DNS cache if stale resolution is suspected.",
      "Reconnect VPN if internal DNS is required.",
      "Escalate if internal DNS records, DNS server, or filtering appears to be the problem."
    ],
    escalate: "Escalate if internal records are missing, multiple users cannot resolve the same name, DNS servers do not respond, or security filtering may be blocking the domain.",
    doc: "Confirmed general internet worked but internal hostname failed to resolve. Tested DNS resolution, reconnected VPN to refresh internal DNS settings, and confirmed hostname resolved successfully after reconnect."
  },
  {
    category: "Networking & VPN",
    title: "DHCP or IP address problem",
    summary: "Use this when a device has no network access because it did not receive a valid IP address.",
    ask: [
      "Are you connected by Wi-Fi or Ethernet?",
      "Are other devices on the same network working?",
      "Did you move desks, change networks, or connect through a dock?",
      "Do you see an IP address starting with 169.254?"
    ],
    check: [
      "A 169.254 address usually means the device did not get an address from DHCP.",
      "Check cable, Wi-Fi connection, docking station, and switch port if on-site.",
      "Check whether DHCP service/scope may be exhausted or unavailable.",
      "Check whether static IP settings were accidentally configured."
    ],
    steps: [
      "Check current IP configuration.",
      "Disconnect/reconnect network connection.",
      "Restart adapter or device.",
      "Release and renew IP address if allowed.",
      "Check whether another device gets a valid IP on the same network.",
      "Check physical cable/dock/port if on Ethernet.",
      "Escalate if DHCP scope, switch port, or network service issue is suspected."
    ],
    escalate: "Escalate if multiple devices cannot get IP addresses, DHCP scope is suspected to be exhausted, or switch/access point issues are involved.",
    doc: "Device had a 169.254 address, indicating it did not receive a DHCP lease. Reconnected network adapter, renewed IP address, confirmed valid IP/gateway/DNS assignment, and verified internet access."
  },
  {
    category: "Networking & VPN",
    title: "Network printer unreachable",
    summary: "Use this when a printer is online for some users but one user cannot print, or the printer cannot be reached by the network.",
    ask: [
      "Which printer are you trying to use?",
      "Can other users print to it?",
      "Are you on VPN, Wi-Fi, or wired network?",
      "Do you see an error message or stuck print queue?",
      "Did this printer work for you before?"
    ],
    check: [
      "Check whether the issue is user/device-specific or printer-wide.",
      "Check printer power, network status, and IP address.",
      "Check print queue and default printer settings.",
      "Check driver installation.",
      "Check whether VPN allows printing to local or internal printers."
    ],
    steps: [
      "Confirm other users can print.",
      "Check the print queue and clear stuck jobs if approved.",
      "Verify the printer is online and reachable.",
      "Remove and re-add the printer if mapping is corrupt.",
      "Update or reinstall driver if needed.",
      "Restart print spooler if appropriate.",
      "Escalate if the printer is offline for everyone or has hardware/network failure."
    ],
    escalate: "Escalate if the device is unreachable on the network, multiple users are affected, hardware errors appear, or print server issues are suspected.",
    doc: "Confirmed printer was working for other users, isolating the issue to the local device. Cleared stuck queue, removed and re-added printer, verified correct driver, and confirmed successful test print."
  },
  {
    category: "Security Triage",
    title: "Phishing email reported",
    summary: "Use this when a user reports a suspicious email with links, attachments, credential requests, urgency, or impersonation.",
    ask: [
      "Did you click any link?",
      "Did you enter your username or password?",
      "Did you open an attachment?",
      "Did you reply or forward the message?",
      "When did you receive it?",
      "Can you provide the sender, subject, screenshot, and message details?"
    ],
    check: [
      "Do not tell the user to delete evidence before it is reviewed.",
      "Collect sender, subject, timestamp, message body, links, attachments, and headers if available.",
      "Look for spoofed domains, urgent language, credential requests, and suspicious URLs.",
      "Determine whether this is only one user or a wider campaign.",
      "Check whether the user interacted with the message."
    ],
    steps: [
      "Tell the user not to click, reply, delete, or forward further.",
      "Collect evidence.",
      "Determine whether the user clicked, entered credentials, or opened attachments.",
      "If no interaction occurred, report the message for security review and advise the user.",
      "If interaction occurred, escalate immediately for account protection and endpoint review.",
      "Document timeline, user action, indicators, and escalation path."
    ],
    escalate: "Escalate immediately if credentials were entered, an attachment was opened, the user clicked a link, multiple users received it, or the email impersonates leadership/finance/IT.",
    doc: "User reported suspicious password-expiration email. Collected sender, subject, timestamp, screenshot, and URL details. User confirmed no interaction occurred. Message was reported for security review and user was advised not to interact with similar emails."
  },
  {
    category: "Security Triage",
    title: "Suspicious login or MFA fatigue",
    summary: "Use this when a user receives unexpected MFA prompts, alerts show unusual sign-ins, or login behavior appears abnormal.",
    ask: [
      "Did you attempt to sign in at that time?",
      "Did you approve any MFA prompt you did not initiate?",
      "Were you traveling or using VPN?",
      "Have you shared your password or entered it into a suspicious page?",
      "Are you seeing repeated MFA notifications?"
    ],
    check: [
      "Check sign-in timestamps, locations, devices, and IP addresses if available.",
      "Look for impossible travel, repeated failures, unfamiliar device, or suspicious MFA behavior.",
      "Check whether the user recently reported phishing.",
      "Confirm whether sessions should be revoked.",
      "Treat unexpected MFA approvals as urgent."
    ],
    steps: [
      "Ask the user not to approve unexpected MFA prompts.",
      "Verify whether the user initiated the sign-in.",
      "Review sign-in activity and MFA logs if available.",
      "If suspicious, escalate to Security.",
      "Reset password and revoke active sessions if directed by policy.",
      "Confirm MFA methods are legitimate and remove unknown methods.",
      "Document all timestamps, user statements, and actions taken."
    ],
    escalate: "Escalate if the user approved an unknown prompt, sign-ins came from unfamiliar locations, there are repeated push attempts, or account compromise is possible.",
    doc: "User reported repeated unexpected MFA prompts. Confirmed user did not initiate sign-ins. Reviewed suspicious activity and escalated to Security. User was advised not to approve prompts, and account protection steps were initiated per procedure."
  },
  {
    category: "Security Triage",
    title: "Endpoint malware or antivirus alert",
    summary: "Use this when endpoint protection reports malware, suspicious process, quarantine event, or blocked activity.",
    ask: [
      "What alert or message appeared?",
      "What were you doing when it appeared?",
      "Did you download or open anything recently?",
      "Is the device acting strangely?",
      "Is the device currently online?"
    ],
    check: [
      "Record the device name, user, alert time, and detection name.",
      "Check whether the item was blocked, quarantined, or allowed.",
      "Check file path, process name, hash if available, and source.",
      "Check whether other devices show similar detections.",
      "Avoid deleting evidence without security direction."
    ],
    steps: [
      "Collect screenshot or alert details.",
      "Determine whether the alert was blocked/quarantined or active.",
      "Ask the user to stop using the device if active infection is suspected.",
      "Disconnect from network only if policy requires or Security instructs.",
      "Escalate to Security with alert details and user activity timeline.",
      "Run approved scan/remediation steps if within scope.",
      "Document containment, remediation, and validation."
    ],
    escalate: "Escalate any confirmed malware, credential theft, suspicious script execution, ransomware behavior, or detection involving sensitive systems.",
    doc: "Collected endpoint alert details including device, user, timestamp, detection name, and file path. Alert showed item was quarantined. Escalated to Security for review and confirmed user did not observe further suspicious behavior."
  },
  {
    category: "Security Triage",
    title: "Lost or stolen laptop",
    summary: "Use this when a company device is missing, stolen, left in public, or cannot be recovered quickly.",
    ask: [
      "When and where was the device last seen?",
      "Was the device powered on, locked, or signed in?",
      "Was any sensitive data stored locally?",
      "Do you have the asset tag or device name?",
      "Was a police report filed if stolen?"
    ],
    check: [
      "Confirm user identity and device assignment.",
      "Check encryption status if available.",
      "Check last check-in time and location if management tools allow.",
      "Check whether remote lock/wipe is required by policy.",
      "Treat lost devices as security events, not just hardware loss."
    ],
    steps: [
      "Collect device name, asset tag, last known location, and timeline.",
      "Notify the proper security/asset team according to process.",
      "Check encryption and management status.",
      "Initiate remote lock/wipe if policy requires and device is reachable.",
      "Disable or protect sessions/accounts if credentials may be exposed.",
      "Document actions, approvals, and user statements.",
      "Coordinate replacement device process separately if needed."
    ],
    escalate: "Escalate immediately if the device contains sensitive data, is unencrypted, was stolen, or the user believes credentials/data may be exposed.",
    doc: "User reported assigned laptop missing. Collected asset details, last known location, and timeline. Confirmed device encryption status and escalated to Security/Asset team for remote protection and recovery workflow."
  },
  {
    category: "Security Triage",
    title: "Outdated software vulnerability",
    summary: "Use this when a scan reports outdated browsers, applications, operating systems, or missing security patches.",
    ask: [
      "Which software and version are affected?",
      "How many devices are affected?",
      "Is the vulnerability actively exploited or high severity?",
      "Are affected assets business-critical?",
      "Is there a known compatibility concern with updating?"
    ],
    check: [
      "Validate the finding before assuming it is accurate.",
      "Check severity, affected version, fixed version, and exploit status.",
      "Prioritize by asset criticality and exposure.",
      "Check whether the update has already been scheduled.",
      "Track exceptions separately with clear justification."
    ],
    steps: [
      "Confirm affected assets and software versions.",
      "Review severity and exploit information.",
      "Test update on a small pilot device/group if appropriate.",
      "Deploy update using the approved patching method.",
      "Verify version after update.",
      "Rescan or collect evidence of remediation.",
      "Document remaining offline, failed, or exception devices."
    ],
    escalate: "Escalate if the vulnerability is critical, actively exploited, affects internet-facing or privileged systems, or cannot be patched within required timelines.",
    doc: "Validated scan results showing outdated application versions. Confirmed fixed version, tested update on pilot device, coordinated deployment, verified updated version, and documented remaining offline devices for follow-up."
  },
  {
    category: "Security Triage",
    title: "Unauthorized software found",
    summary: "Use this when an unapproved application, browser extension, remote access tool, or risky utility appears on a device.",
    ask: [
      "Did you install this software?",
      "What is it used for?",
      "When was it installed?",
      "Did a vendor or support person ask you to install it?",
      "Has the device behaved strangely since installation?"
    ],
    check: [
      "Check approved software list.",
      "Check publisher, install date, version, and file path.",
      "Check whether the software provides remote access or collects data.",
      "Check endpoint alerts and running processes.",
      "Do not remove evidence if security review is needed first."
    ],
    steps: [
      "Confirm the software name and device details.",
      "Determine whether the software is approved, unknown, or prohibited.",
      "Ask user how it appeared and whether it was used.",
      "Collect install details and screenshots.",
      "Remove through approved process if allowed.",
      "Escalate if it is suspicious, remote-access related, or potentially malicious.",
      "Document user statement, software details, and action taken."
    ],
    escalate: "Escalate if the software enables remote access, credential capture, data transfer, tunneling, piracy, or security bypass.",
    doc: "Identified unapproved remote access utility on user device. Collected software details, install date, publisher, and user statement. Escalated for security review before removal due to remote access risk."
  },
  {
    category: "Monitoring & Operations",
    title: "Server or service down alert",
    summary: "Use this when monitoring shows a server, application, website, or service is unavailable.",
    ask: [
      "What service is affected?",
      "When did the alert start?",
      "Is this production, test, or development?",
      "Are users impacted?",
      "Were there recent changes, updates, or deployments?"
    ],
    check: [
      "Check whether the alert is real or a monitoring false positive.",
      "Check service status, host reachability, and application response.",
      "Check recent changes or maintenance windows.",
      "Check dependency services such as DNS, database, network, or authentication.",
      "Check whether multiple alerts point to a wider issue."
    ],
    steps: [
      "Validate the alert from more than one source if possible.",
      "Check whether the host responds to ping or remote management.",
      "Check whether the application/service process is running.",
      "Review recent changes and maintenance schedule.",
      "Restart service only if within scope and approved.",
      "Escalate with alert time, affected service, user impact, checks performed, and screenshots/logs.",
      "Track restoration confirmation."
    ],
    escalate: "Escalate immediately for production outages, multiple affected users, failed core services, failed restart, or unclear root cause.",
    doc: "Validated monitoring alert and confirmed service was unavailable. Checked host reachability and service status, reviewed recent changes, and escalated with timestamps, impact, and evidence. Service restoration was later confirmed."
  },
  {
    category: "Monitoring & Operations",
    title: "High CPU, memory, or disk alert",
    summary: "Use this when monitoring reports resource exhaustion on a workstation, server, or application host.",
    ask: [
      "Which device or server triggered the alert?",
      "What resource is high: CPU, memory, disk, or network?",
      "Is this normal during backups, scans, or batch jobs?",
      "Are users reporting slowness or outage?",
      "When did the spike start?"
    ],
    check: [
      "Check current resource usage and historical trend.",
      "Identify top processes or services.",
      "Check recent jobs, scans, deployments, backups, or updates.",
      "Check disk capacity and log growth.",
      "Check whether the alert is sustained or temporary."
    ],
    steps: [
      "Validate alert and current resource state.",
      "Identify top consuming process/service.",
      "Check whether known scheduled activity explains the spike.",
      "Check logs for errors if usage is abnormal.",
      "Do not terminate processes on critical systems without approval.",
      "Escalate with process name, timeline, graphs, and impact.",
      "Document whether the alert cleared or remains active."
    ],
    escalate: "Escalate if production performance is impacted, the cause is unknown, resource usage is sustained, or a critical service may fail.",
    doc: "Confirmed sustained high CPU alert. Identified top process and checked schedule for expected activity. No matching maintenance found. Escalated with timeline, process details, usage screenshot, and user impact status."
  },
  {
    category: "Monitoring & Operations",
    title: "Website or web app appears down",
    summary: "Use this when a user reports a website, portal, or internal application is unavailable.",
    ask: [
      "What URL are you trying to access?",
      "What error do you see?",
      "Is this happening to one user or many users?",
      "Does it work from another browser, network, or device?",
      "Did this begin after a deployment or maintenance window?"
    ],
    check: [
      "Check whether the URL is correct.",
      "Check DNS resolution and HTTP error code if visible.",
      "Check whether the issue is browser-specific or network-specific.",
      "Check authentication vs application availability.",
      "Check monitoring dashboards or service status."
    ],
    steps: [
      "Confirm the exact URL and error.",
      "Test from another browser or private window.",
      "Test from another network/device if possible.",
      "Check whether login page loads separately from the app.",
      "Check for known outage or maintenance.",
      "Collect screenshot, timestamp, browser, network, and affected users.",
      "Escalate to application/network team with evidence."
    ],
    escalate: "Escalate if multiple users are affected, there is a 5xx/server error, authentication is failing broadly, or production service is unavailable.",
    doc: "Confirmed web app failed for multiple users with server error. Collected URL, timestamp, screenshots, browser details, and impact scope. Escalated to application team and monitored for service restoration."
  },
  {
    category: "Application Support",
    title: "Application opens but a feature fails",
    summary: "Use this when a user can log into an application but a specific button, report, upload, workflow, or page does not work.",
    ask: [
      "Which feature or page is failing?",
      "What steps lead to the error?",
      "What error message appears?",
      "Does this happen to other users?",
      "Does it happen in another browser or private window?",
      "Did it work before?"
    ],
    check: [
      "Separate login/access from application functionality.",
      "Try to reproduce the issue using the user's steps.",
      "Check role/permission if the feature is permission-based.",
      "Check browser cache, extensions, and pop-up blockers.",
      "Check whether recent updates or data changes affected the feature."
    ],
    steps: [
      "Collect exact reproduction steps.",
      "Ask for screenshot or screen recording if available.",
      "Test browser cache/private window.",
      "Confirm user permissions for the feature.",
      "Check whether another user with same role can perform the action.",
      "Document expected vs actual behavior.",
      "Escalate to application owner with clear reproduction steps."
    ],
    escalate: "Escalate if the issue is reproducible, affects business workflow, involves data errors, or requires code/vendor support.",
    doc: "User could log in but report export failed. Collected reproduction steps, screenshot, browser details, role information, and tested in private window. Issue reproduced and escalated to application owner with expected vs actual behavior."
  },
  {
    category: "Application Support",
    title: "Browser cache or SSO loop",
    summary: "Use this when a user is stuck in a sign-in loop, receives a blank page, or an app behaves differently across browsers.",
    ask: [
      "Which browser are you using?",
      "Does it work in private/incognito mode?",
      "Does it work in another browser?",
      "Are you stuck in a redirect/sign-in loop?",
      "Do you see a blank page or role/access error?"
    ],
    check: [
      "Check whether the issue is app-side or browser-side.",
      "Check cookies, cache, extensions, and saved sessions.",
      "Check whether the correct account/persona/role is selected.",
      "Check if SSO works for other apps.",
      "Check for multiple signed-in accounts causing confusion."
    ],
    steps: [
      "Test the app in private/incognito mode.",
      "Test another browser.",
      "Clear site-specific cookies/cache for the affected app if private mode works.",
      "Sign out of all accounts and sign back in with the correct account.",
      "Disable browser extensions temporarily if needed.",
      "Confirm correct role/persona if the portal uses role selection.",
      "Escalate if the issue persists across browsers/devices."
    ],
    escalate: "Escalate if multiple users are affected, SSO is failing across apps, role mapping appears wrong, or the application returns server-side errors.",
    doc: "User experienced repeated SSO loop in one browser. Private window worked, indicating local browser session issue. Cleared site cookies/cache, signed user back in, and confirmed portal loaded correctly."
  },
  {
    category: "Application Support",
    title: "User cannot access a report or dashboard",
    summary: "Use this when a user cannot view a dashboard, report, BI workspace, or analytics page.",
    ask: [
      "Which report or dashboard are you trying to access?",
      "Can you open the app but not the report, or can you not access the app at all?",
      "Were you able to access it before?",
      "Do coworkers in the same role have access?",
      "Do you need view or edit access?"
    ],
    check: [
      "Check whether this is an access issue, licensing issue, or broken report issue.",
      "Check workspace/group membership.",
      "Check report sharing settings.",
      "Check whether the report owner changed permissions.",
      "Check whether the data source or refresh failed."
    ],
    steps: [
      "Confirm the exact report/dashboard name and URL.",
      "Check whether the user can access the platform itself.",
      "Compare access with another approved user in the same role.",
      "Verify group/workspace membership and required license.",
      "Request approval from report owner if new access is needed.",
      "Escalate if the report is broken or data refresh failed.",
      "Document access decision and validation."
    ],
    escalate: "Escalate if permissions are unclear, sensitive data is involved, report ownership is unknown, or the report/data source itself is failing.",
    doc: "Confirmed user could access the platform but not the specific dashboard. Verified required group membership was missing, obtained approval from report owner, updated access, and confirmed dashboard loaded successfully."
  },
  {
    category: "Hardware & Devices",
    title: "Printer or scanner not working",
    summary: "Use this when printing/scanning fails due to queue, driver, network, paper, toner, or device errors.",
    ask: [
      "Which printer/scanner are you using?",
      "Is there an error on the device display?",
      "Can other users print or scan?",
      "Is the issue with one document or all documents?",
      "Are you on the correct network?"
    ],
    check: [
      "Check power, display panel, paper, toner, jams, and network status.",
      "Check print queue for stuck jobs.",
      "Check default printer and driver.",
      "Check whether scanner destination/email folder is configured.",
      "Check if the issue affects multiple users."
    ],
    steps: [
      "Confirm the device and error.",
      "Check if other users are affected.",
      "Clear stuck jobs if approved.",
      "Restart printer if safe and appropriate.",
      "Remove/re-add printer or update driver if local mapping is the issue.",
      "For scanner issues, check destination, email settings, or folder permissions.",
      "Escalate if hardware fault, jam, maintenance code, or network outage is suspected."
    ],
    escalate: "Escalate if the device shows hardware errors, is unreachable for everyone, needs vendor service, or scanning involves permission/server configuration.",
    doc: "Confirmed issue affected one device only. Cleared stuck print queue, verified printer mapping and driver, re-added printer, and confirmed successful test print."
  },
  {
    category: "Hardware & Devices",
    title: "Docking station or external monitor issue",
    summary: "Use this when external monitors, keyboard, mouse, Ethernet, or charging fail through a dock.",
    ask: [
      "What is not working through the dock: monitor, keyboard, mouse, network, or charging?",
      "Does the device work directly without the dock?",
      "Did this start after moving desks or updating the device?",
      "Are the dock cables firmly connected?",
      "Does another laptop work on the same dock?"
    ],
    check: [
      "Check physical cable seating and power to the dock.",
      "Check USB-C/Thunderbolt connection.",
      "Check display settings and input source.",
      "Check dock firmware/driver if supported.",
      "Determine whether the dock, cable, monitor, or laptop is the issue."
    ],
    steps: [
      "Disconnect and reconnect dock power and laptop cable.",
      "Test monitor input/source.",
      "Test another USB port or cable if available.",
      "Bypass dock and connect directly to isolate the issue.",
      "Restart the laptop.",
      "Update dock/display drivers if needed.",
      "Escalate if hardware replacement is likely."
    ],
    escalate: "Escalate if the dock fails with multiple laptops, hardware damage is visible, firmware update is required beyond scope, or replacement approval is needed.",
    doc: "Issue isolated to docking station after direct monitor connection worked. Power-cycled dock, reseated USB-C cable, confirmed display detection, and restored external monitor/keyboard function."
  },
  {
    category: "Hardware & Devices",
    title: "Laptop will not power on",
    summary: "Use this when a laptop has no display, no power lights, charging issues, or appears dead.",
    ask: [
      "Is there any power light or charging indicator?",
      "Does the device respond with a different charger?",
      "Did anything happen before this: drop, spill, update, battery drain?",
      "Are you using a dock or direct charger?",
      "Is there important unsaved work or local data?"
    ],
    check: [
      "Check charger, outlet, cable, dock, and charging port.",
      "Check whether display is off but device is powered.",
      "Check for signs of liquid or physical damage.",
      "Try a hard reset/power drain if approved.",
      "Do not open hardware unless authorized."
    ],
    steps: [
      "Connect known-good charger directly to laptop.",
      "Check power indicator and charging light.",
      "Hold power button for approved hard reset duration.",
      "Test external display if the laptop may be on with no screen.",
      "Remove dock from the path.",
      "Document physical damage or spill if present.",
      "Escalate for hardware repair/replacement if no power remains."
    ],
    escalate: "Escalate if there is no power with known-good charger, physical damage, liquid damage, battery swelling, or warranty/vendor repair is needed.",
    doc: "Tested device with known-good charger and bypassed dock. No power indicators appeared after approved hard reset. No visible damage found. Escalated for hardware repair/replacement evaluation."
  },
  {
    category: "Security Triage",
    title: "USB drive or removable media concern",
    summary: "Use this when a user found a USB drive, inserted unknown media, or reports files from an external device behaving suspiciously.",
    ask: [
      "Where did the USB device come from?",
      "Was it inserted into a company computer?",
      "Were any files opened or copied?",
      "Did any pop-ups or alerts appear?",
      "Which device was used?"
    ],
    check: [
      "Unknown USB devices can introduce malware or data leakage risk.",
      "Check endpoint alerts and device control logs if available.",
      "Collect device/user/timeline details.",
      "Do not plug unknown media into additional systems.",
      "Preserve the device if security review is required."
    ],
    steps: [
      "Tell user not to use the USB device further.",
      "Collect details: origin, time, device used, files opened, alerts seen.",
      "Check endpoint protection logs for the computer involved.",
      "Escalate to Security if unknown media was inserted or alerts triggered.",
      "Run approved scans/remediation only if directed.",
      "Document timeline and actions."
    ],
    escalate: "Escalate if unknown media was inserted, any file was opened, endpoint alerts appeared, or sensitive data may have been copied.",
    doc: "User reported unknown USB device found and inserted briefly. Collected device/user/timeline details, confirmed no files were opened, and escalated to Security for removable media review according to policy."
  },
  {
    category: "Security Triage",
    title: "Data accidentally sent to wrong recipient",
    summary: "Use this when a user emails, uploads, or shares sensitive information with the wrong person or group.",
    ask: [
      "What information was shared?",
      "Who received it? Internal or external?",
      "When was it sent?",
      "Was it opened, downloaded, or forwarded?",
      "Can access be revoked?"
    ],
    check: [
      "Do not downplay possible data exposure.",
      "Classify the data type: public, internal, confidential, regulated, personal, financial, health, or student data.",
      "Check whether the sharing link can be revoked.",
      "Check whether message recall is possible, but do not rely on it.",
      "Preserve details for privacy/security review."
    ],
    steps: [
      "Collect sender, recipient, timestamp, data type, and sharing method.",
      "Revoke shared link or access if possible.",
      "Ask user not to send more details broadly.",
      "Escalate to Security/Privacy if sensitive or regulated data is involved.",
      "Document exactly what was shared and actions taken.",
      "Follow guidance from privacy/security team."
    ],
    escalate: "Escalate immediately for external recipients, regulated data, personal data, financial/health/student records, or if the data was downloaded/forwarded.",
    doc: "User reported confidential file shared with wrong external recipient. Collected file name, data type, recipient, timestamp, and sharing method. Revoked access where possible and escalated to Privacy/Security for review."
  },
  {
    category: "Security Triage",
    title: "Possible account compromise",
    summary: "Use this when there are signs an account may be taken over, such as unusual emails, rules, sign-ins, or password changes.",
    ask: [
      "Did you notice emails sent that you did not send?",
      "Did you recently enter your password into a link?",
      "Are there unknown inbox rules or forwarding rules?",
      "Did you receive password reset or MFA alerts?",
      "When did you first notice the issue?"
    ],
    check: [
      "Check sign-in activity, MFA prompts, and recent password changes.",
      "Check mailbox forwarding rules and suspicious inbox rules.",
      "Check sent items and deleted items for abnormal activity.",
      "Check whether MFA methods were changed.",
      "Treat as urgent until compromise is ruled out."
    ],
    steps: [
      "Escalate to Security immediately if compromise is suspected.",
      "Preserve timeline and evidence.",
      "Reset password and revoke sessions if directed by procedure.",
      "Review/remove suspicious MFA methods and mailbox rules if allowed.",
      "Check for suspicious emails sent to contacts.",
      "Document user statements, indicators, and containment actions.",
      "Confirm account is stable after remediation."
    ],
    escalate: "Escalate immediately for any suspected compromise, unknown MFA approval, credential entry into suspicious link, abnormal mailbox rules, or unusual sent messages.",
    doc: "User reported emails sent without their knowledge. Collected timeline and indicators, escalated to Security, initiated account protection steps, and documented suspicious sign-in and mailbox activity for investigation."
  },
  {
    category: "Application Support",
    title: "User cannot upload or download files",
    summary: "Use this when file upload/download fails in a portal, LMS, cloud app, or internal system.",
    ask: [
      "What file type and size are you uploading/downloading?",
      "What error message appears?",
      "Does it fail in another browser?",
      "Does it fail with a different file?",
      "Are pop-ups or downloads blocked by the browser?"
    ],
    check: [
      "Check file size and file type restrictions.",
      "Check browser permissions and pop-up/download blocking.",
      "Check user permissions in the application.",
      "Check network/VPN requirements.",
      "Check whether the app storage or service is degraded."
    ],
    steps: [
      "Confirm exact file type, size, and error.",
      "Test another file to separate file-specific vs app issue.",
      "Test another browser/private window.",
      "Check app permissions and storage limits.",
      "Check browser download/upload settings.",
      "Collect screenshot and reproduction steps.",
      "Escalate if the app rejects valid files or multiple users are affected."
    ],
    escalate: "Escalate if the issue is reproducible with valid files, affects multiple users, involves missing data, or requires application owner/vendor review.",
    doc: "Upload failed due to unsupported file type. Confirmed accepted file formats, had user export file into approved format, retested upload, and confirmed successful submission."
  },
  {
    category: "Hardware & Devices",
    title: "New device setup or onboarding support",
    summary: "Use this when a user receives a new device and needs core setup, access checks, apps, security, and handoff validation.",
    ask: [
      "Who is the device assigned to?",
      "What role or department is the user in?",
      "What core apps and access are required?",
      "Is the user remote or on-site?",
      "Is there an old device to transfer or retire?"
    ],
    check: [
      "Confirm device asset record and assignment.",
      "Check encryption, endpoint protection, updates, and management enrollment.",
      "Check required software and access groups.",
      "Check Microsoft 365, VPN, printers, shared drives, and key apps.",
      "Confirm user can sign in and complete MFA."
    ],
    steps: [
      "Verify device assignment and user identity.",
      "Confirm device is enrolled, encrypted, patched, and protected.",
      "Install approved role-based applications.",
      "Confirm account sign-in, email, Teams, VPN, and shared access.",
      "Set up printers or peripherals if needed.",
      "Transfer approved data from old device if required.",
      "Document handoff and user confirmation."
    ],
    escalate: "Escalate if required access is missing approvals, device enrollment fails, encryption fails, or hardware replacement is needed.",
    doc: "Completed new device setup. Verified encryption, endpoint protection, management enrollment, Microsoft 365 sign-in, MFA, VPN, required applications, and user access. User confirmed device was ready for work."
  },
  {
    category: "Security Triage",
    title: "User reports suspicious pop-up or browser redirect",
    summary: "Use this when a browser shows fake virus alerts, support scam pop-ups, unwanted redirects, or suspicious extensions.",
    ask: [
      "What website were you visiting when it appeared?",
      "Did you click anything or call a number?",
      "Did you download or install anything?",
      "Does it happen in every browser?",
      "Can you share a screenshot?"
    ],
    check: [
      "Fake support pop-ups often try to scare users into calling or installing remote tools.",
      "Check browser extensions and notification permissions.",
      "Check downloads folder for suspicious installers.",
      "Check endpoint security alerts.",
      "Check whether the user entered credentials or payment information."
    ],
    steps: [
      "Tell user not to call numbers or install anything from the pop-up.",
      "Collect screenshot and URL if safe.",
      "Close browser through Task Manager if the pop-up traps the window.",
      "Clear suspicious site notifications and remove unknown extensions.",
      "Check downloads and endpoint alerts.",
      "Escalate if software was installed, credentials entered, or remote access granted.",
      "Document user actions and remediation."
    ],
    escalate: "Escalate if the user installed remote software, shared credentials, paid money, or endpoint alerts indicate malware.",
    doc: "User reported fake virus warning pop-up. Confirmed no credentials entered and no software installed. Removed suspicious browser notification permission, checked extensions and downloads, and advised user on reporting similar pop-ups."
  },
  {
    category: "Monitoring & Operations",
    title: "Backup failure alert",
    summary: "Use this when a backup job fails, misses schedule, or storage target becomes unavailable.",
    ask: [
      "Which system or backup job failed?",
      "When did the last successful backup run?",
      "What error message or code appears?",
      "Is this a critical system?",
      "Did storage, credentials, or network access change recently?"
    ],
    check: [
      "Check last successful backup time.",
      "Check whether the failure affects one job or many.",
      "Check storage capacity and destination reachability.",
      "Check credentials/service account status.",
      "Check recent changes and maintenance windows."
    ],
    steps: [
      "Validate alert and identify affected backup job.",
      "Review error code/message.",
      "Check storage target, capacity, and network path.",
      "Check service account/credential status if authentication failed.",
      "Rerun backup only if approved and safe.",
      "Escalate with last successful backup time and business impact.",
      "Confirm next backup success or planned remediation."
    ],
    escalate: "Escalate if a critical system lacks a recent backup, multiple backup jobs fail, storage is unavailable, or restore readiness is at risk.",
    doc: "Validated backup failure alert. Last successful backup was previous day. Storage target was reachable but job failed with authentication error. Escalated to backup administrator with job name, error, and last success timestamp."
  }
];

const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listItems(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
}

function playbookText(item) {
  return [
    item.title,
    item.summary,
    "Questions to ask:", ...item.ask,
    "What to check:", ...item.check,
    "Steps to follow:", ...item.steps,
    "When to escalate:", item.escalate,
    "Documentation note:", item.doc
  ].join("\n");
}

function matchesSearch(item, term) {
  if (!term) return true;
  const searchable = [
    item.category,
    item.title,
    item.summary,
    ...item.ask,
    ...item.check,
    ...item.steps,
    item.escalate,
    item.doc
  ].join(" ").toLowerCase();
  return searchable.includes(term);
}

function groupedPlaybooks(items) {
  const groups = new Map();
  items.forEach(item => {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  });
  return groups;
}

function subBlock(title, html, extraClass = "") {
  return `
    <details class="sub-block ${extraClass}">
      <summary>${escapeHtml(title)}</summary>
      <div class="sub-content">${html}</div>
    </details>
  `;
}

function render() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = playbooks.filter(item => matchesSearch(item, term));
  const groups = groupedPlaybooks(filtered);

  resultCount.textContent = term
    ? `${filtered.length} matching playbook${filtered.length === 1 ? "" : "s"}`
    : `${playbooks.length} playbooks across ${new Set(playbooks.map(item => item.category)).size} categories`;

  if (!filtered.length) {
    categoryList.innerHTML = `<div class="empty-state">No matching problem playbooks found. Try another word like account, VPN, Outlook, phishing, DNS, printer, endpoint, or backup.</div>`;
    return;
  }

  categoryList.innerHTML = Array.from(groups.entries()).map(([category, items]) => `
    <details class="category-group" ${term ? "open" : ""}>
      <summary class="category-summary">
        <span class="category-left">
          <span class="chevron">›</span>
          <span class="category-title">${escapeHtml(category)}</span>
        </span>
        <span class="category-count">${items.length}</span>
      </summary>

      <div class="problem-list">
        ${items.map((item) => {
          const index = playbooks.indexOf(item);
          return `
            <details class="problem-item">
              <summary class="problem-summary">
                <span class="problem-title">${escapeHtml(item.title)}</span>
                <span class="problem-tag">Open playbook</span>
              </summary>
              <div class="problem-body">
                <p class="problem-summary-line">${escapeHtml(item.summary)}</p>
                <div class="section-grid">
                  ${subBlock("Questions to ask", listItems(item.ask))}
                  ${subBlock("What to check", listItems(item.check))}
                  ${subBlock("Steps to follow", listItems(item.steps, true))}
                  ${subBlock("When to escalate", `<p class="warning-box">${escapeHtml(item.escalate)}</p>`)}
                  ${subBlock("Documentation note", `<pre class="note-box">${escapeHtml(item.doc)}</pre><button class="copy-btn" data-index="${index}">Copy note</button>`)}
                </div>
              </div>
            </details>
          `;
        }).join("")}
      </div>
    </details>
  `).join("");

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      const item = playbooks[Number(btn.dataset.index)];
      try {
        await navigator.clipboard.writeText(playbookText(item));
        const original = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = original), 1200);
      } catch (error) {
        const original = btn.textContent;
        btn.textContent = "Copy failed";
        setTimeout(() => (btn.textContent = original), 1200);
      }
    });
  });
}

searchInput.addEventListener("input", render);
render();
