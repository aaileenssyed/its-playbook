# IT Support & Security Triage Problem Playbook

(Click on the link to get to the page: https://aaileenssyed.github.io/its-playbook/)

A practical problem-solving playbook built around daily IT ticketing practice, Jira-style documentation, and security-aware troubleshooting.

This project is focused on learning how to handle common IT support and entry-level security tickets in a structured way: asking the right questions, checking the right systems, documenting the work clearly, knowing when to escalate, and writing useful internal notes that another technician could follow.

## Purpose

The goal of this playbook is to build stronger real-world troubleshooting habits through daily simulated ticketing practice.

Instead of only studying concepts, this project turns common IT and security problems into repeatable playbooks that can be used for Jira Service Management ticket practice. Each problem includes the kind of thinking expected in a help desk, technical support, NOC, SOC, IAM, or security operations environment.

The focus is on:

- Ticket intake and issue clarification
- Customer-facing communication
- Internal troubleshooting notes
- Priority and impact awareness
- Escalation criteria
- Resolution documentation
- Security-aware decision making
- Repeatable support workflows

## What This Project Demonstrates

This playbook is meant to show practical understanding of IT support and cybersecurity fundamentals, including:

- Microsoft 365 troubleshooting
- Windows support
- Active Directory and access issues
- MFA and login problems
- VPN and remote access troubleshooting
- DNS, DHCP, and network connectivity basics
- Outlook, Teams, and OneDrive support
- Phishing triage
- Suspicious login investigation
- Endpoint security alerts
- Vulnerability remediation workflows
- Printer and hardware troubleshooting
- Application and SSO issues
- Server alert triage
- Clear technical documentation

## Daily Jira Ticketing Workflow

The playbook supports a daily ticketing routine where each simulated ticket is handled like a real support request.

A typical ticket workflow:

1. **Read the issue carefully**
   - Identify the affected user, system, device, and business impact.
   - Separate symptoms from assumptions.

2. **Classify the ticket**
   - Determine whether the issue is hardware, software, account/access, network, Microsoft 365, security, application, or infrastructure-related.

3. **Set priority**
   - Consider urgency, number of users affected, business impact, and security risk.

4. **Ask clarifying questions**
   - Collect the missing information needed to troubleshoot properly.

5. **Perform initial checks**
   - Verify identity where needed.
   - Check account status, device status, network status, app status, or security indicators depending on the issue.

6. **Document internal troubleshooting**
   - Write clear internal notes showing what was checked, what was found, what actions were taken, and what still needs follow-up.

7. **Communicate with the user**
   - Keep the response clear, professional, and simple.
   - Avoid blaming the user or using unnecessary jargon.

8. **Resolve or escalate**
   - Resolve when the issue is within scope.
   - Escalate when it requires higher-level access, security review, infrastructure changes, vendor support, or deeper investigation.

9. **Write the resolution note**
   - Summarize the root cause, actions taken, outcome, and any follow-up steps.

10. **Turn repeat issues into knowledge**
   - Common issues can become reusable troubleshooting notes or knowledge base entries.

## Jira Documentation Style

Each ticket should include enough detail for another technician to understand what happened without needing to ask for the full story again.

### Useful Jira Fields to Practice

- Summary
- Request type
- Priority
- Affected user
- Department or location
- Device name or asset tag
- Application or system affected
- Error message
- Time issue started
- Business impact
- Labels
- Customer response
- Internal comment
- Escalation note
- Resolution note

## Internal Comment Format

A strong internal comment should be specific, ordered, and easy to follow.

Example structure:

```text
Issue:
User reported they could not access Microsoft 365.

Checks performed:
- Verified user identity.
- Confirmed issue affected Microsoft 365 login only.
- Checked account status in identity system.
- Confirmed account was locked due to repeated failed attempts.
- Reviewed for suspicious login indicators.

Action taken:
- Unlocked the account following standard procedure.
- Confirmed MFA was working.
- Asked user to sign in again using a fresh browser session.

Result:
User confirmed successful login.

Follow-up:
No suspicious activity observed. Ticket can be resolved.
```

## Customer Response Style

Customer-facing replies should be clear, calm, and simple.

Good customer replies usually include:

- Acknowledgement of the issue
- One or two clarifying questions
- Any immediate safety instruction if needed
- Next step the technician will take
- No unnecessary technical overload

Example:

```text
Hi,

Thanks for reporting this. I’ll help review the access issue.

Can you please confirm which system you are trying to access and send a screenshot of the error message? Also, please let me know whether this is affecting only this system or other applications as well.

Thank you.
```

## Escalation Mindset

Escalation is not failure. A good technician escalates when the issue is outside their access level, requires deeper investigation, or has security/business impact.

Escalate when:

- Multiple users are affected
- A critical business system is down
- There are signs of account compromise
- A user clicked a phishing link or entered credentials
- A device may be infected
- Network routing, firewall, or DNS changes may be needed
- Server performance or disk alerts require admin action
- A vulnerability requires patch coordination or exception approval
- The issue requires vendor or application owner support

## Problem Areas Covered

The playbook includes practical troubleshooting guidance across several ticket categories.

### Account and Access

- User cannot log in
- Password reset or account lockout
- MFA issues
- Active Directory group/access requests
- Shared drive permissions
- SSO loops
- Suspicious login activity

### Microsoft 365 and Collaboration Tools

- Outlook not syncing
- Teams audio/video issues
- OneDrive sync problems
- Office activation errors
- Mailbox or calendar access issues

### Windows and Endpoint Support

- Slow Windows laptop
- Disk space issues
- Windows update failures
- BitLocker recovery key prompts
- Software installation requests
- Device setup and onboarding
- Endpoint security alerts

### Network and Remote Access

- VPN connects but internal apps do not load
- DNS resolution problems
- DHCP/IP address issues
- Wi-Fi connectivity problems
- Shared drive access over VPN
- Network printer connectivity issues

### Security Triage

- Phishing email reports
- Suspicious login investigation
- Malware or endpoint protection alerts
- Lost or stolen device response
- Unauthorized software
- Data sent to the wrong recipient
- Vulnerability scan findings

### Infrastructure and Application Support

- Server high CPU or memory alerts
- Disk space alerts
- Website or internal application down
- Backup failure alerts
- Report or dashboard not loading
- File upload/download issues
- Application error messages

## Skills Practiced

This project is designed to build and show skills in:

- Jira Service Management
- ITSM workflows
- Help desk support
- Technical support
- Ticket documentation
- Customer communication
- Troubleshooting methodology
- Microsoft 365 support
- Windows troubleshooting
- Active Directory basics
- VPN troubleshooting
- Network troubleshooting
- Security triage
- Phishing analysis
- Vulnerability management
- Incident escalation
- Knowledge base writing

## Example Daily Practice Routine

A daily practice session can include:

- Create 3 to 5 simulated tickets
- Assign each ticket a category and priority
- Write the first customer response
- Add an internal troubleshooting comment
- Decide whether the ticket should be resolved or escalated
- Write the resolution or escalation note
- Review what could be documented better

Example daily mix:

- 1 account/access ticket
- 1 Microsoft 365 or Windows ticket
- 1 VPN/network ticket
- 1 security ticket
- 1 vulnerability or endpoint ticket

## Learning Goal

The main goal of this project is to become better at thinking like a support analyst and security-aware technician.

That means learning to:

- Slow down and clarify the issue
- Avoid jumping straight to a fix
- Verify access and authorization
- Understand impact and urgency
- Document steps clearly
- Communicate professionally
- Know when to escalate
- Connect IT problems to security risk

This playbook is a growing reference for practical IT support, Jira ticketing, and entry-level security operations practice.
