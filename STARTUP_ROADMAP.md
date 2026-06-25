# Home Care Management App – Startup Roadmap

## Overview
This roadmap translates the comprehensive requirements into a phased, zero-cost MVP build using Vercel, open-source tools, and free cloud services.

---

## Phase 0: Foundation (Week 1–2)
**Goal:** Set up development environment and create core infrastructure.

### Tasks
1. **Create GitHub repository** (free)
   - Initialize with README, .gitignore (Node.js), LICENSE
   - Create main, develop, and feature branches

2. **Set up project structure**
   - Frontend: Next.js (React, free, Vercel-native)
   - Backend: Next.js API routes or Node.js/Express
   - Database: PostgreSQL (free tier on Supabase)
   - Authentication: Supabase Auth (free OAuth)
   - File storage: Supabase Storage (free S3-like bucket)

3. **Local development stack**
   - Node.js, npm/yarn
   - Docker (optional, for local PostgreSQL)
   - Git & GitHub CLI

4. **Environment setup**
   - `.env.local` for secrets (API keys, DB credentials)
   - Vercel integration (auto-deploy on GitHub push)

---

## Phase 1: MVP – Core Features (Weeks 3–8)
**Goal:** Build the minimum viable product to demo care management workflows.

### 1.1 – User Management & Authentication
- [x] Multi-tenant setup (agency isolation)
- [x] Role-based access control (Admin, Manager, Care Worker, Family Rep)
- [x] Email/password login (Supabase Auth)
- [x] Session management & MFA (optional for MVP, Phase 2)
- [x] Audit logging of logins

**Deliverable:** Login page, signup, role-based dashboard routing

---

### 1.2 – Client Records
- [x] Create/edit/view client profiles (name, DOB, contact, medical history)
- [x] Store personal data (encrypted at rest by Supabase default)
- [x] Soft-delete (archive) old records
- [x] Audit trail (who changed what, when)

**Deliverable:** Client list page, detail page, edit form

---

### 1.3 – Care Plans
- [x] Create care plans linked to clients
- [x] Versioning (track plan changes)
- [x] Care goals, support needs, risk flags
- [x] E-signature field (timestamp + user name)
- [x] Review alerts (notify when plan is due for review)

**Deliverable:** Care plan form, version history, signature capture

---

### 1.4 – Staff Scheduling (Rostering)
- [x] Create shifts (date, time, client, assigned care worker)
- [x] Monthly calendar view
- [x] Staffing adequacy checks (flag if understaffed)
- [x] Shift templates (repeating shifts)

**Deliverable:** Calendar UI, shift creation form, staffing alerts

---

### 1.5 – Shift Handovers
- [x] Notes on shift completion (client status, tasks done, concerns)
- [x] Handover sign-off (incoming worker acknowledges)
- [x] Link to shift schedule

**Deliverable:** Handover form, acknowledgment workflow

---

### 1.6 – Incident Reporting
- [x] Incident form (date, type, description, injured party)
- [x] CQC category tagging (accident, safeguarding, service disruption)
- [x] Flag notifiable incidents
- [x] Incident list & export (for regulator reports)

**Deliverable:** Incident form, list, CQC export template

---

### 1.7 – Training & Certificates
- [x] Training matrix (staff + mandatory courses)
- [x] Certificate upload (e.g. DBS, first aid)
- [x] Expiry date tracking
- [x] Renewal reminders (via email)

**Deliverable:** Training tracker, certificate upload, expiry alerts

---

### 1.8 – Messaging & Notifications
- [x] In-app messages (secure intra-agency chat)
- [x] Email alerts (shift reminders, certificate expiry)
- [x] Optional SMS via free tier (e.g. AWS SNS sandbox or Twilio trial)

**Deliverable:** Messaging UI, email integration, notification logs

---

### 1.9 – Consent Records
- [x] Consent form template (care interventions, data sharing)
- [x] E-signature on consent
- [x] Capacity assessment notes (MCA compliance)
- [x] Version & withdrawal tracking

**Deliverable:** Consent form, signature capture, history view

---

### 1.10 – Audit Trail & Logging
- [x] Log all user actions (login, data create/update/delete, downloads)
- [x] Audit dashboard (admin view of logs)
- [x] Export logs for compliance review

**Deliverable:** Audit log table, export CSV

---

## Phase 2: Polish & Scale (Weeks 9–16)
**Goal:** Add advanced features, improve UX, harden security.

- [ ] Mobile-responsive design (tested on tablet/phone)
- [ ] Offline mode (service worker, sync on reconnect)
- [ ] NHS Login integration (OAuth)
- [ ] SMS alerts (production Twilio/AWS SNS)
- [ ] Advanced analytics (staff utilization, care metrics)
- [ ] WCAG 2.1 AA accessibility audit & fixes
- [ ] Multi-language support (Welsh, regional)
- [ ] Performance optimization (lazy loading, caching)
- [ ] Full MFA (TOTP, backup codes)
- [ ] Data export/import (bulk upload, GDPR SAR exports)

---

## Phase 3: Production Hardening (Weeks 17–20)
**Goal:** Security, compliance, monitoring, launch.

- [ ] Penetration testing (lightweight, community resources)
- [ ] DPIA review (Data Protection Impact Assessment)
- [ ] DSPT compliance checklist
- [ ] SSL/TLS setup (Vercel auto-handles)
- [ ] Backup & disaster recovery tests
- [ ] Monitoring & alerting (Sentry for errors, LogRocket for UX)
- [ ] Documentation (user guide, admin manual, API docs)
- [ ] Staff training & onboarding
- [ ] Go-live preparation (data migration, rollback plan)

---

## Tech Stack (Free/Zero-Cost Options)

| Layer          | Technology         | Free Tier / Cost      | Notes                              |
|----------------|--------------------|----------------------|------------------------------------|
| **Hosting**    | Vercel             | Free tier (6/month)   | Included Next.js, auto-deploy      |
| **Frontend**   | Next.js + React    | Free (open-source)    | Full-stack framework               |
| **Backend API**| Next.js API routes | Free (included)       | Built into Next.js                 |
| **Database**   | PostgreSQL         | Supabase free (1 GB)  | Managed, includes Auth & Storage   |
| **Auth**       | Supabase Auth      | Free tier (50k users) | OAuth, JWT, session management     |
| **File Store** | Supabase Storage   | Free tier (1 GB)      | S3-like for certificates, docs     |
| **Email**      | SendGrid/Resend    | Free tier (100/day)   | Transactional email for alerts     |
| **Monitoring** | Sentry             | Free tier             | Error tracking & uptime            |
| **Version Control** | GitHub         | Free public repo      | CI/CD via GitHub Actions           |

---

## MVP Timeline

| Week   | Focus                                      | Deliverable              |
|--------|--------------------------------------------|---------------------------|
| 1–2    | Setup, DB schema, login                    | Vercel URL (login works) |
| 3–4    | Client records, care plans                 | Client management demo   |
| 5      | Scheduling, rostering                      | Shift calendar demo      |
| 6      | Handovers, incident reporting              | Incident form ready      |
| 7      | Training tracker, messaging                | Trainer can upload certs |
| 8      | Testing, performance, launch prep          | MVP ready for beta users |

---

## Success Metrics (MVP Phase)

1. **User Management:** 5+ test agencies, 50+ users across roles
2. **Data Integrity:** 100% audit logging, zero data loss in tests
3. **Performance:** <3s page load, <100ms API response
4. **Accessibility:** WCAG AA on core pages (assessed mid-project)
5. **Security:** No exposed secrets, TLS everywhere, encrypted DB
6. **Usability:** Care workers can create client & plan in <2 min

---

**Last updated:** 2026-06-25  
**Version:** 1.0 (MVP Roadmap)
